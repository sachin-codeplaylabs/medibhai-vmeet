import React, { Component, useRef, useState, useEffect } from 'react';
import PhoneControls from '../components/phoneControls';

const VideoCall = () => {

  const friendVideo = useRef()
  const myVideo = useRef()

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { width: window.innerWidth, height: window.innerHeight }, audio: false }).then((stream) => {
      friendVideo.current.srcObject = stream
    });
    navigator.mediaDevices.getUserMedia({ video: { width: 120, height: 170 }, audio: false }).then((stream) => {
      myVideo.current.srcObject = stream
    });
  })

  return (
    <div className="remote-track--container">
      <video autoPlay={true} ref={friendVideo}></video>
      <div className="call-view__tracks__local-track-container side-call-container">
        <div className="call-view__tracks__local-track">
          <video autoPlay={true} ref={myVideo}></video>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;