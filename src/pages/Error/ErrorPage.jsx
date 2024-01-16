import React from "react";
import "./ErrorPage.css";

export default function Error() {
  return (
    <div className="fun-not-found-container">
      <div className="cook-emojis">
        <span role="img" aria-label="Male Cook Emoji">
          👨‍🍳
        </span>
        <span role="img" aria-label="Female Cook Emoji">
          👩‍🍳
        </span>
      </div>
      <h1>Uh Oh! 404 - Page Not Found</h1>
      <p>
        We tried looking for it in all of our cupboards, but it seems that this
        page doesn't exist.
      </p>
      <p>
        Try adding some olive oil to your cooking, and everything will be fine!
      </p>
      <div className="funny-cooking-emojis">
        <span role="img" aria-label="Chef Emoji">
          👨‍🍳
        </span>
        <span role="img" aria-label="Olive Emoji">
          🫒
        </span>
        <span role="img" aria-label="Spaghetti Emoji">
          🍝
        </span>
        <span role="img" aria-label="Paella Emoji">
          🥘
        </span>
        <span role="img" aria-label="Cheese Emoji">
          🧀
        </span>
        <span role="img" aria-label="Stew Emoji">
          🍲
        </span>
        <span role="img" aria-label="Chef Emoji">
          👩‍🍳
        </span>
      </div>
    </div>
  );
}
