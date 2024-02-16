import css from "./index.module.css"
import {createPortal} from "react-dom";
import ScrollTop from "@/layout/components/chat/scroll_top";
import {useEffect, useRef, useState} from "react";

const Chat = () =>{
    const [show,setShow] = useState(false)
  const scrollTop = () =>{
      window.scrollTo({top:0,behavior:'smooth'})
  }

    useEffect(() => {
        window.addEventListener('scroll',(()=>{
            if(window.scrollY > 350) setShow(true)
            else setShow(false)
        }))
    }, []);

   return(
       <div className={css.actions} >
           <ScrollTop onClick={scrollTop} isShow={show} />
       </div>
   )

}

export default Chat
