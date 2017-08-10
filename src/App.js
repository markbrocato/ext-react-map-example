import React, { Component } from 'react';
import { Container } from '@extjs/ext-react';
import { Google_Map } from '@extjs/ext-react-google';

export default class App extends Component {

    render() {
        return (
            <Google_Map
                fullscreen
                mapOptions={{
                    center: {
                        latitude: 38.96,
                        longitude: -95.26
                    }
                }}
            />
        )
    }

}