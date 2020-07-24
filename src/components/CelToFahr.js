import React, { Component } from 'react'
import CountUp from 'react-countup';
import './CelToFahr.css';

class CeltoFahr extends Component {
    state = {
        celOn: true
    }

    switchCel = () => {
        this.setState({ celOn: !this.state.celOn });

       //Here below in console.log I get the 'M' and 'I' both units
       //but, I want to set the state of 'M' when celOn is true
       // and 'I' when its false
        console.log('STATE', this.props.unit)
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
                {/*End of Code for celcius to farenheit */}
            </React.Fragment>
        )
    }
}

export default CeltoFahr;
