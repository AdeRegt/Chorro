import React from 'react';
import { Link } from 'react-router-dom'

class ModalMultipleChore extends React.Component {
    render(){
        return(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                <Link to={'/parentTable'}> back to table</Link>
                
                
                <p>pa pa parnoja , pa pa lepa moja</p>

                </div>
                
            </div>
        )
    }


}

export default ModalMultipleChore;