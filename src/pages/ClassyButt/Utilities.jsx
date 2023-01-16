import React from 'react'
import './Utilities.css'
import './Make.css'
import UtilCard from '../../components/UtilCard'

function Utilities() {
  return (
    <div className='util-container'>
      <div className="util-cover" >
        Utilities
      </div>
        <div className="util-grid">
            <UtilCard title={'Stonerverse'} 
            content={['Our StonerVerse will provide a virtual haven for individuals to relax and experience cannabis culture within the metaverse.'
            ,'A collaborative and interactive experience, where members can explore and see what can be achieved when 5420 like-minded individuals come together in exclusive rooms.']} />
        
            <UtilCard title={'Lifestyle'}
            content={['Exclusive merchandise, such as apparel and jewelry, will be available to holders of our NFTs.',
            'Collabs with global brands (even with art like ours)',
            'Giveaways (mainly drugs)']} />

            <UtilCard title={'Retail'}
            content={[`Storage Pouches, Hookahs, Pipes, Bongs, Grinders, Rolling Paper, and Cannabis Vapes among ${<a href="https://www.cnet.com/culture/best-weed-accessories/">others</a>} will be sold with the Booty Puffs branding`,
            "Can be purchased in Fiat, Crypto, or $BUTT",
            "% of profits will be redistributed within the community in the form of giveaways"]} />
        
            <UtilCard title={'Charity'}
            content={["10% of mint amount will be donated for a good cause – saving trees (hopefully the one’s that we like)"]} />

            <UtilCard title={'Web3evolution '}
            content={['An advisory and incubator accelerator for Web3 projects (first interview requires you to get high to prove eligibility)',
            'Workshops held by founders, artists, lawyers, geeks, and well, stoners, to explore the future of Web3 and uncover endless possibilities.']} />
            
            <UtilCard title={'$BUTT ecosystem'}
                content={['A token that will be built on ETH and will be the seed (pun intended) to our ecosystem',
                '$BUTT can be used to score more drug-infused collections, hence, acting like a mint pass',
                'Earn $BUTT by staking and smoking']} />        
        </div>

        <div className="banner-text"
          style={{marginBottom:"5rem", textDecoration:"underline", color:"rgba(255,20,0,0.9)"}}
        >
          Holder Exclusive Discord launching soon.
        </div>
    </div>
  )
}

export default Utilities