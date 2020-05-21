import React from 'react';
import ReactDom from 'react-dom';
import TextField from '@material-ui/core/TextField';
import {Field, reduxForm,reset} from 'redux-form';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

import { addChildName, deletChildName, deleteAll ,sendChildInfo } from '../../actions';
import {validate} from './LoginRegister';
class Modal extends React.Component {
    
        // used for adding children names to the state
        keyValue = "Child"
        idCounter = 1;
        
        // without state
        childNamesArray = [];
      
    onSubmit = (formValues) => {
        // without state
        // this.childNamesArray.push(this.refs.refField.value);        
        this.keyValue += this.idCounter; 
        this.props.addChildName(formValues,this.keyValue)
       
        // to empty the input field,also you need to import reset from redux-form
        this.props.dispatch(reset('form'));
        
        this.idCounter++;
        this.keyValue = "Child"
    }
    resetForm = () => {
        this.props.dispatch(reset('form'))
    }
    deleteChild = (keyValue) => {
        this.props.deletChildName(keyValue);
    }
    deleteAll = () => {
        let keyValues = Object.keys(this.props.childName)
        this.props.deleteAll(keyValues);
        this.resetForm();
    }
    sendingChildData = () => {
        this.props.sendChildInfo(this.props.childName);
    }

    // just how the input for writting down the names of children would look like
    renderTextField = ({label,input, meta: {touched, invalid, error}}) => {
        return(
            <TextField 
            id="outlined-basic"
            label={label}
            variant="outlined"
            {...input}
            error={touched && invalid}
            helperText={touched && error}
            size="small"
            />
            )
        }
    
    showNameButton = () => {   
        if(Object.keys(this.props.childName).length){
            return(
                <div>
                    <div style={{marginTop:"20px", marginBottom:"20px"}}>{this.showName(Object.keys(this.props.childName).length-1)} </div>
                <div style={{textAlign:'center'}}>
                    <Button size='large' variant='contained' color='primary' onClick={this.sendingChildData} >No more children, Finish</Button>
                    <Button size='large' variant='contained' color='secondary' onClick={this.deleteAll} > Cancel</Button>
                </div>
                </div>
            )
        }    
    }
    showName = (number, counter = 0) => {
        let keyValues = Object.keys(this.props.childName);

            // to avoid showing id as child name
            if(number >= 0  && this.props.childName[keyValues[counter]].name ){
                return(
                <div style={{marginTop:"5px"}}>
                Child {counter+1} name :
                {/* take from state by index(counter) */}
                {/* .name is just the name of the <Field> */}
                {this.props.childName[keyValues[counter]].name}
                
                <Button style={{marginLeft: "5px"}} size='small' variant='contained'color='secondary' 
                 // send key value to deletChild method from where we call action creator 
                 onClick={() => this.deleteChild(keyValues[counter])} 
                 >Delete</Button>
                {this.showName(number-1,counter+1)}
            </div>
            )
        }
    }
    // && this.props.childName[keyValues[counter]].name

     render(){
         const {handleSubmit} = this.props;
        return ReactDom.createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active" >
                    <div className="header">Add Name(s) of your child(ren)</div>
                        <form onSubmit={handleSubmit(this.onSubmit)} style={{padding:"10px"}} >
             
                            <span style={{  fontSize:"30px"}} > Name of your child: </span>
                            <Field name="name" component={this.renderTextField}label="name" type="text" />
                            <br/>

                            <span style={{  fontSize:"30px"}} > Email of your child: </span>
                            <Field name="email" component={this.renderTextField} label="email" type="email" />
                            <br/>

                            <div style={{textAlign:"center" , marginTop:"10px"}}>
                                <Button type='submit' size='medium' variant='contained' color='primary'> Next </Button>
                                <Button variant='contained' color='secondary' onClick={this.resetForm}>
                                Clear
                                </Button>
                            </div>
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
    validate
})(Modal)

export default connect(mapStateToProps,{addChildName,deletChildName,deleteAll,sendChildInfo})(FormWrapped);

