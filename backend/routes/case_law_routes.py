from fastapi import APIRouter, HTTPException, Query
from models.case_law import CaseLaw, CaseLawCreate
from database import get_database
import logging
from typing import Optional

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/case-laws", tags=["case-laws"])

@router.get("")
async def get_case_laws(
    search: Optional[str] = Query(None, description="Search term for title, category, or description"),
    category: Optional[str] = Query(None, description="Filter by category")
):
    try:
        db = get_database()
        query = {}
        
        # Build search query
        if search:
            query["$or"] = [
                {"title": {"$regex": search, "$options": "i"}},
                {"category": {"$regex": search, "$options": "i"}},
                {"description": {"$regex": search, "$options": "i"}}
            ]
        
        if category:
            query["category"] = category
        
        case_laws = await db.case_laws.find(query, {"_id": 0}).sort("date", -1).to_list(100)
        
        return {
            "success": True,
            "data": case_laws,
            "count": len(case_laws)
        }
    except Exception as e:
        logger.error(f"Error fetching case laws: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{slug}")
async def get_case_law_by_slug(slug: str):
    try:
        db = get_database()
        case_law = await db.case_laws.find_one({"slug": slug}, {"_id": 0})
        
        if not case_law:
            raise HTTPException(status_code=404, detail="Case law not found")
        
        return {
            "success": True,
            "data": case_law
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching case law: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/create")
async def create_case_law(case_law_data: CaseLawCreate):
    try:
        db = get_database()
        # Create case law object
        case_law = CaseLaw(**case_law_data.model_dump())
        
        # Convert to dict and serialize datetime
        doc = case_law.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        
        # Insert into database
        result = await db.case_laws.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Case law created: {case_law.id}")
            return {
                "success": True,
                "message": "Case law created successfully",
                "data": {"id": case_law.id}
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to create case law")
            
    except Exception as e:
        logger.error(f"Error creating case law: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))