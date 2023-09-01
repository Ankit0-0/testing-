from flask import Flask, request
import requests
from att1 import verify

# from att1 import 

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'testFile' not in request.files:
        return 'No file part'

    testFile = request.files['testFile']
    orignalFile = request.files['orignalFile']

    if testFile.filename == '':
        return 'No selected file'

    
    if testFile:
        # Save the file to a temporary location
        testFile.save(testFile.filename)


    if verify(orignalFile, testFile) == 1:
        print('true')
        return 'true'
    else:
        print('false')
        return 'false'
    

        return 'File uploaded to Python server successfully'


if __name__ == '__main__':
    app.run(debug=True)

