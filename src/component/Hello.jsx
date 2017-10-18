import React, {Component} from "react";

export default class Hello extends Component {
    constructor() {
        super();
        this.state = {
          message: '这是一个react-cli,帮助你快速开发react-app'
        };

    }

    render() {
        return (
            <div>
               <h1>{this.state.message}</h1>
            </div>
        );
    }
}

