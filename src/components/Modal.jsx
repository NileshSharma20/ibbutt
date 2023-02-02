import { useRef, useEffect } from 'react'
import "./Modal.css"

function Modal({passModalFlag, text="Coming Soon!"}) {
    const mRef = useRef(null)
    const xRef = useRef(null)

    const handleClose=()=>{
        passModalFlag(false)
    }

    useEffect(()=>{
        let handler = (event) => {
            if(!mRef.current.contains(event.target) || xRef.current.contains(event.target) ){
            handleClose()
            }
        };
        document.addEventListener("mousedown", handler);
    
        return()=>{
          document.removeEventListener("mousedown",handler);
        }
    },[])

  return (
    <div className="false-background">
    <div className='modal-container' ref={mRef}>
        <div className="close-btn-container">

        <div className="close-btn" ref={xRef} onClick={()=>handleClose()}>x</div>
        </div>
        <p> 
            {text}
        </p>
    </div>
    </div>
  )
}

export default Modal