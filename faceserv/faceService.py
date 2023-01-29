from flask import Flask, make_response, jsonify, request
from ImageUtility import imageLoader, nonImageFileException
from EmbeddingUtility import multipleFacesException
from IdUtility import IdFinder
import numpy as np
app = Flask(__name__)




@app.route('/faceService/getID', methods=["POST"])
def getID():
    if 'file' not in request.files:
        return make_response("File not in request", 400)
    try:
        img = imageLoader.loadIMG(request.files['file'])
    except nonImageFileException.NonImageFileException:
        return make_response("File not an image", 400)
    except Exception:
        return make_response("Could not read file", 400)
    print(img.shape)
    try:
        id = IdFinder.findID(img)
    except multipleFacesException.MulitpleFacesException:
        return make_response("Multiple faces in the image", 400)
    except Exception:
        return make_response("Could not find a face", 400)
    return jsonify({"star_id": id})
    


if __name__ == '__main__':
    app.run('0.0.0.0')