import React from 'react'

function NotFound() {
    const bgImg = "https://ik.imagekit.io/qljqw3tvn/ibbutt/bg/galaxy_I%20am%20high!__ELVcV8-GvE.png?updatedAt=1755414420030"
  return (
    <div className='nsfw-container'>
        <img src={bgImg} alt="" className="container-bg-img" />
        <h1>404</h1>
        <h2>Page Not Found!</h2>
    </div>
  )
}

export default NotFound