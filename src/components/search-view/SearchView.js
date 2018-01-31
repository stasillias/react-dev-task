import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const inputStyle = {
    "width": "60%",
    "margin": "0 20px"
};

export class SearchView extends Component {
    render() {
        return (
            <div>
                <TextField floatingLabelText="Please enter github user name"
                           style={ inputStyle }/>
                <RaisedButton label="Search"/>
            </div>
        );
    }
}