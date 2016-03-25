import React, { Component } from 'react';
import Timeline from '../src/timeline';
import DATA from './data';
import '../assets/index.less'

export default class Example extends Component {

    render() {
        return (
            <div>
                <Timeline {...DATA} pending={true} />

                <hr/>

                <Timeline {...DATA} />
            </div>
        );
    }
}
