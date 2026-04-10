import tensorflow as tf
import os
from tensorflow.keras import models, layers
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing.image import ImageDataGenerator #for reading data from directory
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.models import Sequential
from keras import optimizers


IMAGE_SIZE = 224
BATCH_SIZE = 32


dataset= tf.keras.preprocessing.image_dataset_from_directory(
    "PlantVillage",
    shuffle = True,
    image_size = (IMAGE_SIZE,IMAGE_SIZE),
    batch_size = BATCH_SIZE

)


class_names = dataset.class_names
class_names


datagen = ImageDataGenerator(rescale=1/255, validation_split=0.2,
                             rotation_range=10, width_shift_range = 0.1, height_shift_range=0.1,
                             shear_range=0.1, zoom_range=0.1, horizontal_flip=True)

train_data = datagen.flow_from_directory('PlantVillage', target_size=(224,224), batch_size=32, 
                                              class_mode="categorical", subset='training')

validation_data = datagen.flow_from_directory('PlantVillage', target_size=(224,224), batch_size=32, 
                                              class_mode="categorical", subset='validation')


# VGG 16 model
from tensorflow.keras.applications import VGG16

model_vgg16 = VGG16(input_shape=(224,224,3), include_top=False, weights='imagenet')


model_vgg16.trainable = True
set_trainable = False
for layer in model_vgg16.layers:
    if layer.name == 'block5_conv1':
        set_trainable = True
    if set_trainable:
        layer.trainable = True
    else:
        layer.trainable = False
        
for layer in model_vgg16.layers:
    print(layer.name,layer.trainable)

#model_vgg16.summary()
    

model_vgg16.summary()


model = Sequential()
model.add(model_vgg16)
model.add(Flatten())
model.add(Dense(512, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(15, activation='softmax'))

model.summary()


model.compile(loss='categorical_crossentropy', optimizer=optimizers.RMSprop(learning_rate=1e-5), metrics=['accuracy'])
history=model.fit(train_generator, epochs=5, validation_data=validation_generator)


plt.plot(history.history['accuracy'],color='red',label='train')
plt.plot(history.history['val_accuracy'],color='blue',label='validation')
plt.legend
plt.show()


plt.plot(history.history['loss'],color='red',label='train')
plt.plot(history.history['val_loss'],color='blue',label='validation')
plt.legend
plt.show()


model.save('vggmodeltransferlearning.h5')


from tensorflow.keras.models import load_model

# Load your pre-trained VGG model
vggmodel = load_model('C:/Users/T Devaraj Nayak/PROJECT/vggmodeltransferlearning.h5')


import cv2
img = cv2.imread()
print("image to predict:")
matrix =np.array(img)

plt.imshow(matrix)
plt.show()

img = cv2.resize(img, (224,224))
img = np.reshape(img, [1,224,224,3])
img = img/255

preds = vggmodel.predict(img)

max_idx = np.argmax(preds)
class_indices = {v:k for k,v in train_generator.class_indices.items()}
class_indices[max_idx]
print("predicted image is of:",class_indices[max_idx])


