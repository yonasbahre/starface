# Starface

Created by Yonas Bahre, Param Gupta, and Michael Hayworth for a SwampHacks2023 submission

# Tech Stack
The frontend was created in React by Yonas Bahre

The backend is composed of two microservices: one to assign a face to a star (faceserv), and another to contain information/messages from stars and generate posters (starserv)

faceserv was created in Python by Param Gupta using flask.
starserv was created in Java by Michael Hayworth using Spring Boot.

To use the app, launch the client while running the two microservices and connect to them if they are not hosted locally. Then, upload an image of your face that will navigate you to your star. On your star, you can add a unique message that anyone can see. Then, you can create a poster of your star, its facts, and your messages that can be shared to others. Additionally, you can visit other stars by using the rocket ship icon.

# Building and Running

starserv: clone the repository and navigate into the starserv directory. Then run
`./mvnw spring-boot:run`. This will run the star server on port 8080 of your local machine.

faceserv:

client:
