import React from 'react';
import ReactDom from 'react-dom';
import TextField from '@material-ui/core/TextField';
import {Field, reduxForm,reset} from 'redux-form';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

import { addChildName, deletChildName } from '../../actions';
class Modal extends React.Component {
    
    // just how the input for writting down the names of children would look like
    renderTextField = ({label,input,}) => {
        return(
            <TextField 
            id="outlined-basic"
            label={label}
            variant="outlined"
            {...input}
            autoComplete="off"
            />
            )
        }
        // used for adding children names to the state
        keyValue = "Child"
        idCounter = 1;
        
        // without state
        childNamesArray = [];
      
    onSubmit = (formValues) => {
        // without state
        this.childNamesArray.push(this.refs.refField.value);        

        this.keyValue += this.idCounter; 
        this.props.addChildName(formValues,this.keyValue)
        // to empty the input field,also you need to import reset from redux-form
        this.props.dispatch(reset('form'));
        
        this.idCounter++;
        this.keyValue = "Child"
    }
    
    showNameButton = () => {   
        // console.log(this.props.childName)
        if(this.props.childName){
            return(
                <div>
                    <div>{this.showName(Object.keys(this.props.childName).length)} </div>
                    {/* without state <div>{this.showName(this.props.childName.length)} </div> */}
                    <Button size='large' variant='contained' color='primary'>I don't have any more children, Submit</Button>
                </div>
            )
        }    
    }
    
    showName = (number, counter = 0) => {

        if(number){
            // console.log(this.props.childName.Child1.nameField);
            // console.log(Object.keys(this.props.childName)[counter])
            return(
                <div>
                Child {counter+1} name :
                {/* without state {this.childNamesArray[counter]} */}
                {/* take from state by index(counter) */}
                {this.props.childName[Object.keys(this.props.childName)[counter]].nameField}
                
                <Button size='medium' variant='contained'
                 color='secondary' 
                 // send key value to deletChild method from where we call action creator 
                 onClick={() => this.deleteChild(Object.keys(this.props.childName)[counter])} 
                 >Delete</Button>

                {this.showName(number-1,counter+1)}
            </div>
            )
        }
    }

    deleteChild = (keyValue) => {
        this.props.deletChildName(keyValue);
    }


     
     render(){
         const {handleSubmit} = this.props;
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
    return {childName: state.listOfNames}
}

const FormWrapped = reduxForm({
    form: 'form',
})(Modal)


export default connect(mapStateToProps,{addChildName,deletChildName})(FormWrapped);

