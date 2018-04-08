/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import Lottie from 'react-lottie';
import RaisedButton from 'material-ui/RaisedButton';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
import * as Animi1 from '../../assets/animations/animi1.json'
/* Project Import will be here */

/* Styles Import will be here */
import './lottiAnimation.css';
/* Styles Import will be here */

class LottiAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: Animi1,
            // rendererSettings: {
            //     preserveAspectRatio: xMidYMid slice
            // }
        };
        return (
            <Fragment>
                <NavBar />
                <h3 className="text-center"> After effect Animation Converted into JSON file and used using Airbnb Lotti package</h3>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused} />
                <div className="text-center">
                    <RaisedButton label="Play" primary={true} className="m12" onClick={() => this.setState({ isStopped: false })} />
                    <RaisedButton label="Pause" secondary={true} className="m12" onClick={() => this.setState({ isPaused: !this.state.isPaused })} />
                    <RaisedButton label="Stop" className="m12" onClick={() => this.setState({ isStopped: true })} />
                </div>
            </Fragment>
        );
    }
}

export default LottiAnimation;