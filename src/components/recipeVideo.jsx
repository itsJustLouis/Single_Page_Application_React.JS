import React from "react";

function RecipeBook() {
  const videoUrl =
    "https://drive.google.com/file/d/1jicniNl8GZCwjAaQCmIbzVYF4VeKvklC/view?t=6";

  return (
    <main>
      <h1>Interactive Recipe Book Web Application</h1>
      <video width="750" height="500" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}

export default RecipeBook;
