import {NEW_ROW,UPDATE_ROW,DEL_ROW} from '../actions/types';


const INIT_STATE = {
    columns: [
        { title: 'Child Name', field: 'name' },
        { title: 'Chore', field: 'chore' },
        { title: 'Date', field: 'date' },
        
        { title: 'Points for finished chore', field: 'chorePoints', type:'numeric',
         cellStyle: {
          paddingRight: "12%",
        },
      },
        
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 38: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ],
      data: [
        { name: 'Sander', chore: 'Walk the dog', date:'12.02.2008',
         birthCity: 63,chorePoints: 15, },
        { name: 'Pedja', chore: 'clean dish', date:'12.02.2008',
         birthCity: 38,chorePoints: 15, },
        { name: 'Vukasin', chore: 'be cool', date:'12.02.2008',
         birthCity: 63,chorePoints: 15,  },
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
