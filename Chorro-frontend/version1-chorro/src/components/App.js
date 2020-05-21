import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginRegister from './LoginRegister/LoginRegister';
import AddChild from './LoginRegister/AddChild';
import ParentTable from './parentTableFolder/ParentTable';
import ModalMultipleChore from './parentTableFolder/ModalMultipleChore';

import history from '../history';
import Spinner from './Spinner';

const App = () => {
    return(
        <div>
            <Router history={history}>
            
                <div>
                    <Switch>
                        <Route path="/" exact component={LoginRegister} />
                        <Route path="/addChild" exact component={AddChild} /> 
                        <Route path="/spinner" exact component={Spinner} /> 
                        <Route path="/parentTable" exact component={ParentTable} />
                        <Route path="/parentTable/multipleChore" exact component={ModalMultipleChore} />    
                    </Switch>    
                </div> 

            </Router>
        
            
            </div>
    )
}

export default App