import React, { Component } from 'react';

const PhoneControls = (props) => {
  let icon_html = "";
  console.log(props.IsVideoOn);
  let video_icon = <div id="btn--toggle-cam " onClick={props.setVideoEvent} className="call-view__controls__icon-btn">
    <i className="material-icons-round" style={{ color: "#FF3346" }}>
      {props.valIsvideoOn ? "videocam" : "videocam_off"}
    </i>
  </div>

  let mic_icon = <div id="btn--toggle-mic" onClick={props.setMicEvent} className="call-view__controls__icon-btn">
    <i className="material-icons-round" style={{ color: "#FF3346" }}>
      {props.valisMicOn ? "mic" : "mic_off"}
    </i>
  </div>

  if (props.CurrentScreen == "ChatScreen")
    return ('');

  if (props.CurrentScreen == "joincall") {
    icon_html = <div className="call-view__controls">
      {video_icon}{mic_icon}
    </div>;
  } else {
    icon_html = <div className="call-view__controls">
      <div id="btn--toggle-mic" onClick={props.chatEvent} className=" call-view__controls__icon-btn">
        <i className="material-icons-round" style={{ color: "#FF3346" }}>chat</i>
      </div>
      <div id="btn--toggle-cam" onClick={props.setSpeakerEvent} className="call-view__controls__icon-btn">
        <i className="material-icons-round" style={{ color: "#FF3346" }}>
          {props.valIsSpeakerOn ? "volume_up" : "volume_off"}
        </i>
      </div>
      {video_icon}
      {mic_icon}
      <div id="btn--end-call" onClick={props.setCallEndedEvent} className="call-view__controls__icon-btn important">
        <i className="material-icons-round" style={{ color: "#FAFAFA" }}>
          call_end
        </i>
      </div>
    </div>;
  }

  return (
    <div className="call-view__controls-container">
      {icon_html}
    </div>
  )
}

export default PhoneControls;