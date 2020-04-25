import React from 'react';
import './LoginRegister.css'
import {connect} from 'react-redux';
import {switchLogin,switchRegister} from '../../actions';

class LoginRegister extends React.Component {
    

    logIn = () => {
        this.props.switchLogin();
        
    }
    
    register = () => {
        console.log('alalalala');
        
        this.props.switchRegister();
    }
    
    render(){

        return(
            <div>
                <div className="hero">
                    <div className="form-box">
                         <div className="button-box">
                             <div id="btn" style={{left: this.props.position_btn ? '110px': '15px'}}></div>
                             <button type="button" className="toggle-btn" onClick={this.logIn}>Log  In</button>
                             <button type="button" className="toggle-btn" onClick={this.register} >Register</button>
                         </div>

                         <form id="login" className="input-group" style={{left: this.props.position_login ? '-400px' : '50px'}}>
                             <input type="text" className="input-field" placeholder="email" required/>
                             <input type="text" className="input-field" placeholder="password" required/>
                             <button type='submit' className="submit-btn">Login in</button>   
                         </form>

                         <form id="register" className="input-group" style={{left: this.props.position_register ? '50px' : '450px'}}>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        position_login: state.auth.position_login,
        position_register: state.auth.position_register,
        position_btn: state.auth.position_btn
     }
}

export default connect(mapStateToProps,{switchLogin,switchRegister})(LoginRegister);