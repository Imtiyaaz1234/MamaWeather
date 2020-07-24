import React, { Component } from 'react'
import CountUp from 'react-countup';

class CeltoFahr extends Component {
    state = {
        celOn: true
    }

    switchCel = () => {

      };

    render() {
        return (
            <React.Fragment>
                {/* Code for celcius to farenheit */}
            <div className="weather" style={{margin: '-7em 0em 0em 11em'}}>
                <div className="figures" >
                    <div className="figuresWrap2">
                            <div style={{margin: '5em 0 0em 6em'}}
                                onClick={this.switchCel} className="CelSwitchWrap">
                                <div className={"CelSwitch" + (this.state.celOn ? "" : " transition")}>
                                    <h3>°C</h3>
                                    <h3>°F</h3>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
          
            </React.Fragment>
        )
    }
}

export default CeltoFahr;
