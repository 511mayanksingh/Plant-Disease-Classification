import DiseaseDetails from './DiseaseDetails'
import '../styles/ResultDisplay.css'

function ResultDisplay({ prediction, loading }) {
  if (loading) {
    return (
      <div className="result-display">
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing your plant image...</p>
        </div>
      </div>
    )
  }

  if (!prediction) {
    return null
  }

  const getHealthStatus = (disease) => {
    const healthyKeywords = ['healthy', 'normal']
    return healthyKeywords.some(keyword =>
      disease.toLowerCase().includes(keyword)
    ) ? 'healthy' : 'diseased'
  }

  const status = getHealthStatus(prediction.disease)
  const confidence = (prediction.confidence * 100).toFixed(2)

  return (
    <div className="result-display">
      <div className={`result-card ${status}`}>
        <div className="result-header">
          <h2>Analysis Result</h2>
          <span className={`status-badge ${status}`}>
            {status === 'healthy' ? '✓ Healthy' : '⚠ Disease Detected'}
          </span>
        </div>

        <div className="result-content">
          <div className="result-item">
            <label>Detected Condition:</label>
            <p className="disease-name">{prediction.disease}</p>
          </div>

          <div className="result-item">
            <label>Confidence Level:</label>
            <div className="confidence-bar">
              <div
                className="confidence-fill"
                style={{ width: `${confidence}%` }}
              ></div>
              <span className="confidence-text">{confidence}%</span>
            </div>
          </div>

        </div>
      </div>

      {/* Detailed Disease Information */}
      <DiseaseDetails diseaseName={prediction.disease} />
    </div>
  )
}

export default ResultDisplay
