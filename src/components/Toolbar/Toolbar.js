import React from 'react';
import './Toolbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "../Main/Main";
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';
import Page6 from '../Page6/Page6';


const toolbar = props => (
    <Router>
        <header className="toolbar">
            <nav>
                    <div id="elements">
                        <ul style={{
                            fontWeight: "bold"
                        }}>
                            <li> <Link to="/"> Home </Link></li>
                            <li><Link to="/page1"> Test 1</Link></li>
                            <li><Link to="/page2"> Test 2</Link></li>
                            <li><Link to="/page3"> Test 3</Link></li>
                            <li><Link to="/page4"> Test 4</Link></li>
                            <li><Link to="/page5"> Test 5</Link></li>
                            <li><Link to="/page6"> Test 6</Link></li>
                        </ul>

                        <Route exact path="/" component={Main} />
                        <Route exact path="/page1" component={Page1}/>
                        <Route exact path="/page2" component={Page2}/>
                        <Route exact path="/page3" component={Page3}/>
                        <Route exact path="/page4" component={Page4}/>
                        <Route exact path="/page5" component={Page5}/>
                        <Route exact path="/page6" component={Page6}/>
                    </div>
            </nav>
        </header>
    </Router>
);

export default toolbar;