import pickle as pk
import numpy as np
pca = pk.load(open("pca.pkl",'rb'))

def generateScore(embedding):
    score = pca.transform(np.array([embedding]))[0][0]
    print(score)
    return score