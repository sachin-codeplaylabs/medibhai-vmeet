import React, { Component, useState } from 'react';
import PhoneControls from '../components/phoneControls';

const PhoneCall = () => {

  const [hellostate, sethellostate] = useState("hello world");

  return (
    <div className="remote-track--container">
      <div className="phone-call-container">
        <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?size=626&ext=jpg)" }} className="phone-backgound-cover"></div>
        <div className="picture-placeholder" style={{ backgroundImage: "url('https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png')" }}>
          <div className="caller-name">
            <span className="caller-text">John Doe</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PhoneCall;