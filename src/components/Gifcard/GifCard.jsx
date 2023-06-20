import React from 'react'

function GifCard({gif}) {
    //this loads in our gifs
  return (
    <div>
      <img src={gif.images.downsized.url} />
    </div>
  )
}

export default GifCard
