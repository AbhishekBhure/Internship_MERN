import React from 'react'
import logo1 from "../../images/apple.png"
import logo2 from "../../images/google.png"
import logo3 from "../../images/microsoft.png"
import logo4 from "../../images/spotify.png"
import logo5 from "../../images/amazon.png"


const Content = () => {
    return (
        <div className='main'>
            <div className='content' >
                <h1>Learn to code- for free</h1><br />
                <h1>Build Projects</h1><br />
                <h1>Earn Certifications</h1><br />
                <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten <br />
                    jobs at tech companies including.</p>


                <div className='logos'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
                <div className='button'>
                    <button class="btn-d" type="submit">Get started (it's free)</button>
                </div>

            </div>
        </div>
    )
}

export default Content