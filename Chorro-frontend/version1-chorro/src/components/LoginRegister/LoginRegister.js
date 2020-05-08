import React from 'react';
import './LoginRegister.css'
import {connect} from 'react-redux';
import {Field, reduxForm,reset} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

import { logIn, showCharacter, hideCharacter} from '../../actions';

class LoginRegister extends React.Component {
  
  onSubmit = (formValues) => {
    console.log("these are form values: ");
    console.log(formValues)    
    // for sending post request       
        this.props.logIn(formValues);
        this.props.dispatch(reset('form'));

    }

    showChar = () => {
      this.props.showCharacter("text");
    }
    hideChar = () => {
      this.props.hideCharacter("password");
    }
    
    showOrHideCharacter = (label) => {
      if(label !== "password"){
        return null
      } else   {
        console.log('if in state is true');
          return(
            <div>
              <img src="/visibility_off.png" className="icon-pictures" onClick={this.hideChar} alt=""/>
              <img src="/visibility.png" className="icon-pictures" onClick={this.showChar} alt=""/>
            </div>
            )
      } 
    
    }
    showOrHide = (label)  => {
      if(label !== "password" ) {
        return "text";
      } else return this.props.showHideChar;
    }

    renderTextField = ({
      label,
      input,
      meta: { touched, invalid, error },
    }) => (
      
      <div className="icon-password">
      <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      type={this.showOrHide(label)}
      autoComplete={label === "password" ? "off" : "on"}
      />
      {this.showOrHideCharacter(label)}
      </div>
    )
    
    render(){
      const {handleSubmit} = this.props
        return(
          <div>
                <div className="hero">
                    <div className="form-box">
                    <img src="flag_pictures/Grb.png" alt="UK flag" className="icon-pictures"/>
                    <img src="flag_pictures/Nld.png" alt="NLD flag" className="icon-pictures"/>
                    <img src="flag_pictures/Srb.png" alt="SRB flag" className="icon-pictures"/>
                         <form id="register" className="input-group"  
                          onSubmit={handleSubmit(this.onSubmit)}   
                          >
                             <Field name="email" component={this.renderTextField} label="email"/>
                             <Field name="password" component={this.renderTextField} label="password"/>
                             <br/>
                             <br/>
                             <div id="button">
                             <Button size='medium' variant='contained' color='primary' ><Link to={'/addChild'} className="linkButton">Register</Link> </Button>
                             <Button type='submit' size='medium' variant='contained' color='primary' >Login</Button>
                             </div>
                         </form>
                    </div>
                </div>
            </div>
        )
    }
}
  const validate = values => {
        const errors = {}
        const requiredFields = [
          'email',
          'password'
        ]
        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'Required'
          }
        })
        if (
          values.email &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }

  const mapStateToProps = ({auth}) => {
    return {
      showHideChar: auth.showHideChar
    }
  }

  const formWrapped = reduxForm({
    form: 'form',
    validate,
  })(LoginRegister)

export default connect(mapStateToProps,{logIn,showCharacter, hideCharacter})(formWrapped);



