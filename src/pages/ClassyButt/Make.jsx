import React from 'react'
import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
import './Make.css'

function Make() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div className='make-container'>
        
        <div className={`make-heading ${isMobile?"make-heading-mobile":""}`}>
           <h1>Explore your Taste!</h1> 
        </div>

        {isPortrait?
        <div className='make-generator-portrait'>
            
            <img className="make-butt-portrait" 
                src="images/galaxy-back.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/black_Dark Buns!_.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/black_Dark Buns!_ (1).png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/rainbow colored_wowww mann!_.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/text bubbles_hmmm..._.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/toilet paper_Keep it clean._.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/cotton candy gum_Ooh fluffy!_.png" alt="dark-butt"/>
            
            <img className="make-butt-portrait" 
                src="images/Burnt Part (1).png" alt="dark-butt"/>
        
        <div className="make-box-container-portrait">
        <div className={`make-box ${isMobile?"make-box-mobile":""}`}>
            
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Smoke
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Rolling Paper
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Ingredients
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Roach
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Butts
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            <div className={`item-select ${isMobile?"item-select-portrait":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Background
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
        </div>
        </div>
        </div>:
        <div className={`make-generator ${isMobile?"make-generator-mobile":""}`}>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/galaxy-back.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/black_Dark Buns!_.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/black_Dark Buns!_ (1).png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/rainbow colored_wowww mann!_.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/text bubbles_hmmm..._.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/toilet paper_Keep it clean._.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/cotton candy gum_Ooh fluffy!_.png" alt="dark-butt"/>
            
            <img className={`make-butt-full ${isMobile?"make-butt-full-mobile":""}`} 
                src="images/Burnt Part (1).png" alt="dark-butt"/>
        
        <div className={`make-box ${isMobile?"make-box-mobile":""}`}>
            
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Smoke
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Rolling Paper
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Ingredients
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Roach
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Butts
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
            <div className={`item-select ${isMobile?"item-select-mobile":""}`}>
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} left `}> V </div>
                    Background
                <div className={`select-btn ${isMobile?"select-btn-mobile":""} right `}> V </div>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default Make