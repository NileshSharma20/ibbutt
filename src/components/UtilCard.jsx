import React from 'react'

function UtilCard({title, content}) {
  return (
    <div className="util-card">
        <div className="util-content-box">

        
                <div className="util-heading">
                    {title}
                </div>

                {title==="Retail"?
                <ul className='util-list'>
                  <li style={{marginBottom:"1rem", listStyleType: "circle"}}>Storage Pouches, Hookahs, Pipes, Bongs, Grinders, Rolling Paper, and Cannabis Vapes among <a target="_blank" rel="noreferrer" href="https://www.cnet.com/culture/best-weed-accessories/">other</a> cool shit will be sold with the Booty Puffs branding</li>
                  {content.map((item,index)=>
                  <li style={{marginBottom:"1rem", listStyleType: "circle"}}>{item}</li>
                  )}
                </ul>
                :
                <ul className='util-list'>
                    {content.map((item, index)=>
                    <li style={{marginBottom:"1rem", listStyleType: "circle"}}>{item}</li>     
                    )}
                    
                </ul>
                }
        </div>
    </div>
  )
}

export default UtilCard