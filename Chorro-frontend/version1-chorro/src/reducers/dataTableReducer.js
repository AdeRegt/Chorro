import {NEW_ROW,UPDATE_ROW,DEL_ROW} from '../actions/types';

const INIT_STATE = {
    columns: [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ],
      data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        {
          name: 'Zerya Betül',
          surname: 'Baran',
          birthYear: 2017,
          birthCity: 34,
        },
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
