from deepface import DeepFace
import numpy as np
def getEmbedding(imageNp):
    embedding_objs = DeepFace.represent(img_path = imageNp, 
            # detector_backend = 'retinaface'
    )
    embedding = np.array(embedding_objs[0]["embedding"])
    print(embedding)
    return embedding