import React, {Component} from 'react';

class ChatScreen extends Component {
    
  render() {
    return (
        <div className="chatApp__conv">
            <div className="chat-header">
                <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar header-img-align"/>
                <div style={{boxShadow:"none"}} className="chatApp__convMessageValue clrwhite">John Doe</div>
                <div style={{marginLeft:"auto"}}>
                    <i className="material-icons-round" style={{color: "#FAFAFA",width:"25px"}}>phone</i>
                </div>
            </div>
            <div className="chatApp__convTimeline">
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Indeed.... We're gonna have to fix that.</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Great! It's been a while..</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">How are you?</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hey!</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hello</div>
                </div>  
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Great! It's been a while..</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">How are you?</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hey!</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hello</div>
                </div>  
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Great! It's been a while..</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">How are you?</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--left clearfix">
                    <img src="https://i.pravatar.cc/150?img=56" alt="Gabe" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hey!</div>
                </div>
                <div className="chatApp__convMessageItem chatApp__convMessageItem--right clearfix">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Shun" className="chatApp__convMessageAvatar"/>
                    <div className="chatApp__convMessageValue">Hello</div>
                </div>  
            </div>
            <div className="chatApp__convSendMessage clearfix">
                <div className="chatApp__convTyping">John is typing...</div>
                <form>
                    <input type="text" className="chatApp__convInput" value="" placeholder="Type a message"/>
                    <div className="chatApp__convButton "><i className="material-icons">send</i></div>
                </form>
            </div>
        </div>
    )
  }
}
export default ChatScreen;
