import React from 'react'
import { StartUp } from '../../assets/images'

const Overview = () => {
    return (
        <section className='overview'>
            <div className='heading'>Overview</div>
            <div className='content'>
                <div className='icons-title'>
                    <div className='items'>
                        <div className='imageContainer'>
                            <img src={StartUp} alt='Startup' />
                        </div>
                        <div>Countries</div>
                        <div>+30</div>
                    </div>
                    <div className='items'>
                        <div className='imageContainer'>
                            <img src={StartUp} alt='Startup' />
                        </div>
                        <div>Domains</div>
                        <div>+70</div>
                    </div>
                    <div className='items'>
                        <div className='imageContainer'>
                            <img src={StartUp} alt='Startup' />
                        </div>
                        <div>Startups</div>
                        <div>+10</div>
                    </div>
                    <div className='items'>
                        <div className='imageContainer'>
                            <img src={StartUp} alt='Startup' />
                        </div>
                        <div>Communities</div>
                        <div>+20</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview