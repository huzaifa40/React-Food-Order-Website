import React from 'react'
import './DownloadApp.css'
import appStore from '../../Assets/assets/app_store.png'
import playStore from '../../Assets/assets/play_store.png'

const DownloadApp = () => {
  return (
    <div className='download-section' name='mobile-app'>
        <div className='download-content'>
           <p>For Better Experience Download <br />Eato App</p>
        </div>
        <div className='download-images'>
            <img src={playStore} alt="" />
            <img src={appStore} alt="" />
        </div>      
    </div>
  )
}

export default DownloadApp
