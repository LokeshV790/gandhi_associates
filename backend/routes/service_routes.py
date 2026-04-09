from fastapi import APIRouter, HTTPException
from models.service_inquiry import ServiceInquiry, ServiceInquiryCreate
from database import get_database
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/services", tags=["services"])

@router.post("/inquire")
async def submit_service_inquiry(inquiry_data: ServiceInquiryCreate):
    try:
        db = get_database()
        # Create service inquiry object
        service_inquiry = ServiceInquiry(**inquiry_data.model_dump())
        
        # Convert to dict and serialize datetime
        doc = service_inquiry.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        # Insert into database
        result = await db.service_inquiries.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Service inquiry submitted: {service_inquiry.id}")
            return {
                "success": True,
                "message": "Thank you for your inquiry! Our team will contact you soon.",
                "data": {"id": service_inquiry.id}
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save service inquiry")
            
    except Exception as e:
        logger.error(f"Error submitting service inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/inquiries")
async def get_service_inquiries(status: str = None, limit: int = 50):
    try:
        db = get_database()
        query = {}
        if status:
            query["status"] = status
            
        inquiries = await db.service_inquiries.find(query, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
        
        return {
            "success": True,
            "data": inquiries,
            "count": len(inquiries)
        }
    except Exception as e:
        logger.error(f"Error fetching service inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))