import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from "../App";
import FileZoneUpLoad from "../components/body/upload/FileZoneUpLoad";

const routing = (
    <Router>

        <Route exact path="/" component={App}/>
        <Route path="/file" render={() => <FileZoneUpLoad/>}/>
        <Route path="/cert"  component={App}/>
    </Router>
);
export default routing;