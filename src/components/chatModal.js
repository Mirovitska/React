import React from "react";
import Chat from './Chat';
import Icons from './Icons';
import '../App.css';

let stateChat = true;


    // const [isOpen, setIsOpen] = useState(false); 
  
    // const handleChatToggle = () => {
    //   setIsOpen(!isOpen);
    // };
    function ChatModal(){
        if(stateChat){
            return <Chat/>;
        } else {
            return <Icons/>;
        }
        }


        // <button onClick={handleChatToggle}>Open Chat</button>
  
       


  
  export default ChatModal;
  