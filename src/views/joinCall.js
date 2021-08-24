import React, { useEffect, useRef, useState } from "react"
import PhoneControls from '../components/phoneControls';
import Button from '@material-ui/core/Button';

const JoinCall = (props) => {
  const myVideo = useRef()
  // const [stream, setStream] = useState()
  const [IsmicOn, setMic] = useState(true)
  const [JoinFriendCall, setJoincall] = useState(false)

  // setState({});
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      if (props.IsvideoOn)
        myVideo.current.srcObject = stream
    });
  })

  const joinCallEvent = () => {
    setJoincall(true);
  }

  return (
    <>
      <div className="remote-track--container">
        <img className="join-logo" src={"https://medibhai.com/assets/responsive/images/logo.jpg"} />
        <div className="phone-call-container join-call-container">
          <div className="call-view__tracks__local-track-container">
            <div className="call-view__tracks__local-track">
              <br /><br />
              {
                props.IsvideoOn
                  ? <video playsInline className="join-video" muted ref={myVideo} autoPlay style={{ width: "300px" }} />
                  : <div className="my-video-placeholder"></div>
              }
            </div>
            <br></br>

            <Button variant="contained" onClick={props.setjoinCallEvent} color="primary">Join</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinCall;