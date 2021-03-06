import React, { Component } from 'react';
import './assets/css/selectDevice.css';
import IotAPI from "../../api";
import Load, { Loading } from "../Load/index";
export default class SelectDevice extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null
        }
    }

    selectDevice = (id,name) => {
        this.setState({
            id: id,
            name: name
        })
    }

    render() {
        if(this.state.id === null) {

            return(
                <Load promise={new IotAPI(this.props.token).getDevices()}>
                {({loading, result}) => {
                    if(loading){
                        return(<Loading />)
                    } else{
                        return(<div className = "select-panel">
                        <h2>SELECT DEVICE</h2>
                        <div className="device-list">
                            {result.map((device, key) => {
                                return (
                                    <div className = "device" key={key} onClick={() => this.selectDevice(device.id, device.name)}>
                                        {device.name}
                                    </div>
                                )
                                
                            }) }
                        </div>
                    </div>)
                    }
                }}
                </Load>
           
            )
            
        } else {

            return (
                React.cloneElement(React.Children.only(this.props.children), {
                    token: this.props.token,
                    id: this.state.id,
                    name: this.state.name,
                    selectDevice: this.selectDevice,
                })
            )
        }
    }
}