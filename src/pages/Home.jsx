import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home() {
  return (
    <div className='main-container' >
        <div className='nav'>
            <div className='join-us'>
                <div className='icon-one'>
                <FontAwesomeIcon className='icon' icon={faXTwitter} />
                <FontAwesomeIcon className='icon' icon={faTelegram} />
                <h2 className='join-text'>Join us!</h2>
                </div>
            </div>
            <div className='coin-image-container'> 
                <img src="https://cdn.coinmooner.com/logo/42570.png?v=0" alt="IMAGE"  />
                <h1 className='coin-image-container-text'>Hamster Kombat</h1>
            </div>
            <div className='White-papper'>
                <button>WhitePaper</button>
                <div className='circle'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home