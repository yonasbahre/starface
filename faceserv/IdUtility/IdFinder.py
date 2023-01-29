from EmbeddingUtility import embeddingGenerator
from PCAUtility import PCAScore
def findID(img):
    embedding = embeddingGenerator.getEmbedding(img)
    score = PCAScore.generateScore(embedding)
    numStars = 10
    # minVal = -0.385
    # maxVal = 0.502
    minVal = -0.25
    maxVal = 0.25
    id = round((((score - minVal) * (numStars-1 - 0)) / (maxVal - minVal)) + 0)
    id = max(0, min(numStars-1, id))
    return id