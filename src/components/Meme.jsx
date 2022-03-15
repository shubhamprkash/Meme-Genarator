import React from "react";
import memeData from "../memeData";

export default function Meme() {
  // const onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("refresh prevented");
  //   };
  const [memeImg, setmemeImg] = React.useState("");

  function getMemeImg(e) {
    // console.log("testingMemeBtn");

    const memesArray = memeData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    // console.log(randomNum);
    setmemeImg(memesArray[randomNum].url);
    e.preventDefault();
  }

  return (
    <main>
      <div className="meme-container">
        <form className="form" action="">
          <input
            className="meme-text"
            type="top-text"
            placeholder="Top Content"
          />

          <input
            className="meme-text"
            type="bot-text"
            placeholder="Bottom Content"
          />

          <button className="btn colorfull" onClick={getMemeImg}>
            Get a new Meme Image 🖼
          </button>
        </form>
        <div className="meme-img-container">
          <img className="meme--img" src={memeImg} alt="" />
        </div>
      </div>
    </main>
  );
}
