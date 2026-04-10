import { getDiseaseInfo } from '../data/diseaseInfo'
import '../styles/DiseaseDetails.css'

function DiseaseDetails({ diseaseName }) {
  const diseaseInfo = getDiseaseInfo(diseaseName)

  if (!diseaseInfo) {
    return (
      <div className="disease-details">
        <div className="no-info">
          <p>Detailed information for this disease is not available yet.</p>
        </div>
      </div>
    )
  }

  const getSeverityClass = (severity) => {
    if (!severity) return ''
    const level = severity.toLowerCase()
    if (level.includes('critical') || level.includes('severe')) return 'severity-critical'
    if (level.includes('moderate')) return 'severity-moderate'
    return 'severity-low'
  }

  return (
    <div className="disease-details">
      {/* Disease Header */}
      <div className="disease-header">
        <div className="disease-icon">{diseaseInfo.icon}</div>
        <div className="disease-title-section">
          <h3>{diseaseInfo.name}</h3>
          <p className="scientific-name">{diseaseInfo.scientificName}</p>
          <div className="disease-meta">
            <span className="category-badge">{diseaseInfo.category}</span>
            <span className={`severity-badge ${getSeverityClass(diseaseInfo.severity)}`}>
              {diseaseInfo.severity}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="disease-section description-section">
        <p className="disease-description">{diseaseInfo.description}</p>
      </div>

      {/* Symptoms */}
      {diseaseInfo.symptoms && diseaseInfo.symptoms.length > 0 && (
        <div className="disease-section">
          <h4>🔍 Symptoms to Watch For</h4>
          <ul className="symptom-list">
            {diseaseInfo.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Causes */}
      {diseaseInfo.causes && diseaseInfo.causes.length > 0 && (
        <div className="disease-section">
          <h4>⚠️ Causes & Risk Factors</h4>
          <ul className="cause-list">
            {diseaseInfo.causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Treatment */}
      {diseaseInfo.treatment && diseaseInfo.treatment.length > 0 && (
        <div className="disease-section treatment-section">
          <h4>💊 Treatment Recommendations</h4>
          <ul className="treatment-list">
            {diseaseInfo.treatment.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Prevention */}
      {diseaseInfo.prevention && diseaseInfo.prevention.length > 0 && (
        <div className="disease-section prevention-section">
          <h4>🛡️ Prevention Strategies</h4>
          <ul className="prevention-list">
            {diseaseInfo.prevention.map((prevention, index) => (
              <li key={index}>{prevention}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Organic Treatment */}
      {diseaseInfo.organicTreatment && diseaseInfo.organicTreatment.length > 0 && (
        <div className="disease-section organic-section">
          <h4>🌿 Organic Treatment Options</h4>
          <ul className="organic-list">
            {diseaseInfo.organicTreatment.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact */}
      {diseaseInfo.impact && (
        <div className="disease-section impact-section">
          <h4>📊 Expected Impact</h4>
          <div className="impact-grid">
            {diseaseInfo.impact.yield && (
              <div className="impact-card">
                <div className="impact-label">Yield Impact</div>
                <div className="impact-value">{diseaseInfo.impact.yield}</div>
              </div>
            )}
            {diseaseInfo.impact.quality && (
              <div className="impact-card">
                <div className="impact-label">Quality Impact</div>
                <div className="impact-value">{diseaseInfo.impact.quality}</div>
              </div>
            )}
            {diseaseInfo.impact.marketability && (
              <div className="impact-card">
                <div className="impact-label">Marketability</div>
                <div className="impact-value">{diseaseInfo.impact.marketability}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Important Note for Healthy Plants */}
      {diseaseInfo.severity === 'None' && (
        <div className="healthy-note">
          <div className="healthy-icon">🎉</div>
          <p>
            <strong>Keep up the excellent work!</strong> Your plant is healthy and thriving.
            Continue monitoring and maintaining your current care practices for optimal results.
          </p>
        </div>
      )}
    </div>
  )
}

export default DiseaseDetails
