import React from 'react';
import './LoginRegister.css'

class LoginRegister extends React.Component {
    render(){
        return(
            <div>
                <div className="hero">
                    <div className="form-box">
                         <div className="button-box">
                             <div id="btn"></div>
                             <button type="button" className="toggle-btn">Log In</button>
                             <button type="button" className="toggle-btn">Register</button>
                         </div>
                    </div>
                    <div className="social-icons">
                        <img src="fb.png" alt=""/>
                        <img src="tw.png" alt=""/>
                        <img src="gp.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegister