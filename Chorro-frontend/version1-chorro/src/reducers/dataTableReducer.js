import {NEW_ROW,UPDATE_ROW,DEL_ROW} from '../actions/types';
import Button from '@material-ui/core/Button';
import React from 'react';
// import HelpIcon from '@material-ui/icons/Help';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import CancelIcon from '@material-ui/icons/Cancel';

const functionButton = (boolean) => {

if(boolean !== null) {
  return boolean ?  
  <div>        
  <Button color="primary" variant="contained" size="small">Aprove</Button>
  <Button color="secondary" variant="contained" size="small">Reject</Button>
  </div>
   :  
   <Button color="secondary" variant="contained" size="small">Reject</Button>
  } else return;
}

const addIcon = (boolean) => {
  
  // if(boolean !==null) {
  //   return boolean ?  <div> <p>Approve/Reject</p> <CheckCircleIcon /> <CancelIcon />  </div>
  //   : <div> <p>Done</p> <CheckCircleIcon /></div>
  // } else return  <div> <p>Pending</p> <HelpIcon />  </div>    

  if(boolean !==null) {
    return boolean ? "PENDING" : "YES"
  } return "NO"
}

const INIT_STATE = {
    columns: [
        { title: 'Child Name', field: 'name',},
        { title: 'Chore', field: 'chore',},
        { title: 'Date', field: 'date', },
        { title: 'Points for finished chore', field: 'chorePoints', type:'numeric',
         cellStyle: {paddingRight: "10%",},
        },
        {title: 'Multiple chore', field: 'multibleOrNot', lookup: {1:'YES', 2:'NO'} },
        {title: 'Aprove/Reject', field: 'finish', editable: 'never' },
        {title: 'Finished', field: 'finishOrNot', editable: 'never' },


      ],
      data: [
        { name: 'Sander', chore: 'Walk the dog', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(true), finishOrNot: addIcon(true), multibleOrNot: "2" },
        { name: 'Pedja', chore: 'clean dish', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(false), finishOrNot: addIcon(false), multibleOrNot: "2", },
        { name: 'Vukasin', chore: 'programing', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(null), finishOrNot: addIcon(null), multibleOrNot: "2"  },
         { name: 'Slobica', chore: 'get lost in forest', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(true), finishOrNot: addIcon(true), multibleOrNot: "2"  },
         { name: 'Marija', chore: 'be beautiful', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(null), finishOrNot: addIcon(false), multibleOrNot: "2",  },
         { name: 'Nemanja', chore: 'read a book', date:'12.02.2008', chorePoints: 15,
         finish: functionButton(null), finishOrNot: addIcon(null), multibleOrNot: "2"  },
      ],
      
}


export default (state = INIT_STATE, action) => {
    switch(action.type){
      case NEW_ROW:
      return {...state, data:action.payload};

      case UPDATE_ROW:
        return {...state, data:action.payload};

        // we are not using _.omit here because the payload that we are sending is already
        // state/store without the one we wanted to delete,we are deleting it in MaterialTable
        //Component
      case DEL_ROW:
        return {...state, data:action.payload};

        default: return state;
    }
}
