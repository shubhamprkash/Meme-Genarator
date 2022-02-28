import React from "react";
import memeData from "../memeData";


export default function Meme() {


  const onSubmit = (e) => {
      e.preventDefault();
      console.log("refresh prevented");
    };
    const [memeImg,setmemeImg] = React.useState("");


    function getMemeImg(){
      // console.log("testingMemeBtn");

      const memesArray = memeData.data.memes;
      const randomNum = Math.floor(Math.random()*memesArray.length);
      // console.log(randomNum);
      setmemeImg(memesArray[randomNum].url)
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


        <button className="btn"
          onClick={getMemeImg}>
          Get a new meme image 🖼</button>
      </form>

    </div>
    <img src={memeImg} alt="" />
    </main>
  );
}
