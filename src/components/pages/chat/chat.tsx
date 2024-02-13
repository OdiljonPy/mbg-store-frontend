import css from "./index.module.css"
import {createPortal} from "react-dom";
import ScrollTop from "@/components/pages/chat/scroll_top";
import {useEffect, useState} from "react";
import ChatComponent from "@/components/pages/chat/chat_component";

const Chat = () =>{
   const [isBrowser,setIsBrowser] = useState(false)
    useEffect(() => {
        setIsBrowser(true)
    }, []);

   return(
       <div className={css.actions}>
           <ScrollTop/>
           {/*<ChatComponent/>*/}
       </div>
   )

}

export default Chat
