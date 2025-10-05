const express = require("express");
const router = express.Router();

let projects = [
  {
    id: 1,
    title: "Basketball Game Markov Chain",
    shortDescription:
      "Program that uses markov chains to simulate a basketball game alongside other basic statistical analysis.",
    detailedDescription:
      "This project explores the use of Markov Chains to simulate and analyze basketball game outcomes. Using historical data, we built a model that predicts scores and team performance. The project showcases data visualization techniques and statistical analysis to provide insights into game dynamics.",
    captions: [
      "Stochastic College Basketball Game Simulator: This simulator uses stochastic processes through Markov Chain matrices to simulate a college basketball game and backtests the results using Monte Carlo Simulations. It predicts outcomes by simulating thousands of games and combining multiple statistical models.",

      "Advanced Blended Prediction Model: Each game's outcome is determined by a weighted average of three distinct statistical models: Possession-by-Possession Markov Chain simulation, Pythagorean expectation, and BARTHAG Power Rating. This combination provides a robust and realistic prediction for every matchup.",

      "Possession-by-Possession Simulation (Markov Chain): The most detailed, bottom-up model simulates every possession of a game, including turnovers, 2-point vs. 3-point shots, shooting fouls, and offensive rebounds. A transition matrix is created for each team to calculate state probabilities, resulting in accurate win probabilities for thousands of simulated games.",

      "Pythagorean Expectation: A high-level, top-down model that predicts win probability based on a team's adjusted offensive and defensive efficiency ratings. The optimal exponent for each season is derived using backtesting, providing a mathematically informed component for the final prediction.",

      "BARTHAG Power Rating: An independent measure of team strength from barttorvik.com that estimates a team's probability of beating an average Top-25 team. The Log5 formula is applied to combine this with other models for a more balanced outcome.",

      "Data Sources: The simulator is powered by two primary data sources: a CSV file (cbb25.csv) scraped from barttorvik.com with advanced team statistics, and a CSV from Basketball Reference with additional custom stats. This ensures a comprehensive and accurate dataset for all simulations.",

      "Bracket Visualization: After completing all simulations, the project generates a clean hierarchical bracket visualization, showing the most likely winners for each matchup. This allows for easy interpretation of the Monte Carlo results.",

      "Accuracy & Realism: The simulator includes two versions: one weighted primarily by BARTHAG ratings achieving ~88% accuracy, and the main log5-based simulator which is less accurate but provides a more realistic, possession-level simulation.",

      "Mathematical Models Explained: The final win probability for any game is a weighted combination of the three models: P(final) = P(log5)*w + P(pythag)*w + P(barthag)*w(barthag). Users can adjust weights to emphasize different approaches or achieve optimal predictions for their goals.",

      "Project Structure & Setup: The project includes scripts such as marchmadness2025log5.py (main simulator), log5sim.py (core engine), prepare_stats.py (data preprocessing), and a helpers folder for utility functions. To run, you need Python 3.6+ and required libraries installed via pip.",
      "github: https://github.com/balbertle/cbbPredictorUpdated",
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/mm/Figure_1.png",
      "https://personal-website-55m0.onrender.com/images/mm/Figure_2.png",
      "https://personal-website-55m0.onrender.com/images/mm/matrix.jpg",
      "https://personal-website-55m0.onrender.com/images/mm/stats.jpg",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/mm/Figure_1.png",
  },
  {
    id: 2,
    title: "Black-Scholes Option Pricing Model Visualizer",
    shortDescription: "",
    detailedDescription: "",
    captions: [
      `A web application that visualizes the Black-Scholes option pricing model using a custom Spring Boot REST API. The app allows users to input parameters stock price, volatility, and risk free rate to see how they affect the option price on a graph with axis based on the desired metric. I included several other metrics (the Greeks) such as Delta, Gamma, Vega, and Theta to provide a comprehensive understanding of option pricing dynamics for beginners learning finance principals.`,
      `The backend was built using Spring Boot to create a RESTful API that calculates option prices based on the Black-Scholes formula. The frontend was developed with HTML and JS to provide an interactive and user-friendly interface. The site features dynamic graphing capabilities using plot.ly.js.`,
      `This project was a great learning experience to understand the Black-Scholes model and how to build a full-stack web application using Java and Spring Boot.`,
      `I used Spring Boot to learn how to build a RESTful API and handle HTTP requests and responses which are essential skills for modern backend development.`,
      "github: https://github.com/balbertle/black-scholes-api",
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/bs/call.jpg",
      "https://personal-website-55m0.onrender.com/images/bs/architecture.jpg",
      "https://personal-website-55m0.onrender.com/images/bs/calculations.jpg",
      "https://personal-website-55m0.onrender.com/images/bs/delta.jpg",
      "https://personal-website-55m0.onrender.com/images/bs/options.png",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/bs/call.jpg",
  },
  {
    id: 3,
    title: "Snack Match",
    shortDescription:
      "A web application that gives users food recommendations using APIs and generative AI.",
    detailedDescription: "",
    captions: [
      `As the lead, I orchestrated the end-to-end creation of a full-stack restaurant discovery platform, transforming a high-level concept into a fully functional product. My leadership was crucial in defining the project's strategic vision, which centered on delivering personalized, late night, local dining suggestions to solve the common where should we eat? dilemma. I established the technical roadmap, guided the team through key architectural decisions, and fostered a collaborative environment that ensured we launched a cohesive and user-centric application on schedule. My role was to steer the project from initial design to final deployment, ensuring every feature directly contributed to our core mission of making dining discovery both simple and personal.`,
      "On the technical front, I personally engineered the platform's most innovative feature: a what's in your fridge? tool designed to boost user engagement. I single-handedly integrated the Google Gemini API, developing the backend logic to process user-provided ingredients and dynamically generate unique recipe ideas. This wasnt just about connecting to an API; it was about creating a novel user experience that differentiated our platform in a crowded market. By providing tangible value beyond restaurant listings, this feature successfully encouraged repeat visits and transformed the application from a simple utility into an interactive culinary assistant.",
      "I developed an interactive map feature using Leaflet.js to visualize real-time routing from a user's geolocation to restaurant locations, significantly improving the user navigation experience. This involved integrating geolocation APIs and ensuring seamless interaction between the map and our backend services.",
      "I integrated a third-party location API to dynamically fetch and display comprehensive restaurant information, ensuring the platform's data was always current.",
      "The app contains full CRUD (Create, Read, Update, Delete) functionality backed by a PostgreSQL database, allowing users to add restaurants, post reviews, and manage personalized lists of favorite spots.",
      "I engineered a secure, end-to-end user authentication and authorization system from scratch to safeguard sensitive user data and implement role-based access control (RBAC).",
      "The frontend was built using React, ensuring a responsive and intuitive user interface that enhances user engagement and satisfaction.",
      "demo: https://www.youtube.com/watch?v=gNfp0dyzUlc",
      "github: private",
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/sm/hp.png",
      "https://personal-website-55m0.onrender.com/images/sm/login.png",
      "https://personal-website-55m0.onrender.com/images/sm/generating.png",
      "https://personal-website-55m0.onrender.com/images/sm/recipe.png",
      "https://personal-website-55m0.onrender.com/images/sm/review.png",
      "https://personal-website-55m0.onrender.com/images/sm/map.png",
      "https://personal-website-55m0.onrender.com/images/sm/image.png",
      "https://personal-website-55m0.onrender.com/images/sm/profile.png",
    ],
    mainImageUrl: "https://personal-website-55m0.onrender.com/images/sm/hp.png",
  },
  {
    id: 4,
    title: "Hands Detector",
    shortDescription:
      "A basic hand sign detector using mediapipe and tensorflow.",
    detailedDescription: "",
    captions: [
      "Mostly followed this tutorial https://www.youtube.com/watch?v=a99p_fAr6e4 to learn how to use mediapipe, opencv, and tensorflow to create a basic hand sign detector. I collected my own dataset of hand signs using mediapipe to extract the hand landmarks and save them as csv files. I trained a basic neural network using tensorflow to classify the hand signs based on the landmarks.",
      "The model is pretty basic, but it was a good learning experience to understand the end-to-end process of building a machine learning application.",
      "github: https://github.com/balbertle/handsDetector",
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/hands/handlibrarypeacesign.jpg",
      "https://personal-website-55m0.onrender.com/images/hands/openhand.jpg",
      "https://personal-website-55m0.onrender.com/images/hands/handpeacesign.jpg",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/hands/pointer.png",
  },
  {
    id: 5,
    title: "GT Movie Store",
    shortDescription: `A web application that allows users to browse a custom list of movies and "checkout" movies to a virtual cart.`,
    detailedDescription: "",
    captions: [
      `This project was built as a part of CS2340: Objects and Design at Georgia Tech. The goal was to create a full-stack web application that allows users to browse a custom list of movies and "checkout" movies to a virtual cart. The app was built using the MVC (Model-View-Controller) design pattern to ensure a clean separation of concerns and maintainable codebase.`,
      `The backend was developed with Django to enable easy data management and robust server-side logic. The frontend was built using HTML, CSS, and JavaScript to create a responsive and user-friendly interface. The app features full CRUD (Create, Read, Update, Delete) functionality backed by a PostgreSQL database, allowing users to add movies, post reviews, and manage their virtual cart.`,
      `The carousel on the homepage was implemented with a custom JavaScript solution to showcase popular movies dynamically. It calls the TMDB Api to fetch current popular movies.`,
      `demo: https://www.youtube.com/watch?v=Qqe6PR7Sd0M`,
      `github: private`,
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/gtms/homepage.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/signup.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/loggedin.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/reviewq.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/movie.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/backend.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/cart.jpg",
      "https://personal-website-55m0.onrender.com/images/gtms/editreview.jpg",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/gtms/homepage.jpg",
  },
  {
    id: 6,
    title: "N-gram Text Generator",
    shortDescription: `A text generator using an n-gram probabilities method.`,
    detailedDescription: "",
    captions: [
      `This project was built as a part of CS3600: Intro to Artificial Intelligence at Georgia Tech. The goal was to create a text generator that uses an n-gram probabilities method to generate new text based on a given input text. The program reads in a text file, processes the text to create n-grams, and then uses the n-grams to generate new text that mimics the style and structure of the input text.`,
      `In the pynb file, I implemented a unigram, bigram, and trigram model and trained them locally. This was a good learning experience to understand the basics of natural language processing and probabilistic models.`,
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/textgenerator/bigram.jpg",
      "https://personal-website-55m0.onrender.com/images/textgenerator/trigram.jpg",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/textgenerator/trigram.jpg",
  },
  {
    id: 7,
    title: `Film Profitability & Market Impact Predictor`,
    shortDescription: "",
    detailedDescription: "",
    captions: [
      `Using sklearn, I built a regression model to predict the profitability of a film based on various features such as budget, genre, director, cast, and release date. The model was trained on a dataset of films achieved by calling the TMDB API to fetch movie details and financial information.`,
      `I implemented the Google Trends API to fetch the popularity of a film's title around its release date, which was used as a feature in the regression model. This helped to capture the market impact and public interest in the film and predicting if it would dissapoint or exceed expectations to accurately forecast impact on the producing company's stock ticker.`,
      `Utilized yfinance to develop predicted impact ratio.`,
      `This was my first time using sklearn and building a regression model, so it was a great learning experience to understand the basics of machine learning and data analysis.`,
      `github: https://github.com/balbertle/movieQuant`,
    ],
    images: [
      "https://personal-website-55m0.onrender.com/images/moviebot/tron.jpg",
      "https://personal-website-55m0.onrender.com/images/moviebot/tmdb.jpg",
      "https://personal-website-55m0.onrender.com/images/moviebot/outcome.jpg",
      "https://personal-website-55m0.onrender.com/images/moviebot/training.jpg",
    ],
    mainImageUrl:
      "https://personal-website-55m0.onrender.com/images/moviebot/tron.jpg",
  },
];

function makeImageUrl(req, imagePath) {
  const base =
    process.env.BASE_API_URL || "https://personal-website-55m0.onrender.com"; // Changed default to new host
  return `${base}/${imagePath.replace(/^\/+/, "")}`;
}

// GET all projects (for the main grid view)
router.get("/", (req, res) => {
  const withUrls = projects.map((p) => ({
    ...p,
    imageUrl: p.image ? makeImageUrl(req, p.image) : undefined,
  }));
  res.json(withUrls);
});

// GET a single project by ID (for the detail page)
router.get("/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ message: "not found" });
  res.json({
    ...project,
    imageUrl: project.image ? makeImageUrl(req, project.image) : undefined,
  });
});

module.exports = router;
