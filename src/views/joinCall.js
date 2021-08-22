import React, {Component} from 'react';
import PhoneControls from '../components/phoneControls';

export default class JoinCall extends Component {
    componentDidMount(){
       let constraints = { audio: false, video: { width:150, height: 300 } };
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
      <img className="join-logo" src={"https://medibhai.com/assets/responsive/images/logo.jpg"}/>
      <div className="phone-call-container join-call-container">        
      <div class="call-view__tracks__local-track-container">
        <div class="call-view__tracks__local-track">
            <br/><br/>
          <video className="join-video" id="myVideo"></video>
        </div>
        <button className="join-btn">Join</button>
      </div>
      </div>
      <div className="call-view__controls-container">
        <div className="call-view__controls">
            <div id="btn--toggle-cam" className="call-view__controls__icon-btn">
              <i className="material-icons-round" style={{color: "#FF3346"}}>videocam</i>
            </div>
            <div id="btn--toggle-mic" className="call-view__controls__icon-btn">
              <i className="material-icons-round" style={{color: "#FF3346"}}>mic</i>
            </div>
          </div>
      </div>
    </div>
  ) 
  }
}