import React from 'react';
import './LoginRegister.css'
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import { logIn, showCharacter, hideCharacter} from '../../actions';

class LoginRegister extends React.Component {
  
  // for sending post request       
    onSubmit = (formValues) => {
        console.log("these are form values: ");
        console.log(formValues)    
        this.props.logIn(formValues);
    }

    // changeIcon = () => {
    //   console.log(this.props.icon)
    //   const lala =  this.props.icon === "visibility" ?  "visibility_off" : "visibility";
    //   // console.log(lala);
    //   this.props.showHideIcon(lala)
    //   // this.showOrHideIcon("password");
    // }

    // showOrHideIcon = (label) => {
    //   if(label === "password") {
    //     console.log(this.props.icon)
    //     return this.props.icon
    //   }
    // }
    showChar = () => {
      console.log('show char funkcija');
      this.props.showCharacter("text");
    }
    hideChar = () => {
      console.log('hide char funkcija');
      this.props.hideCharacter("password");
    }
    
    showOrHideCharacter = (label) => {
      if(label !== "password"){
        return null
      } else   {
        console.log('if in state is true');
          return(
            <div>
              <i className="material-icons visibility" onClick={this.showChar}>visibility</i>
              <i className="material-icons visibility" onClick={this.hideChar}>visibility_off</i>
            </div>
            )
      } 
      // else {
      //   console.log('if in state is false');
      //   return <i className="material-icons visibility" onClick={this.showChar}>visibility_off</i>
      // }
    
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
      />
      {/* <i className="material-icons visibility" onClick={this.changeIcon}>visibility</i>  */}
      {this.showOrHideCharacter(label)}
      
        </div>
    )
    
    render(){
      const {handleSubmit} = this.props
        return(
            <div>
                <div className="hero">
                    <div className="form-box">
                         <form id="register" className="input-group"  
                          onSubmit={handleSubmit(this.onSubmit)}   
                          >
                             <Field name="email" component={this.renderTextField} label="email"/>
                             <Field name="password" component={this.renderTextField} label="password"/>
                             <br/>
                             <br/>
                             <div id="button">
                             <Button type='submit' size='medium' variant='contained' color='primary' >Register</Button>
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
    form: 'MaterialUiForm',
    validate,
  })(LoginRegister)

export default connect(mapStateToProps,{logIn,showCharacter, hideCharacter})(formWrapped);



