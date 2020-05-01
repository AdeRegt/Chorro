import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginRegister from './LoginRegister/LoginRegister';
import AddChild from './LoginRegister/AddChild';
import history from '../history';

const App = () => {
    return(
        <div>
            <Router history={history}>
            
                <div>
                    <Switch>
                        <Route path="/" exact component={LoginRegister} />
                        <Route path="/addChild" exact component={AddChild} /> 
                    </Switch>    
                </div> 

            </Router>
        
            
            </div>
    )
}

export default App