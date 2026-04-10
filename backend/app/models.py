from pydantic import BaseModel
from typing import Optional

class PredictionResponse(BaseModel):
    """Response model for disease prediction"""
    success: bool
    prediction: str
    confidence: float
    image: str
    message: str

class HealthResponse(BaseModel):
    """Response model for health check"""
    status: str
    message: str
    model_loaded: Optional[bool] = None
