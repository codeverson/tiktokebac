import React from 'react'
import "./video.css"
function Video() {
  return (
    <div className='video'>
            <video 
            className='video__player'
            controls
            loop
            src='https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/o8CeAcmedeTQlI7gQGDnbvb4ozZ3gl1ZCS3nqj/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=6060&bt=3030&cs=0&ds=3&ft=_RwJrBiTq8ZmoLS-Cc_vjt-I8AhLrus&mime_type=video_mp4&qs=0&rc=ZGQ1Z2hnNDU3NzwzM2U5OUBpM21lZWc6ZnN1ZzMzNzczM0A2X18wLjA0NmIxXjItLl9hYSNiXjRtcjRvZnFgLS1kMTZzcw%3D%3D&btag=80000&expire=1680166269&l=20230330025046E67D2686F8C7178E903E&ply_type=2&policy=2&signature=a7b1b1119b6ec9816b7a5b8783397a57&tk=tt_chain_token'
        >

        </video>
    </div>
  )
}

export default Video

