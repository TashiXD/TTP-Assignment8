import React from 'react'

function GifCard({gif}) {
  return (
    <div>
      <img src={gif.images.downsized.url} />
    </div>
  )
}

export default GifCard
