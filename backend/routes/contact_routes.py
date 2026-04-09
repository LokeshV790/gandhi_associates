from fastapi import APIRouter, HTTPException
from models.contact_message import ContactMessage, ContactMessageCreate
from database import get_database
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

@router.post("/submit")
async def submit_contact_form(contact_data: ContactMessageCreate):
    try:
        db = get_database()
        # Create contact message object
        contact_message = ContactMessage(**contact_data.model_dump())
        
        # Convert to dict and serialize datetime
        doc = contact_message.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        # Insert into database
        result = await db.contact_messages.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Contact form submitted: {contact_message.id}")
            return {
                "success": True,
                "message": "Thank you for contacting us! We will get back to you within 24 hours.",
                "data": {"id": contact_message.id}
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/messages")
async def get_contact_messages(status: str = None, limit: int = 50):
    try:
        db = get_database()
        query = {}
        if status:
            query["status"] = status
            
        messages = await db.contact_messages.find(query, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
        
        return {
            "success": True,
            "data": messages,
            "count": len(messages)
        }
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))