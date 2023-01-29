import numpy as np
import cv2
from ImageUtility import nonImageFileException
def loadIMG(imgFile):
    imgData = imgFile.read()
    nparr = np.fromstring(imgData, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    if img is None:
        raise nonImageFileException.NonImageFileException()
    return img