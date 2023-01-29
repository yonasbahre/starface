import os
from EmbeddingUtility import embeddingGenerator
import numpy as np
from sklearn.decomposition import PCA
import pickle as pk
directory = 'FaceDataset'
 
def trainPCA():
    embeddings = []
    count = 0
    fileCount = len(os.listdir(directory))
    for idx, filename in enumerate(os.listdir(directory)):
        print(str(idx) + "/" + str(fileCount), end="\r")
        if count >= 5:
            break
        try:
            f = os.path.join(directory, filename)
            if os.path.isfile(f):
                embedding = embeddingGenerator.getEmbedding(f)
                embeddings.append(embedding)
                count += 1
        except Exception:
            pass
    print()
    embeddings = np.array(embeddings) 
    print(embeddings.shape)
    pca = PCA(n_components = 1)
    scores = pca.fit_transform(embeddings)
    pk.dump(pca, open("pca.pkl","wb"))