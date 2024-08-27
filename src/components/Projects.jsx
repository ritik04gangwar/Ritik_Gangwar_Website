import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>BlazePredictor</h3>
        <p>
          BlazePredictor is a machine learning-powered prediction tool designed
          to accurately forecast outcomes based on historical data. Developed
          using Flask and JavaScript, this versatile tool can be applied across
          various domains such as finance, sports, and weather prediction. It
          leverages advanced algorithms to analyze patterns, enabling users to
          make informed decisions. The user-friendly interface allows seamless
          interaction, while the backend efficiently handles large datasets.
          BlazePredictor's adaptability makes it an ideal solution for both
          personal and professional use, empowering users with precise,
          data-driven insights. Its deployment ensures accessibility and
          real-time performance, catering to diverse predictive needs.
        </p>
      </div>
      <div className="project">
        <h3>Hairstyle Recommendation System</h3>
        <p>
          The Hairstyle Recommendation System is a deep learning-powered tool
          designed to suggest personalized hairstyles based on an individual's
          face shape. Using a neural network built from scratch, the system
          classifies face shapes into categories such as heart, oblong, oval,
          round, or square. Once classified, it recommends up to 10 suitable
          hairstyles tailored to enhance the user's unique facial features.
          Developed in Python, the system combines computer vision techniques
          with advanced machine learning algorithms to deliver precise and
          stylish recommendations. This innovative tool caters to both personal
          and professional use, offering users a customized approach to finding
          their perfect hairstyle.
        </p>
      </div>
      <div className="project">
        <h3>Quizzer</h3>
        <p>
          Quizzer is an interactive quiz platform designed to create, manage,
          and take quizzes seamlessly. Built with React, it offers a dynamic and
          engaging user interface where users can participate in quizzes on
          various topics, track their progress, and view detailed results. The
          platform allows quiz creators to easily design custom quizzes with
          multiple question types, including multiple choice, true/false, and
          short answer. Quizzer features real-time feedback, scoring, and a
          leaderboard system to foster competition and learning. The project
          aims to make learning fun and accessible, whether for educational
          purposes, training, or just entertainment.
        </p>
      </div>
      <div className="project">
        <h3>Language Learning Flashcards</h3>
        <p>
          The Language Learning Flashcards project is an interactive tool
          designed to help users master new languages through a flashcard-based
          approach. Built using React, this platform allows users to create,
          organize, and review flashcards that contain vocabulary, phrases, or
          grammar rules. Each flashcard can be flipped to reveal the translation
          or explanation, with a smooth animation enhancing the learning
          experience. The tool includes features like spaced repetition,
          progress tracking, and customizable categories to tailor the learning
          process to individual needs. Ideal for language enthusiasts and
          students, this project makes language acquisition engaging, efficient,
          and accessible.
        </p>
      </div>
    </section>
  );
};

export default Projects;
