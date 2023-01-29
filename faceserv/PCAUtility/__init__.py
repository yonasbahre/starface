from PCAUtility import PCATrainer
import os
if not os.path.isfile('pca.pkl'):
    PCATrainer.trainPCA()