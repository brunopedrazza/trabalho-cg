from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import io
from PIL import Image
import base64

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['GET'])
def index():
    base64_string = request.args.get('img').replace(' ', '+')

    image = Image.open('../pictures/cidade.jpg')
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    img_str1 = base64.b64encode(buffered.getvalue())

    image = Image.open('../pictures/ondas.jpg')
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    img_str2 = base64.b64encode(buffered.getvalue())

    return  '{}*{}'.format(img_str1, img_str2) 

if __name__ == "__main__":
    app.run(debug=True)