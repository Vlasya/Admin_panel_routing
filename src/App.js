import './App.css';
import {Header} from "./modues/common/components/Header";
import Container from "@material-ui/core/Container";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import {Navigation} from "./modues/common/components/Navigation";
import {Dashboard} from "./modues/dashboard/components/Dashboard";
import {Albums} from "./modues/albums/components/Albums";
import {Users} from "./modues/users/components/Users";


function App() {
    return (
        <Router>
            <Header/>
            <Container maxWidth='xl'>
                <Navigation/>
                <Switch>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/albums' component={Albums}/>
                    <Route path='/' exact>
                        <Redirect to='/dashboard'/>
                    </Route>
                </Switch>
            </Container>
        </Router>


    );
}

export default App;
