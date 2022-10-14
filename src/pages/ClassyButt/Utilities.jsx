import React from 'react'
import './Utilities.css'
import './Make.css'
import UtilCard from '../../components/UtilCard'

function Utilities() {
  return (
    <div className='util-container'>
      <div className="util-cover">
        Utilities
      </div>
        <div className="util-grid">
            <UtilCard title={'Stonerverse'} content={['Our Stoners will have a way to chill and get high together in the metaverse.'
            ,'A collaborative-experiment – A members only house to see what 5420 stoned minds can do.']} />
        
            <UtilCard title={'$BUTT ecosystem'}
                content={['A token that will be built on ETH and will be the seed (pun intended) to our ecosystem',
                'Mint pass to on-board more drug-infused collections which can be bought by $BUTT',
                'How to earn $BUTT? Easy. Staking.']} />
            

            <UtilCard title={'Lifestyle'}
            content={['Holder exclusive Merchandise including apparel and jewellery',
            'Collabs with global brands (even with our art)',
            'Giveaways (mainly drugs)',
            'Launching Grinders, Rolling Paper, and Rolling Cones with the IBBP brand and the NFTs.']} />

            <UtilCard title={'Web3evolution '}
            content={['Our advisory and incubation venture for Web3 projects (First interview requires you to get high to be eligible).',
            '4 week program led by founders, artists, geeks, and well, stoners, to explore the future of Web3.']} />

            <UtilCard title={'Charity'}
            content={["We will donate to charities that are Web3-friendly, and fight for trees (hopefully the one's we like)."]} />
        
        </div>
    </div>
  )
}

export default Utilities