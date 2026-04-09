from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List
from datetime import datetime, timezone
import uuid

class CaseLaw(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str
    description: str
    content: Optional[str] = None
    date: str
    tags: List[str] = []
    slug: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class CaseLawCreate(BaseModel):
    title: str
    category: str
    description: str
    content: Optional[str] = None
    date: str
    tags: List[str] = []
    slug: str