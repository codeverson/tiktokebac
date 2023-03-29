import React from 'react'
import "./video.css"
function Video() {
  return (
    <div className='video'>
            <video 
            className='video__player'
            controls
            src='https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2'
        >

        </video>
    </div>
  )
}

export default Video