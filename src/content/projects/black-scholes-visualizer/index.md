---
title: Black-Scholes Option Pricing Model Visualizer
order: 2
cover: ./call.jpg
summary: "Visualizes Black-Scholes option prices and the Greeks, backed by a Spring Boot REST API."
tags: [Quant, Web]
stack: Java · Spring Boot · Plotly
github: https://github.com/balbertle/black-scholes-api
sections:
  - images:
      - ./call.jpg
      - ./architecture.jpg
    text: A web application that visualizes the Black-Scholes option pricing model using a custom Spring Boot REST API. The app allows users to input parameters stock price, volatility, and risk free rate to see how they affect the option price on a graph with axis based on the desired metric. I included several other metrics (the Greeks) such as Delta, Gamma, Vega, and Theta to provide a comprehensive understanding of option pricing dynamics for beginners learning finance principals.
  - images:
      - ./calculations.jpg
      - ./delta.jpg
    text: The backend was built using Spring Boot to create a RESTful API that calculates option prices based on the Black-Scholes formula. The frontend was developed with HTML and JS to provide an interactive and user-friendly interface. The site features dynamic graphing capabilities using plot.ly.js.
  - images:
      - ./options.png
    text: This project was a great learning experience to understand the Black-Scholes model and how to build a full-stack web application using Java and Spring Boot.
---

I used Spring Boot to learn how to build a RESTful API and handle HTTP requests and responses which are essential skills for modern backend development.
