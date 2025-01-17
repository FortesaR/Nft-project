import React from 'react'
import signup from "../assets/signup.png"

export default function Signup() {
  return (
    <div className='signup'>
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">Discover the Future of Digital Ownership with NFTs.Sign up below to
            recive updates when we go live
          </p>
          <button>Sign up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home"  />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
