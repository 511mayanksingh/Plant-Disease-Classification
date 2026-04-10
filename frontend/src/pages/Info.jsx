import Navbar from '../components/Navbar'
import '../styles/Info.css'

function Info() {
  const diseases = [
    {
      name: "Pepper Bell Bacterial Spot",
      description: "Bacterial disease causing dark spots on leaves and fruit",
      treatment: "Use copper-based bactericides, practice crop rotation"
    },
    {
      name: "Pepper Bell Healthy",
      description: "Plant shows no signs of disease",
      treatment: "Continue regular care and monitoring"
    },
    {
      name: "Potato Early Blight",
      description: "Fungal disease causing brown spots with concentric rings",
      treatment: "Apply fungicides, remove infected leaves, ensure proper spacing"
    },
    {
      name: "Potato Late Blight",
      description: "Destructive disease causing dark lesions on leaves",
      treatment: "Use resistant varieties, apply fungicides preventively"
    },
    {
      name: "Potato Healthy",
      description: "Plant shows no signs of disease",
      treatment: "Maintain good growing conditions"
    },
    {
      name: "Tomato Bacterial Spot",
      description: "Bacterial infection causing dark spots on leaves and fruit",
      treatment: "Use disease-free seeds, apply copper sprays"
    },
    {
      name: "Tomato Early Blight",
      description: "Fungal disease with characteristic target-like spots",
      treatment: "Remove affected leaves, use fungicides, ensure air circulation"
    },
    {
      name: "Tomato Late Blight",
      description: "Devastating fungal disease affecting leaves and fruit",
      treatment: "Apply fungicides, use resistant varieties"
    },
    {
      name: "Tomato Leaf Mold",
      description: "Fungal disease causing yellow patches on upper leaf surfaces",
      treatment: "Improve ventilation, reduce humidity, apply fungicides"
    },
    {
      name: "Tomato Septoria Leaf Spot",
      description: "Fungal disease with circular spots with dark borders",
      treatment: "Remove infected leaves, avoid overhead watering"
    },
    {
      name: "Tomato Spider Mites (Two-spotted)",
      description: "Tiny pests causing stippling and webbing on leaves",
      treatment: "Use miticides, increase humidity, introduce predatory mites"
    },
    {
      name: "Tomato Target Spot",
      description: "Fungal disease with brown spots and yellow halos",
      treatment: "Apply fungicides, practice crop rotation"
    },
    {
      name: "Tomato Yellow Leaf Curl Virus",
      description: "Viral disease causing leaf curling and yellowing",
      treatment: "Control whiteflies, remove infected plants, use resistant varieties"
    },
    {
      name: "Tomato Mosaic Virus",
      description: "Viral disease causing mottled, mosaic-like patterns",
      treatment: "Remove infected plants, disinfect tools, use resistant varieties"
    },
    {
      name: "Tomato Healthy",
      description: "Plant shows no signs of disease",
      treatment: "Continue regular care and preventive practices"
    }
  ]

  return (
    <div className="info">
      <Navbar />
      <div className="container">
        <h1>Disease Information</h1>
        <p className="info-intro">
          Learn about the plant diseases our system can detect and how to treat them.
        </p>

        <div className="diseases-grid">
          {diseases.map((disease, index) => (
            <div key={index} className="disease-card">
              <h3>{disease.name}</h3>
              <p className="description">{disease.description}</p>
              <div className="treatment">
                <strong>Treatment:</strong>
                <p>{disease.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info
