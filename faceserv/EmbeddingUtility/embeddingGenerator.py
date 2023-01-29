from deepface import DeepFace
import numpy as np
from EmbeddingUtility import multipleFacesException
def getEmbedding(imageNp):
    embedding_objs = DeepFace.represent(img_path = imageNp, 
            detector_backend = 'ssd'
    )
    if len(embedding_objs) > 1:
        raise multipleFacesException.MulitpleFacesException
    embedding = np.array(embedding_objs[0]["embedding"])
    return embedding