import React from "react";
import "../css/style.scss";

function StyleGuide() {
  return (
    <section className="style-guide">
      <h1>Style Guide</h1>

      {/* Fonts Section */}
      <section className="fonts">
        <h2>Fonts</h2>
        <section className="font-sample">
          <p className="font-primary">Primary Font: Poetsen One, sans-serif</p>
        </section>
      </section>

      {/* Colors Section */}
      <section className="colors">
        <h2>Colors</h2>
        <section className="color-sample">
          <section className="color-box dark-color">
            <p>Dark Color</p>
          </section>
          <section className="color-box primary-color">
            <p>Primary Color</p>
          </section>
          <section className="color-box secondary-color">
            <p>Secondary Color</p>
          </section>
          <section className="color-box mid-color">
            <p>Mid Color</p>
          </section>
          <section className="color-box light-color">
            <p>Light Color</p>
          </section>
        </section>
      </section>

      {/* Buttons Section */}
      <section className="buttons">
        <h2>Buttons</h2>
        <section className="button-sample">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </section>
      </section>
    </section>
  );
}

export default StyleGuide;
