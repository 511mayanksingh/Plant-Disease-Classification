import { useState, useRef } from 'react'
import { predictDisease } from '../services/api'
import '../styles/ImageUpload.css'

function ImageUpload({ setPrediction, setLoading, loading }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file')
        return
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size should be less than 10MB')
        return
      }

      setSelectedImage(file)
      setPreviewUrl(URL.createObjectURL(file))
      setError(null)
      setPrediction(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      setPreviewUrl(URL.createObjectURL(file))
      setError(null)
      setPrediction(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleUpload = async () => {
    if (!selectedImage) {
      setError('Please select an image first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await predictDisease(selectedImage)
      setPrediction(result)
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
    setError(null)
    setPrediction(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="image-upload">
      <div
        className="upload-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        {previewUrl ? (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="preview-image" />
          </div>
        ) : (
          <div className="upload-placeholder">
            <div className="upload-icon">📷</div>
            <p>Click to select or drag and drop an image</p>
            <p className="upload-hint">Supported formats: JPG, PNG, JPEG (Max 10MB)</p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: 'none' }}
        />
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="upload-actions">
        {selectedImage && (
          <>
            <button
              onClick={handleUpload}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </button>
            <button
              onClick={handleReset}
              disabled={loading}
              className="btn btn-secondary"
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
