import React from "react";
import "./gifcard.css";
function GifCard({ gif }) {
  //this loads in our gifs
  return (
    <div>
      <div className="gif">
        <a href={gif.url} target="_blank"><img src={gif.images.downsized.url}/></a>
        <p><span>Title:</span> {gif.title}</p>
      </div>
    </div>
  );
}

export default GifCard;
