import React, { useEffect, useRef, useState } from "react"
import PhoneControls from '../components/phoneControls';
import Button from '@material-ui/core/Button';
import WebrtcCallHandler from "../utitlity/WebrtcCallHandler";
import Utility from "../utitlity/Utility";
import axios from "axios";


const JoinCall = (props) => {
  const myVideo = useRef()
  // const [stream, setStream] = useState()
  const [IsmicOn, setMic] = useState(true)
  const [JoinFriendCall, setJoincall] = useState(false)
  const [shouldEnableJoin, setShouldEnableJoin] = useState(false)
  let userId = Utility.getUserId();
  let roomId = Utility.getRoomId();
  // setState({});
  useEffect(() => {
   

    if(roomId === null || userId === null){
      return;
    }
    callApiForUserDetails(roomId,userId)
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      if (props.IsvideoOn)
        myVideo.current.srcObject = stream
    });

    WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
      "onConnected",
      onConnected, false
      
      
      );
    WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
      "permissionError",
      onPermissionError,
      false
    );
    WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
      "permissionApproved",
      onPermissionApproved,
      false
    );

    return () =>{
      WebrtcCallHandler.getInstance().removeExtraListener(
        "onConnected",
        onConnected
        
        
        );
      WebrtcCallHandler.getInstance().removeExtraListener(
        "permissionError",
        onPermissionError
      );
      WebrtcCallHandler.getInstance().removeExtraListener(
        "permissionApproved",
        onPermissionApproved
        
      );
    }


  },[])




  const onConnected = () =>{
    console.log("onConnected");
    WebrtcCallHandler.getInstance().getMeetingHandler().startMeeting();
    props.setjoinCallEvent();
    // setJoincall(true);

  }
  const onPermissionError = () =>{
    //Show error if not permission granted
  }

  const onPermissionApproved = () =>{
    WebrtcCallHandler.getInstance().getMeetingHandler().checkSocket()
  }
  const callApiForUserDetails = (roomId,userId) =>{
    var bodyFormData = new FormData();
    bodyFormData.append('room_id', roomId);
    axios({
      method: "post",
      url: "https://www.medibhai.com/api/medibhai_vmeet/meet_details",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        onApiResponse(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }

  const onApiResponse = (response) =>{
    if(response && response.data && response.data.message && response.data.message[userId]){
      let userData = response.data.message[userId];
      console.log(response.data.message)
      console.log(userData)

      var finalUserData = {};
      if(userData.patient_name){
        finalUserData.name = userData.patient_name
      }
      else if(userData.doctor_name){
        finalUserData.name = userData.doctor_name

      }
      if(userData.to_user_id){
        finalUserData.userId = userData.to_user_id
      }
      else if(userData.from_user_id){
        finalUserData.userId = userData.from_user_id
      }

      WebrtcCallHandler.getInstance().setup(roomId,userId,userData)

      WebrtcCallHandler.getInstance().getMeetingHandler().init()

      setShouldEnableJoin(true)

    }
  }
  const joinCallEvent = () => {
    WebrtcCallHandler.getInstance().getMeetingHandler().startLocalStream(true,true)
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

              {shouldEnableJoin ?
            <Button variant="contained" onClick={joinCallEvent} color="primary">Join</Button>
            : null
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinCall;