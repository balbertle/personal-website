---
title: Basketball Game Markov Chain
order: 1
summary: Program that uses markov chains to simulate a basketball game alongside other basic statistical analysis.
cover: ./Figure_1.png
tags: [Quant]
stack: Python · Markov chains · Monte Carlo
description: This project explores the use of Markov Chains to simulate and analyze basketball game outcomes. Using historical data, we built a model that predicts scores and team performance. The project showcases data visualization techniques and statistical analysis to provide insights into game dynamics.
github: https://github.com/balbertle/cbbPredictorUpdated
sections:
  - images:
      - ./Figure_1.png
      - ./Figure_2.png
    text: "Stochastic College Basketball Game Simulator: This simulator uses stochastic processes through Markov Chain matrices to simulate a college basketball game and backtests the results using Monte Carlo Simulations. It predicts outcomes by simulating thousands of games and combining multiple statistical models."
  - images:
      - ./matrix.jpg
      - ./stats.jpg
    text: "Advanced Blended Prediction Model: Each game's outcome is determined by a weighted average of three distinct statistical models: Possession-by-Possession Markov Chain simulation, Pythagorean expectation, and BARTHAG Power Rating. This combination provides a robust and realistic prediction for every matchup."
---

Possession-by-Possession Simulation (Markov Chain): The most detailed, bottom-up model simulates every possession of a game, including turnovers, 2-point vs. 3-point shots, shooting fouls, and offensive rebounds. A transition matrix is created for each team to calculate state probabilities, resulting in accurate win probabilities for thousands of simulated games.

Pythagorean Expectation: A high-level, top-down model that predicts win probability based on a team's adjusted offensive and defensive efficiency ratings. The optimal exponent for each season is derived using backtesting, providing a mathematically informed component for the final prediction.

BARTHAG Power Rating: An independent measure of team strength from barttorvik.com that estimates a team's probability of beating an average Top-25 team. The Log5 formula is applied to combine this with other models for a more balanced outcome.

Data Sources: The simulator is powered by two primary data sources: a CSV file (cbb25.csv) scraped from barttorvik.com with advanced team statistics, and a CSV from Basketball Reference with additional custom stats. This ensures a comprehensive and accurate dataset for all simulations.

Bracket Visualization: After completing all simulations, the project generates a clean hierarchical bracket visualization, showing the most likely winners for each matchup. This allows for easy interpretation of the Monte Carlo results.

Accuracy & Realism: The simulator includes two versions: one weighted primarily by BARTHAG ratings achieving ~88% accuracy, and the main log5-based simulator which is less accurate but provides a more realistic, possession-level simulation.

Mathematical Models Explained: The final win probability for any game is a weighted combination of the three models: P(final) = P(log5)*w + P(pythag)*w + P(barthag)*w(barthag). Users can adjust weights to emphasize different approaches or achieve optimal predictions for their goals.

Project Structure & Setup: The project includes scripts such as marchmadness2025log5.py (main simulator), log5sim.py (core engine), prepare_stats.py (data preprocessing), and a helpers folder for utility functions. To run, you need Python 3.6+ and required libraries installed via pip.
