import React from 'react';

export default function Meme() {
  return <div className='meme-container'>
      <form className='form' action="">
          <input className='meme-text' type="top-text" placeholder='Top Content'/>
          <input className='meme-text'  type="bot-text" placeholder='Bottom Content' />
          <button className='btn'>Get a new meme image 🖼</button>
      </form>
  </div>;
}
