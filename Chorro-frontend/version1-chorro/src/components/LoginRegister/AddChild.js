import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import Modal from './Modal';

class AddChild extends React.Component {
    

    
    
    render(){
        return(            
            <Modal />
        )
    }

}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(AddChild);