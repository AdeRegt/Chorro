import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginRegister from './LoginRegister/LoginRegister';
import AddChild from './LoginRegister/AddChild';
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

                    </Switch>    
                </div> 

            </Router>
        
            
            </div>
    )
}

export default App