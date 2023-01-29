# Starface

Created by Yonas Bahre, Param Gupta, and Michael Hayworth for Swamphacks IX!

# Tech Stack
The backend is composed of two microservices: one to assign a face to a star (faceserv), and another to contain information/messages from stars and generate posters (starserv)

faceserv was built by Param Gupta using Python, Flask, and TensorFlow.
To find a star based on a person's facial features, we first use a pre-trained VGG-Face model to generate an embedding of a face. We then use principal component analysis to generate a one-dimensional value from the high dimension embedding while preserving as much information as possible. This value is then mapped to an id space of the stars to find the person's star.

starserv was built by Michael Hayworth with Java and Spring Boot.

The frontend was built by Yonas Bahre using TypeScript and React.

To use the app, launch the client while running the two microservices and connect to them if they are not hosted locally. Then, upload an image of your face that will navigate you to your star. On your star, you can add a unique message that anyone can see. Then, you can create a poster of your star, its facts, and your messages that can be shared to others. Additionally, you can visit other stars by using the rocket ship icon.
