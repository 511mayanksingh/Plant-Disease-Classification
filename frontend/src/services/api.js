const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function predictDisease(imageFile) {
  try {
    const formData = new FormData()
    formData.append('file', imageFile)

    const response = await fetch(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Failed to analyze image')
    }

    const data = await response.json()
    // Transform the response to match our component expectations
    return {
      disease: data.prediction.replace(/_/g, ' ').replace(/  /g, ' - '),
      confidence: data.confidence || 0.95  // Default confidence if not provided
    }
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function getDiseases() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/diseases`)

    if (!response.ok) {
      throw new Error('Failed to fetch diseases')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function healthCheck() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`)

    if (!response.ok) {
      throw new Error('Health check failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
