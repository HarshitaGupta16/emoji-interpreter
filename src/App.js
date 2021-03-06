import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "slightly smiling face",
  "π": "grinning face",
  "π": "grinning face with big eyes",
  "π": "grinning face with smiling eyes",
  "π": "face throwing a kiss",
  "π€«": "shushing face",
  "π€": "zipper-mouth face",
  "π": "grinning face with sweat",
  "π€£": "rolling on the floor laughing",
  "π": "face with Tears of Joy",
  "π": "Face Savoring Food",
  "β€οΈ": "love",
  "π": "folded hands",
  "π": "celebratory (two raised hands)",
  "π―": "achievement, support",
  "βΊοΈ": "smiling",
  "π": "confused",
  "π": "devilish behavior"
};

const popularEmojiDictionary = {
  "π": "grinning face with big eyes",
  "π": "grinning face with smiling eyes",
  "π": "face throwing a kiss",
  "π": "face with tears of joy",
  "π": "smiling face with heart-eyes",
  "π": "hungry",
  "β€οΈ": "love",
  "π": "folded hands",
  "π’": "cry"
};

var emojiWeKnow = Object.keys(popularEmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database!!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = popularEmojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="text-style"> Emoji Interpreter</h1>
      <div>
        <img
          style={{
            maxWidth: "150px",
            paddingBottom: "3rem"
            // marginLeft: "-50%"
          }}
          src="https://cliparting.com/wp-content/uploads/2018/03/animated-emoticons-2018-35.gif"
          alt="emoji-see-below"
        />
      </div>
      <h3 className="text-style-left">Search your emoji here</h3>
      <input onChange={inputChangeHandler} />
      <h3 className="text-style">Some Popular Emojies</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            className="emoji-styling"
          >
            {emoji}
          </span>
        );
      })}
      <div className="meaning">{meaning}</div>
      <img
        className="img-style"
        src="https://i.pinimg.com/originals/0d/cd/6f/0dcd6f4e410a34465a2d611913199e50.gif"
        alt="emoji-dance"
      />
    </div>
  );
}

/**
 *  things to notice
 *  in react we use className instead of class
 * class --> className
 * beacause class is a reserved keyword in JS
 * style --> JSX takes style as an object instead of string
 */
