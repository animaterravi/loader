import React from 'react';
import { HomeIcon, SettingsIcon, User } from './icon';
import './_loading.scss'

const Loader = (props: any)=>{
  return (
    <div className="no-freeze-spinner">
        <div id="no-freeze-spinner">
            <div>
            <i>
                <User/>
            </i>
            <i>
                <HomeIcon/>
            </i>
            <i>
                <SettingsIcon/>
            </i>
            <div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Loader