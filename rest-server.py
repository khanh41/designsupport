#!flask/bin/python
################################################################################################################################
#------------------------------------------------------------------------------------------------------------------------------                                                                                                                             
# This file implements the REST layer. It uses flask micro framework for server implementation. Calls from front end reaches 
# here as json and being branched out to each projects. Basic level of validation is also being done in this file. #                                                                                                                                  	       
#-------------------------------------------------------------------------------------------------------------------------------                                                                                                                              
################################################################################################################################
from flask import Flask, jsonify, abort, request, make_response, url_for,redirect, render_template
from flask_httpauth import HTTPBasicAuth
from werkzeug.utils import secure_filename
import os
import sys
sys.path.append('../')
import shutil 
import numpy as np
from lib.search import recommend
import tarfile
from datetime import datetime
from scipy import ndimage
from scipy.misc import imsave 
from firebase.firebase import FirebaseAuthentication,FirebaseApplication
from PIL import Image
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
from tensorflow.python.platform import gfile
app = Flask(__name__, static_url_path = "")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
auth = HTTPBasicAuth()
extracted_features=np.zeros((10000,2048),dtype=np.float32)
with open('../saved_features_recom.txt') as f:
    		for i,line in enumerate(f):
        		extracted_features[i,:]=line.split()
print("loaded extracted_features") 

@app.route('/login')
def login():
        return render_template("login.html")

@app.route('/getstarted')
def getstarted():
        return render_template("draw.html")   

@app.route('/imgUpload', methods=['GET', 'POST'])
def upload_img():
    print("image upload")
    result = 'static/result'
    if not gfile.Exists(result):
          os.mkdir(result)
    shutil.rmtree(result)
 
    if request.method == 'POST' or request.method == 'GET':
        print(request.method)
        file = request.form['text']
        print(file)
        print("?/.????????????????")
        if file and allowed_file(file):
            print(file)
            filename = file
            file = Image.open(file)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            inputloc = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            #outputloc = '/home/vinayak/todo-api/out'
            recommend(inputloc, extracted_features)
            os.remove(inputloc)
            #label = label1.replace("\n", "")
            image_path = "/result"
            image_list =[os.path.join(image_path,file) for file in os.listdir(result)
                              if not file.startswith('.')]
            images = {
			'image0':image_list[0],
            'image1':image_list[1],	
			'image2':image_list[2],	
			'image3':image_list[3],	
			'image4':image_list[4],	
			'image5':image_list[5],	
			'image6':image_list[6],	
			'image7':image_list[7],	
			'image8':image_list[8]
		      }
            print(image_list[0])
            return jsonify(images)
#def post_firebase(images):
#    app = FirebaseApplication('https://smartmachine-ed87d.firebaseio.com/')
#    app.put('/','images',images)""

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
#==============================================================================================================================
#                                                                                                                              
#                                           Main function                                                        	            #						     									       
#  				                                                                                                
#==============================================================================================================================
@app.route("/")
def main():
    
    return render_template("index.html")   
if __name__ == '__main__':
    app.run(debug = True)