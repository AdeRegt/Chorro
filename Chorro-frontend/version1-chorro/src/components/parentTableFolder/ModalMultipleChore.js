import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import {Field, reduxForm,reset} from 'redux-form';
import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
// import moment from 'moment';
import Moment from 'react-moment';

class ModalMultipleChore extends React.Component {

    onSubmit = () => {

    }

    choseDateFunc = (type) => {
        if(type !== "date"){
            return type
        } else {
            const lalal = <Moment format='MMMM Do YYYY, h:mm:ss a'>{type}</Moment>;
            return lalal;
        }
    }

    checkBoxFun = (arg)  => {
        return (
            <FormControlLabel
            control={
            <Checkbox name="checkedA" color="primary" />}
            label={arg}
            />
        )
    }

    renderTextField = ({label, type="text"}) => {

            return (
                <TextField
                id="outlined-basic"
                label={label}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                style={{display:"block", marginTop:"5px", marginLeft:"5px", marginBottom:"5px"}}
                // type={this.choseDateFunc(type)}
                type={type}

                />
                )
        }


    render(){
        const {handleSubmit} = this.props
        return ReactDom.createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                <Link to={'/parentTable'} style={{color:"red", fontSize:"20px"}}> back to table</Link>
                <br/>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderTextField} label="Enter name of child" />
                <Field name="chore" component={this.renderTextField} label="Enter chore" />
                <Field name="points" type="number" component={this.renderTextField} label="Enter number of points" />
                <Field name="date" type="date" component={this.renderTextField}  />
                
                <Field name="weekDays" component={this.renderTextField} label="Days in week: Mon,Tue,Wed..." />

                <FormGroup row>
               {this.checkBoxFun("check for all days in a month")} 
               {this.checkBoxFun("check for all odd days in a month")} 
               {this.checkBoxFun("check for all even days in a month")} 
               {this.checkBoxFun("check for all work days in a month")} 
               {this.checkBoxFun("check for all weekend days in a month")} 
               {this.checkBoxFun("check for random days in a month")} 



                </FormGroup>
                <p>****The chores will be made for all the days in a month in which you put in "start date" field</p>
                </form>
                
                </div>
            </div>
            ,
            document.querySelector('#multipleAdding')
        )
    }  

}

const mapStateToProps = (state) => {
    console.log(state);
    return{state};
}

const FormWrapped = reduxForm({
    form: 'form',    
})(ModalMultipleChore)

export default connect(mapStateToProps)(FormWrapped);