---
title: Hands Detector
order: 4
summary: A basic hand sign detector using mediapipe and tensorflow.
cover: ./pointer.png
github: https://github.com/balbertle/handsDetector
sections:
  - images:
      - ./handlibrarypeacesign.jpg
      - ./openhand.jpg
    text: Mostly followed this tutorial https://www.youtube.com/watch?v=a99p_fAr6e4 to learn how to use mediapipe, opencv, and tensorflow to create a basic hand sign detector. I collected my own dataset of hand signs using mediapipe to extract the hand landmarks and save them as csv files. I trained a basic neural network using tensorflow to classify the hand signs based on the landmarks.
  - images:
      - ./handpeacesign.jpg
    text: The model is pretty basic, but it was a good learning experience to understand the end-to-end process of building a machine learning application.
---
