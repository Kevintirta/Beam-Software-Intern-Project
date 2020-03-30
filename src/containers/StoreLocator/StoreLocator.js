import React, { Component } from 'react';
import InputBar from '../../components/InputBar/InputBar'
import Mapbox from '../Mapbox/Mapbox'
import './StoreLocator.css'

class StoreLocator extends Component {
    constructor(props){
        super(props)
        this.quantityInput = React.createRef();
        this.distanceInput = React.createRef();
        this.latitudeInput = React.createRef();
        this.longitudeInput = React.createRef();
    }
    submitHandler = () =>{
        let quantity = this.quantityInput.current.value;
        let distance = this.distanceInput.current.value;
        let latitude = this.latitudeInput.current.value;
        let longitude = this.longitudeInput.current.value;
        
    }

    resetHandler = () =>{
        console.log("resetHandler")
    }


    render() {
        return (
            <div className="storeLocator">
                <div className="inputBarGroup split">
                    <InputBar ref={this.quantityInput} text="Number of Scooter" placeholder="quantity" />
                    <InputBar ref={this.distanceInput} text="Distance" placeholder="in meters" />
                    <InputBar ref={this.latitudeInput} text="Latitude" placeholder="in degrees" />
                    <InputBar ref={this.longitudeInput} text="Longitude" placeholder="in degrees" />
                    <div>
                        <button className="button" onClick={this.submitHandler}>Submit</button>
                        <button className="button" onClick={this.resetHandler}>Reset</button>
                    </div>
                </div>
                <div className="map split">
                    <Mapbox />
                </div>
            </div>
        )
    }
}

export default StoreLocator;