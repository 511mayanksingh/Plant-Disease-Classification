import os
os.environ['TF_USE_LEGACY_KERAS'] = '1'

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import base64
from typing import Optional

from .ml_model import ModelPredictor
from .models import PredictionResponse, HealthResponse

app = FastAPI(
    title="Fasal Arogya API",
    description="Plant Disease Detection API using VGG16",
    version="2.0.0"
)

# CORS middleware to allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize ML model
model_predictor = ModelPredictor()

@app.on_event("startup")
async def startup_event():
    """Load ML model on startup"""
    model_predictor.load_model()

@app.get("/", response_model=HealthResponse)
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Fasal Arogya API is running",
        "version": "2.0.0"
    }

@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "message": "API is operational",
        "model_loaded": model_predictor.model is not None
    }

@app.post("/api/predict", response_model=PredictionResponse)
async def predict_disease(file: UploadFile = File(...)):
    """
    Predict plant disease from uploaded image

    Args:
        file: Uploaded image file (JPG, PNG, JPEG)

    Returns:
        PredictionResponse with prediction and base64 encoded image
    """
    # Validate file type
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="File must be an image (JPG, PNG, JPEG)"
        )

    try:
        # Read image file
        image_bytes = await file.read()

        # Make prediction
        prediction, confidence = model_predictor.predict(image_bytes)

        # Convert image to base64 for frontend display
        image_base64 = base64.b64encode(image_bytes).decode('utf-8')

        return {
            "success": True,
            "prediction": prediction,
            "confidence": confidence,
            "image": image_base64,
            "message": f"Detected: {prediction.replace('_', ' ').title()}"
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )

@app.get("/api/diseases")
async def get_diseases():
    """Get list of all detectable diseases"""
    diseases = [
        {
            "id": 1,
            "name": "Pepper Bell - Bacterial Spot",
            "category": "Pepper",
            "type": "Disease",
            "icon": "🌶️"
        },
        {
            "id": 2,
            "name": "Pepper Bell - Healthy",
            "category": "Pepper",
            "type": "Healthy",
            "icon": "🌶️"
        },
        {
            "id": 3,
            "name": "Potato - Early Blight",
            "category": "Potato",
            "type": "Disease",
            "icon": "🥔"
        },
        {
            "id": 4,
            "name": "Potato - Late Blight",
            "category": "Potato",
            "type": "Disease",
            "icon": "🥔"
        },
        {
            "id": 5,
            "name": "Potato - Healthy",
            "category": "Potato",
            "type": "Healthy",
            "icon": "🥔"
        },
        {
            "id": 6,
            "name": "Tomato - Bacterial Spot",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 7,
            "name": "Tomato - Early Blight",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 8,
            "name": "Tomato - Late Blight",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 9,
            "name": "Tomato - Leaf Mold",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 10,
            "name": "Tomato - Septoria Leaf Spot",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 11,
            "name": "Tomato - Spider Mites",
            "category": "Tomato",
            "type": "Pest",
            "icon": "🍅"
        },
        {
            "id": 12,
            "name": "Tomato - Target Spot",
            "category": "Tomato",
            "type": "Disease",
            "icon": "🍅"
        },
        {
            "id": 13,
            "name": "Tomato - Yellow Leaf Curl Virus",
            "category": "Tomato",
            "type": "Viral",
            "icon": "🍅"
        },
        {
            "id": 14,
            "name": "Tomato - Mosaic Virus",
            "category": "Tomato",
            "type": "Viral",
            "icon": "🍅"
        },
        {
            "id": 15,
            "name": "Tomato - Healthy",
            "category": "Tomato",
            "type": "Healthy",
            "icon": "🍅"
        }
    ]
    return {"diseases": diseases, "count": len(diseases)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
