import React from 'react';
import './LoginRegister.css'

class LoginRegister extends React.Component {
    
    logIn = () => {

    }

    register = () => {
        
    }
    
    render(){
        return(
            <div>
                <div className="hero">
                    <div className="form-box">
                         <div className="button-box">
                             <div id="btn"></div>
                             <button type="button" className="toggle-btn" onClick={this.logIn}>Log In</button>
                             <button type="button" className="toggle-btn" onClick={this.register} >Register</button>
                         </div>
                         <form id="login" className="input-group">
                             <input type="text" className="input-field" placeholder="email" required/>
                             <input type="text" className="input-field" placeholder="password" required/>
                             <button type='submit' className="submit-btn">Login in</button>   
                         </form>
                         <form id="register" className="input-group">
                             <input type="text" className="input-field" placeholder="email" required/>
                             <input type="text" className="input-field" placeholder="password" required/>
                             <button type='submit' className="submit-btn">Register</button>   
                         </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginRegister