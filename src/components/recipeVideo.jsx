import React from "react";
import recipe from "../videos/Recipe.mp4";

function RecipeBook() {
  return (
    <main>
      <h1>Interactive Recipe Book Web Application</h1>
      <video width="750" height="500" controls>
        <source src={recipe} type="video/mp4" />
      </video>
    </main>
  );
}

export default RecipeBook;
