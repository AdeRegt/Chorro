import React from 'react';
import ReactDom from 'react-dom';
import TextField from '@material-ui/core/TextField';
import {Field, reduxForm,reset} from 'redux-form';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

import { addChildName } from '../../actions';
class Modal extends React.Component {
    array = [];

    renderTextField = ({label,input,}) => {
    return(
        <TextField 
        id="outlined-basic"
        label={label}
         variant="outlined"
         {...input}
         
         />
        )
    }
      

    onSubmit = (formValues) => {
        
        this.array.push(this.refs.refField.value);
        
        console.log(this.array)
        this.props.addChildName(formValues)
        this.props.dispatch(reset('form'));
        
    }
    
    showNameButton = () => {   
        if(this.props.childName){
            
            return(
                <div>
                    <div>{this.showName()} </div>
                    <Button size='large' variant='contained' color='primary'>I don't have any more children, Submit</Button>
                </div>
            )
        }    
    }
    
    
    showName = () => {
        return(
            <div>
                Child 1 name :
                {this.props.childName.nameField}
                <Button size='medium' variant='contained' color='secondary'>Delete</Button>
            </div>
        )
        // for(let prop in this.props.childName){
        // }
    }

    render(){
      const {handleSubmit} = this.props;
      const childNumber = 0;
        return ReactDom.createPortal(
            
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                    <div className="header">Add Name(s) of your child(ren)</div>
                   
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                    <span>Enter the name of your child  and press enter:</span>
                    <Field name="nameField" component={this.renderTextField}
                     label="Childs Name" ref='refField'
        
                     />
                     {this.showNameButton()}
                     
                    </form>
                </div>
            </div>
            ,
        document.querySelector('#modal')
        )   
    }
}

const mapStateToProps = (state) => {
    return {childName: state.listOfNames.childName}
}

const FormWrapped = reduxForm({
    form: 'form',
})(Modal)


export default connect(mapStateToProps,{addChildName,})(FormWrapped);

