import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from io import BytesIO
import os

class ModelPredictor:
    """ML Model handler for plant disease prediction"""

    def __init__(self):
        self.model = None
        self.class_names = [
            'Pepper_bell__Bacterial_spot',
            'Pepper_bell__healthy',
            'Potato___Early_blight',
            'Potato___Late_blight',
            'Potato___healthy',
            'Tomato_Bacterial_spot',
            'Tomato_Early_blight',
            'Tomato_Late_blight',
            'Tomato_Leaf_Mold',
            'Tomato_Septoria_leaf_spot',
            'Tomato_Spider_mites_Two_spotted_spider_mite',
            'Tomato__Target_Spot',
            'Tomato_Tomato_YellowLeaf_Curl_Virus',
            'Tomato__Tomato_mosaic_virus',
            'Tomato_healthy'
        ]

    def load_model(self):
        """Load the VGG16 model"""
        try:
            # Get the model path (assuming it's in the root directory)
            model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'vggmodel.h5')
            print(f"Loading model from: {model_path}")

            self.model = tf.keras.models.load_model(model_path)
            print("Model loaded successfully!")
            print(f"Model input shape: {self.model.input_shape}")
            print(f"Model output shape: {self.model.output_shape}")

        except Exception as e:
            print(f"Error loading model: {e}")
            raise

    def predict(self, image_bytes: bytes) -> tuple[str, float]:
        """
        Predict disease from image bytes

        Args:
            image_bytes: Raw image bytes

        Returns:
            Tuple of (predicted class name, confidence score)
        """
        if self.model is None:
            raise RuntimeError("Model not loaded. Call load_model() first.")

        try:
            # Load image from bytes
            image_stream = BytesIO(image_bytes)
            image = load_img(image_stream, target_size=(224, 224))

            # Preprocess image
            image_array = img_to_array(image)
            image_array = np.reshape(image_array, [1, 224, 224, 3])
            image_array = image_array / 255.0

            # Make prediction
            predictions = self.model.predict(image_array, verbose=0)
            predicted_class_idx = np.argmax(predictions[0])
            confidence = float(predictions[0][predicted_class_idx])

            # Get class name
            predicted_class = self.class_names[predicted_class_idx]

            return predicted_class, confidence

        except Exception as e:
            raise RuntimeError(f"Prediction failed: {str(e)}")
