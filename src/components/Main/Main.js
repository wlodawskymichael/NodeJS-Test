import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
          <div>
            <div className="disclaimer">
              <p style={{
                fontSize: 36,
                fontWeight: "bold"
              }}>Feeling Sick?</p>
              <p style={{
                fontWeight: "bold"
              }}>
                Take one of our quizzes!!
              </p>
              <br />
              <br />
              <br />
              <br />
              <p>
                The following code has been developed by students and/or 
                researchers of the Freshman Research Initiative DIY Diagnostics Stream at The 
                University of Texas at Austin.  This code is shared for demonstration purposes 
                and should not be considered a product -- it is for entertainment purposes only. 
                Any user of this code 			does so at their own risk. Members of the DIY Stream, 
                FRI, and The University of Texas system are not liable for anything related to this code.
              </p>
              <p>THIS CODE SHOULD NOT BE USED TO DIAGNOSE ANY KIND OF MEDICAL CONDITION.</p>
            </div> 
          </div>
        );
    }
}

export default Main;