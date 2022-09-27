import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet } from '../../features/wallet/walletSlice'
import './Mint.css'
// import Socials from '../../components/Socials'

function Mint() {
  const dispatch = useDispatch()
  const {walletAddress} = useSelector((state) => state.wallet)

  function handleConnect(){
    console.log(`Tohri maiya ka bur`)
    dispatch(connectWallet())
}

  return (
    <div className='mint-container'>
      
      <div className="mint-content">
        <div className="mint-info">{walletAddress}</div>
        <div className="mint-btn">Mint</div>
        <div className="mint-btn"
          onClick={()=>handleConnect()}
        >Connect</div>
      </div>
      
      {/* <Socials /> */}
    </div>
  )
}

export default Mint