import React, {Component} from 'react';
import PhoneControls from '../components/phoneControls';

export default class VideoCall extends React.Component {
   
    componentDidMount(){
       let constraints = { audio: false, video: { width:window.innerWidth, height: window.innerHeight } };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          let video = document.getElementById("friend-video");
  
          video.srcObject = mediaStream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        }); // always check for errors at the end.

        constraints = { audio: false, video: { width:120, height: 170 } };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          let video = document.getElementById("myVideo");
  
          video.srcObject = mediaStream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        }); // always check for errors at the end.
    }
    render() {
      return (
        <div className="remote-track--container">
            <video autoPlay={true} id="friend-video"></video>
            <div className="call-view__tracks__local-track-container side-call-container">
                <div className="call-view__tracks__local-track">
                        <video autoPlay={true} id="myVideo"></video>
                </div>
            </div>
            <PhoneControls/>
        </div>
      );
    }
  }