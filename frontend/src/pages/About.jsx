import Navbar from '../components/Navbar'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="container">
        <h1>About FasalArogya</h1>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              FasalArogya is an AI-powered plant disease detection system designed to help
              farmers and gardeners identify plant diseases quickly and accurately. Our goal
              is to make plant health diagnosis accessible to everyone.
            </p>
          </section>

          <section className="about-section">
            <h2>How It Works</h2>
            <p>
              Our system uses advanced deep learning technology based on VGG16 architecture,
              trained on thousands of plant leaf images. Simply upload a clear photo of a
              plant leaf, and our AI model will analyze it to detect potential diseases.
            </p>
          </section>

          <section className="about-section">
            <h2>Technology</h2>
            <ul>
              <li><strong>Backend:</strong> FastAPI with Python</li>
              <li><strong>Frontend:</strong> React with Vite</li>
              <li><strong>AI Model:</strong> VGG16 Transfer Learning</li>
              <li><strong>Detectable Diseases:</strong> 15 different plant conditions</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Supported Plants</h2>
            <p>Currently, our system can detect diseases in:</p>
            <ul>
              <li>Bell Pepper (Capsicum)</li>
              <li>Potato</li>
              <li>Tomato</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
