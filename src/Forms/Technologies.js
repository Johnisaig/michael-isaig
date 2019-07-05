import React, { Component } from 'react';
import download from '../Image/download.png';



class Technologies extends Component {
    render() {
        return (
            <div>
                <img 
                    src={download} 
                    alt="download"
                />
            </div>
        );
    }
}

export default Technologies;