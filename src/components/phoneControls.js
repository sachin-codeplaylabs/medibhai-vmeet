import React, {Component} from 'react';

class PhoneControls extends Component {
  render() {
    return (
      <div className="call-view__controls-container">
        <div className="call-view__controls">
            <div id="btn--toggle-cam" className="call-view__controls__icon-btn">
              <i className="material-icons-round" style={{color: "#FF3346"}}>volume_off</i>
            </div>
            <div id="btn--toggle-cam" className="call-view__controls__icon-btn">
              <i className="material-icons-round" style={{color: "#FF3346"}}>videocam_off</i>
            </div>
            <div id="btn--toggle-mic" className="call-view__controls__icon-btn">
              <i className="material-icons-round" style={{color: "#FF3346"}}>mic_off</i>
            </div>
            <div id="btn--end-call" className="call-view__controls__icon-btn important">
              <i className="material-icons-round" style={{color: "#FAFAFA"}}>call_end</i>
            </div>
          </div>
      </div>
  ) 
  }
}
export default PhoneControls;
