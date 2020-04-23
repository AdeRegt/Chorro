import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginRegister from './LoginRegister/LoginRegister';

const App = () => {
    return(
        <div>
            <BrowserRouter>
            
                <div>
                    <Switch>
                        <Route path="/" exact component={LoginRegister} /> 
                    </Switch>    
                </div> 

            </BrowserRouter>
        
            
            </div>
    )
}

export default App