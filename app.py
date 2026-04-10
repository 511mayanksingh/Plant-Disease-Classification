import os
os.environ['TF_USE_LEGACY_KERAS'] = '1'

from flask import Flask, render_template, request
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.vgg16 import preprocess_input

from io import BytesIO
import base64

app = Flask(__name__, template_folder='./templates')
model = tf.keras.models.load_model('./vggmodel.h5')
@app.route('/Home')
def Home():
    return render_template('Home.html')
@app.route('/Login')
def Login():
    return render_template('Login.html')
@app.route('/About')
def About():
    return render_template('About.html')
@app.route('/Info')
def Info():
    return render_template('Info.html')
@app.route('/Signup')
def Signup():
    return render_template('Signup.html')
@app.route('/', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        if 'myfile' not in request.files:
            return render_template('error.html', message='No file part')
            
        print('file request : ',request.files)
        
        
        myfile = request.files['myfile']
        
        if myfile.filename == '':
            return render_template('error.html', message='No selected file')
        
        print('filename : ', myfile.filename)
        try:
            image_stream = BytesIO(myfile.read())
            image = load_img(image_stream, target_size=(224, 224))
            image = np.reshape(image, [1,224,224,3])
            image = image/255

            preds = model.predict(image)
            print('prediction : ',preds)

            max_idx = np.argmax(preds)
            list1 = ['Pepper_bell__Bacterial_spot',
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
 'Tomato_healthy']
            #class_indices = {v:k for k,v in train_generator.class_indices.items()}
            #print("predicted image is of:",class_indices[max_idx])
            #classification = class_indices[max_idx]
            classification = list1[max_idx]

            image_stream.seek(0)
            image_base64 = base64.b64encode(image_stream.getvalue()).decode('utf-8')

            return render_template('Home.html', prediction=classification, image=image_base64)
        
        except Exception as e:
            print(e)
            return render_template('./error.html', message=str(e))

    return render_template('Home.html')

if __name__ == '__main__':
    app.run(port=3000, debug=True)
