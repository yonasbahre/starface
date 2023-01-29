from EmbeddingUtility import embeddingGenerator
from PCAUtility import PCAScore
def findID(img):
    embedding = embeddingGenerator.getEmbedding(img)
    score = PCAScore.generateScore(embedding)
    return 0