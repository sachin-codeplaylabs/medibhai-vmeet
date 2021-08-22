import PhoneCall from './views/phoneCall';
import ChatScreen from './views/chatScreen';
import VideoCall from './views/vIdeoCall';
import JoinCall from './views/joinCall';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="call-view__tracks">
        {/* <PhoneCall/> */}
        {/* <VideoCall/> */}
        <ChatScreen/>
        {/* <JoinCall/> */}

      </div>
    </div>
  );
}

export default App;
