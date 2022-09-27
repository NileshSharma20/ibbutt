import Web3 from 'web3'
import { providers, Contract, utils, ethers, BigNumber } from "ethers"

var accAddress = ""

const connectWallet = async() => {
    // let provider = window.ethereum;
    
    // if(typeof provider !== 'undefined'){
    //   await provider.request({method: 'eth_requestAccounts'})
    //   .then((accounts) =>{
    //     console.log(`Account: ${accounts[0]}`);
    //     accAddress = accounts[0]
    //   }).catch((error)=>{
    //     console.log(error);
    //   })
    
    //   window.ethereum.on('accountsChanged', function(accounts){
    //     console.log(`Account changed to: ${accounts[0]}`)
    //     accAddress = accounts[0]
    //   })
    //   return accAddress
    // }

    // const web3 = new Web3(provider)
    // const accounts = await web3.eth.getAccounts();
    // accAddress = accounts[0]
    // console.log(`Account Ret: ${accAddress}`)
    // return accAddress
    try {
        const { ethereum } = window
        let width = window.innerWidth;
        if (!ethereum && width > 480) {
            // toast.error("Get MetaMask -> https://metamask.io/", {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // })
            return
        }
        if (!ethereum && width <= 480) {
            window.open("https://metamask.app.link/dapp/ibbutt.vercel.app/mintOnHold")
        }

        const account = await ethereum.request({ method: "eth_requestAccounts" })
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(account[0])
        return account[0]
    }catch (err) {
        console.log(err)
    }
}




const walletService = {
    connectWallet,
}

export default walletService