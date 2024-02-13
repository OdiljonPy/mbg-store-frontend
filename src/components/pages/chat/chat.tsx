import css from "./index.module.css"
import {createPortal} from "react-dom";
import ScrollTop from "@/components/pages/chat/scroll_top";
import {useEffect, useState} from "react";

const Chat = () =>{
  const scrollTop = () =>{
      window.scrollTo({top:0,behavior:'smooth'})
  }

   return(
       <div className={css.actions}>
           <ScrollTop onClick={scrollTop} />
       </div>
   )

}

export default Chat
