import { useState } from 'react'
import Navbar from '../components/Navbar'
import ImageUpload from '../components/ImageUpload'
import ResultDisplay from '../components/ResultDisplay'
import '../styles/Home.css'

function Home() {
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>FasalArogya - Plant Disease Detection</h1>
          <p>Upload a plant leaf image to detect diseases using AI</p>
        </header>

        <ImageUpload
          setPrediction={setPrediction}
          setLoading={setLoading}
          loading={loading}
        />

        <ResultDisplay prediction={prediction} loading={loading} />
      </div>
    </div>
  )
}

export default Home
