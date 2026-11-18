---
title: Film Profitability & Market Impact Predictor
order: 7
cover: ./tron.jpg
github: https://github.com/balbertle/movieQuant
sections:
  - images:
      - ./tron.jpg
      - ./tmdb.jpg
    text: Using sklearn, I built a regression model to predict the profitability of a film based on various features such as budget, genre, director, cast, and release date. The model was trained on a dataset of films achieved by calling the TMDB API to fetch movie details and financial information.
  - images:
      - ./outcome.jpg
      - ./training.jpg
    text: I implemented the Google Trends API to fetch the popularity of a film's title around its release date, which was used as a feature in the regression model. This helped to capture the market impact and public interest in the film and predicting if it would dissapoint or exceed expectations to accurately forecast impact on the producing company's stock ticker.
---

Utilized yfinance to develop predicted impact ratio.

This was my first time using sklearn and building a regression model, so it was a great learning experience to understand the basics of machine learning and data analysis.
