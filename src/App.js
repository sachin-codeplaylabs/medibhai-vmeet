import React, { useState } from 'react'
import PhoneCall from './views/phoneCall';
import PhoneControls from './components/phoneControls';
import ChatScreen from './views/chatScreen';
import VideoCall from './views/vIdeoCall';
import JoinCall from './views/joinCall';
import './App.css';
import WebrtcCallHandler from './utitlity/WebrtcCallHandler';

function App() {

  const [isjoinCall, setjoinCall] = useState(false);
  const [isMicOn, setMicOnOff] = useState(true);
  const [isSpeakerOn, setSpeakerOn] = useState(true);
  const [isChatOn, setChatOn] = useState(false);
  const [isCallEnded, setCallEnded] = useState(false);
  const [IsvideoOn, setVideoCall] = useState(true);
  const [CurrentScreen, setCurrentScreen] = useState("joincall");


  const setjoinCallEvent = () => {
    if (IsvideoOn)
      setCurrentScreen('VideoCall')
    else setCurrentScreen('PhoneCall')

    setjoinCall(true);
  }

  const setChatEvent = () => {
    setCurrentScreen('ChatScreen')
    setChatOn(true);
  }
  const setMicEvent = () => {
    if(isMicOn){
      WebrtcCallHandler.getInstance().getMeetingHandler().muteUser(WebrtcCallHandler.getInstance().getMeetingRequest().userId)

    }
    else{
      WebrtcCallHandler.getInstance().getMeetingHandler().unmute(WebrtcCallHandler.getInstance().getMeetingRequest().userId)

    }
    setMicOnOff((prev) => { return !prev });
  }
  const setSpeakerEvent = () => {
    setSpeakerOn((prev) => { return !prev });
  }
  const setCallEndedEvent = () => {
    WebrtcCallHandler.getInstance().cleanUp()
    setCurrentScreen('joincall');
    setjoinCall(false);
    setCallEnded((prev) => { return !prev });
  }

  const setVideoEvent = () => {
    if(IsvideoOn){
      WebrtcCallHandler.getInstance().getMeetingHandler().pauseCamera(WebrtcCallHandler.getInstance().getMeetingRequest().userId)

    }
    else{
      WebrtcCallHandler.getInstance().getMeetingHandler().resumeCamera(WebrtcCallHandler.getInstance().getMeetingRequest().userId)

    }
    if (isjoinCall)
      setCurrentScreen('VideoCall')


    setVideoCall((prev) => {

      if (isjoinCall) {
        if (!prev)
          setCurrentScreen('VideoCall')
        else setCurrentScreen('PhoneCall')
      }

      return !prev


    });
  }

  const renderSwitch = (param) => {
    switch (param) {
      case 'foo':
        return 'bar';
      default:
        return 'foo';
    }
  }

  return (
    <div className="App">
      <div className="call-view__tracks">
        {(() => {
          switch (CurrentScreen) {
            case 'joincall':
              return <JoinCall isjoinCall={setjoinCall} IsvideoOn={IsvideoOn} isMicOn = {isMicOn}  setjoinCallEvent={setjoinCallEvent} />;
            case 'PhoneCall':
              return <PhoneCall />;
            case 'ChatScreen':
              return <ChatScreen />;
            case 'VideoCall':
              return <VideoCall />;
          }
        })()}
      </div>
      <PhoneControls
        CurrentScreen={CurrentScreen}
        chatEvent={setChatEvent}
        valIsChatOn={isChatOn}
        setMicEvent={setMicEvent}
        valisMicOn={isMicOn}
        setSpeakerEvent={setSpeakerEvent}
        valIsSpeakerOn={isSpeakerOn}
        setCallEndedEvent={setCallEndedEvent}
        valisCallEnded={isCallEnded}
        setVideoEvent={setVideoEvent}
        valIsvideoOn={IsvideoOn}
      />
    </div>
  );
}

export default App;
