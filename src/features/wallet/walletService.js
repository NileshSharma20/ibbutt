import Web3 from 'web3'
import { providers, Contract, utils, ethers, BigNumber } from "ethers"

// var accAddress = ""

const connectWallet = async() => {
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
        // console.log({'walletID':account[0]})
        if (account) {
            localStorage.setItem('wallet', JSON.stringify({'walletID':account[0]}))
          }
        return account[0]
    }catch (err) {
        console.log(err)
    }
}




const walletService = {
    connectWallet,
}

export default walletService