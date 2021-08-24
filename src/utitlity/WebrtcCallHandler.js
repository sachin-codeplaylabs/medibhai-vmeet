
import MeetingHandler from "com.vanimeeting.demo"
const EventEmitter = require('events')

class WebrtcCallHandler{
    
    static instance = new WebrtcCallHandler();
 

    static getInstance(){
        if(WebrtcCallHandler.instance === null){
            WebrtcCallHandler.instance = new WebrtcCallHandler();
        }
        return WebrtcCallHandler.instance;
    }

    constructor(){
        this.getMeetingRequest = this.getMeetingRequest.bind(this)
        this.meetingRequest = null;
        this.eventEmitter = new EventEmitter();
        this.meetingData = null;
        this.isAdmin = false;
        this.roomId = null;
        this.isVideoEnable = true;
        this.isAudioEnable = true;
        this.messages = [];
        this.sendMessage =         this.sendMessage.bind(this)
        this.onNewChatMessageReceived =         this.onNewChatMessageReceived.bind(this)

    }
    cleanUp(){
      console.log("Vani CLeanup")
        this.getMeetingHandler().endAndDestory();
        this.meetingRequest   = null;
        this.messages = [];
        this.eventEmitter.removeAllListeners();
                // this.meetingData = null;
        // WebrtcCallHandler.instance = null;
        
    }

    setup(roomId,userId,userData){
      
      if(this.meetingRequest == null){
        userId = (new Date()).getTime() + "_" + Math.floor(Math.random() * 20)
        this.meetingRequest = this.getMeetingHandler().meetingStartRequestObject(roomId,userId , "medibhai")
        this.meetingRequest.numberOfUsers = 2
        
        // this.meetingRequest.isAdmin = true;
        this.meetingRequest.userData = userData; 
        this.meetingRequest.isAdmin  = this.isAdmin;
        this.meetingRequest.wssUrl = "wss://meetingserver.medibhai.com/?connection="
        this.meetingRequest.iceServers = {iceServers: [


          {
              urls: ["stun:stun.l.google.com:19302"]
          },
          {
              urls: ["stun:mymeet.medibhai.com:3478"],
              username: "medibhai",
              credential: "Narrow@1994"
          }, {
              urls: ["turn:vmeet.medibhai:3478"],
              username: "medibhai",
              credential: "Narrow@1994"
          }
        
        ],        
        };;
        console.log(this.meetingRequest);

        WebrtcCallHandler.getInstance().addExtraListenerWithForcefullyAdded(
          'onNewChatMessageReceived',
          this.onNewChatMessageReceived,
          true
        );
      }
    }

    onNewChatMessageReceived(messagePayload){
      messagePayload.participant = WebrtcCallHandler.getInstance().getMeetingHandler().participantByUserId(messagePayload.sender)
      messagePayload.id = this.messages.length + "";
      messagePayload.timestamp =  (new Date()).getTime();
      this.messages.push(messagePayload)
      this.eventEmitter.emit("messageListUpdated", this.messages)
    }

    sendMessage(message) {
      if (message.length > 0) {
        let messagePayload = WebrtcCallHandler.getInstance().getMeetingHandler().newMessageObject('all', message);
        WebrtcCallHandler.getInstance().getMeetingHandler().sendMessage(messagePayload);
        messagePayload.participant = WebrtcCallHandler.getInstance().getMeetingHandler().participantByUserId(messagePayload.sender)
        messagePayload.id = this.messages.length + "";  
        messagePayload.timestamp =  (new Date()).getTime();
        this.messages.push(messagePayload);
        this.eventEmitter.emit("messageListUpdated", this.messages)
      }
      return this.messages;
    }
  
    getMeetingHandler(){
        return MeetingHandler;
    }

   
    getMeetingRequest(){
        
          return this.meetingRequest;
    }

    addExtraListener(event , listner){
        if(WebrtcCallHandler.getInstance().getMeetingHandler() != null){
          if(WebrtcCallHandler.getInstance().getMeetingHandler().eventEmitter.listenerCount(event) > 0){
            return;
          }
          WebrtcCallHandler.getInstance().getMeetingHandler().eventEmitter.on(event,listner);      
      
        }
      }

    addExtraListenerWithForcefullyAdded(event , listner,forceFullyAdd){
      if(forceFullyAdd === false){
        this.addExtraListener(event,listner)
        return;
      }
      WebrtcCallHandler.getInstance().getMeetingHandler().eventEmitter.on(event,listner);      
      
    }

    removeExtraListener(event,listner){
        WebrtcCallHandler.getInstance().getMeetingHandler().eventEmitter.off(event,listner)
    }

    
    
}

export default WebrtcCallHandler;