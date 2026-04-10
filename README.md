# FasalArogya - AI-Powered Plant Disease Detection

<div align="center">

![Plant Disease Detection](https://img.shields.io/badge/AI-Plant%20Disease%20Detection-green)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115.0-009688)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.21.0-ff6f00)
![License](https://img.shields.io/badge/license-MIT-blue)

**AI-powered web application for detecting plant diseases using deep learning**

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [Tech Stack](#tech-stack)

</div>

---

## 🌟 Overview

FasalArogya is a modern, production-ready web application that leverages deep learning to detect plant diseases from leaf images. Built with a FastAPI backend and React frontend, it provides instant disease diagnosis with detailed treatment recommendations.

## ✨ Features

### 🔬 Advanced Disease Detection
- **15 Disease Classifications** across 3 plant types (Tomato, Potato, Pepper)
- **VGG16 Deep Learning Model** with transfer learning
- **High Accuracy Predictions** with confidence scores
- **Real-time Analysis** - Results in 1-2 seconds

### 📚 Comprehensive Disease Information
- Detailed symptoms and identification guide
- Treatment recommendations (conventional & organic)
- Prevention strategies
- Impact assessment (yield, quality, marketability)
- Scientific names and severity levels

### 🎨 Modern User Interface
- Professional, responsive design
- Glassmorphism effects and smooth animations
- Drag-and-drop image upload
- Mobile-friendly interface
- Real-time progress indicators

### 🌐 RESTful API
- Interactive API documentation (Swagger/OpenAPI)
- CORS-enabled for cross-origin requests
- Health check endpoints
- Scalable architecture

## 🎯 Detectable Diseases

### Bell Pepper (Capsicum)
- ✅ Bacterial Spot
- ✅ Healthy

### Potato
- ✅ Early Blight
- ✅ Late Blight
- ✅ Healthy

### Tomato
- ✅ Bacterial Spot
- ✅ Early Blight
- ✅ Late Blight
- ✅ Leaf Mold
- ✅ Septoria Leaf Spot
- ✅ Spider Mites (Two-spotted)
- ✅ Target Spot
- ✅ Yellow Leaf Curl Virus (TYLCV)
- ✅ Mosaic Virus (ToMV)
- ✅ Healthy

## 🖼️ Demo

### Disease Detection
Upload a plant leaf image and get instant diagnosis with confidence scores and detailed information.

### Detailed Disease Information
Get comprehensive treatment plans, prevention strategies, and organic alternatives for detected diseases.

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/FasalArogya.git
cd FasalArogya
```

2. **Backend Setup**
```bash
# Install Python dependencies
pip install -r backend/requirements.txt
```

3. **Frontend Setup**
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```
4. **Download Trained Model**
# Download from the following google drive link
https://drive.google.com/file/d/1kRqvg5wy9T9fihZT3rBP8n4NZc5Op1VR/view?usp=sharing

### Running the Application

1. **Start the Backend Server**
```bash
cd backend
TF_USE_LEGACY_KERAS=1 python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

2. **Start the Frontend Server** (in a new terminal)
```bash
cd frontend
npm run dev
```

3. **Access the Application**
- Frontend: http://localhost:5173
- API Documentation: http://localhost:8000/docs
- API Health Check: http://localhost:8000/health

## 📁 Project Structure

```
FasalArogya/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI application
│   │   ├── ml_model.py          # ML model handler
│   │   └── models.py            # Pydantic models
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── data/               # Disease database
│   │   ├── pages/              # Page components
│   │   ├── services/           # API services
│   │   └── styles/             # CSS stylesheets
│   ├── package.json
│   └── vite.config.js
├── vggmodel.h5                  # Pre-trained VGG16 model
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework
- **TensorFlow** - Deep learning framework
- **VGG16** - Pre-trained CNN model
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Modern CSS** - Styling with animations

### Machine Learning
- **Model**: VGG16 with transfer learning
- **Input Size**: 224x224 RGB images
- **Framework**: TensorFlow 2.21.0
- **Accuracy**: High accuracy across 15 classes

## 🔧 API Endpoints

### Health Check
```http
GET /health
```

### Predict Disease
```http
POST /api/predict
Content-Type: multipart/form-data

{
  "file": <image_file>
}
```

### Get Disease List
```http
GET /api/diseases
```

## 📊 Model Information

- **Architecture**: VGG16 (pre-trained on ImageNet)
- **Fine-tuned on**: Plant disease dataset
- **Input**: 224x224 RGB images
- **Output**: 15 disease classes with confidence scores
- **Model Size**: 213 MB
- **Inference Time**: ~1-2 seconds (CPU)

## 🎨 Features Breakdown

### Image Upload
- Drag-and-drop support
- Image preview
- File validation
- Size limits (10MB max)

### Disease Analysis
- Real-time prediction
- Confidence scores
- Animated loading states
- Error handling

### Disease Database
- Comprehensive symptom guides
- Treatment protocols
- Prevention strategies
- Organic alternatives
- Impact assessments

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- VGG16 model architecture by Visual Geometry Group, Oxford
- Plant disease dataset for model training
- Open-source community for libraries and tools

## 📧 Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ for sustainable agriculture**

⭐ Star this repository if you find it helpful!

</div>
