import React from 'react';
import './LoginRegister.css'
import {connect} from 'react-redux';
import {switchLogin,switchRegister} from '../../actions';

class LoginRegister extends React.Component {
    

    logIn = () => {
        this.props.switchLogin();
        
    }
    
    register = () => {
        this.props.switchRegister();
    }
    
    render(){

        return(
            <div>
                <div className="hero">
                    <div className="form-box">
                         <div className="button-box">
                             <div id="btn" style={{left: this.props.position_btn ? '110px': '15px'}}></div>
                             <button type="button" className="toggle-btn" onClick={this.logIn} tabIndex="1">Log  In</button>
                             <button type="button" className="toggle-btn" onClick={this.register} tabIndex="2" >Register</button>
                         </div>

                         <form id="login" className="input-group" style={{left: this.props.position_login ? '-400px' : '30px'}}>
                             <input type="text" className="input-field" placeholder="email" tabIndex={this.props.tabLogInput1} required />
                             <input type="text" className="input-field" placeholder="password" tabIndex={this.props.tabLogInput2} required/>
                             <button type='submit' className="submit-btn" tabIndex={this.props.tabLogBtn}>Login in</button>   
                         </form>

                         <form id="register" className="input-group" style={{left: this.props.position_register ? '30px' : '450px'}}>
                             <input type="text" className="input-field" placeholder="email" tabIndex={this.props.tabRegInput1} required/>
                             <input type="text" className="input-field" placeholder="password" tabIndex={this.props.tabRegInput2} required/>
                             <button type='submit' className="submit-btn" tabIndex={this.props.tabRegBtn}>Register</button>   
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
        position_btn: state.auth.position_btn,
        tabLogInput1: state.auth.tabLogInput1,
        tabLogInput2: state.auth.tabLogInput2,
        tabLogBtn: state.auth.tabLogBtn,
        tabRegInput1:  state.auth.tabRegInput1,
        tabRegInput2: state.auth.tabRegInput2,
        tabRegBtn: state.auth.tabRegBtn,    
     }
}

export default connect(mapStateToProps,{switchLogin,switchRegister})(LoginRegister);