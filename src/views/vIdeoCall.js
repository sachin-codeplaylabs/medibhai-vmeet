import React, { Component, useRef, useState, useEffect } from 'react';
import PhoneControls from '../components/phoneControls';
import WebrtcCallHandler from '../utitlity/WebrtcCallHandler';

const VideoCall = () => {

  const friendVideo = useRef()
  const myVideo = useRef()
  const friendAudio = useRef();
  useEffect(() => {
    WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
      "onTrack",
      onTrack,
      true
    );
    WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
      "refreshTrack",
      onTrack,
      true
    );

    let allTrack = WebrtcCallHandler.getInstance().getMeetingHandler().getAllTracks()

    for(let track of allTrack){
      onTrack(track)
    }

    return ()=>{
      WebrtcCallHandler.getInstance().removeExtraListener(
        "onTrack",
        onTrack      );
      WebrtcCallHandler.getInstance().removeExtraListener(
        "refreshTrack",
        onTrack      );
    }
  },[])


  const onTrack = (track) =>{
    console.log("ontrack");
    if(track && track.track !== null ){
      if(track.isLocalTrack){
        onLocalTrack(track)
      }
      else {
        if(track.kind === "video"){
          friendVideo.current.srcObject = new MediaStream([track.track])
          friendVideo.current.play()
        }
        else{
          friendAudio.current.srcObject = new MediaStream([track.track])
          friendAudio.current.play()
        }
      }
    }
  }

  const onLocalTrack= (track) =>{
    if(track.kind === "video"){

      myVideo.current.srcObject = new MediaStream([track.track])
      myVideo.current.play()
    }

  }

  return (
    <div className="remote-track--container">
      <video  ref={friendVideo}></video>
      <audio  ref={friendAudio}></audio>

      <div className="call-view__tracks__local-track-container side-call-container">
        <div className="call-view__tracks__local-track">
          <video  ref={myVideo}></video>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;