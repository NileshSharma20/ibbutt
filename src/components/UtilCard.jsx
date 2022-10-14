import React from 'react'

function UtilCard({title, content}) {
  return (
    <div className="util-card">
        <div className="util-content-box">

        
                <div className="util-heading">
                    {title}
                </div>
                <ul className='util-list'>
                    {content.map((item)=>
                    <li style={{marginBottom:'1rem'}}>{item}</li>     
                    )}
                    {/* <li>Our Stoners will have a way to chill and get high together in the metaverse.</li>
                    <li>A collaborative-experiment – A members only house to see what 5420 stoned minds can do. </li> */}
                    
                </ul>
        </div>
    </div>
  )
}

export default UtilCard