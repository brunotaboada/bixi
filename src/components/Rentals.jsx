import React, { Component } from 'react';
import Location from './Location.jsx';
import Bike from './Bike.jsx';
import BikeRented from './BikeRented';
import { withRouter } from '../common/with-router';

class Rentals extends Component {
    constructor() {
        super();
        this.rentABike = this.rentABike.bind(this);
        this.getLocations = this.getLocations.bind(this);
        this.getBikes = this.getBikes.bind(this);
        this.getBikesRented = this.getBikesRented.bind(this);
        this.hideMessage = this.hideMessage.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            user_id: null,
            location_id: null,
            bike_id: null,
            message: '',
            locations: [],
            bikes: [],
            bikesRented: [],
            getBikes: this.getBikes,
            delete: this.delete
        };
    }

    componentDidMount() {
        this.getLocations();
        this.setState({
            user_id: this.props.user_id
        });
        this.getBikesRented(this.props.user_id);
    }

    getLocations() {
        let initialLocations = [];
        fetch('http://localhost:8080/api/locations').then(response => {
            return response.json();
        })
        .then(data => {
            initialLocations = data.map((locations) => {
                return locations
            });
            this.setState({
                locations: initialLocations,
            });
        })
        .catch((error) => {
            console.error('error in execution', error);
        });
    }

    getBikes(location_id) {
        let initialBikes = [];

        fetch(`http://localhost:8080/api/bikes?location_id=${location_id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            initialBikes = data.map((bikes) => {
                return bikes
            });
            this.setState({
                bikes: initialBikes,
                location_id: location_id
            });
        })
        .catch((error) => {
            console.error('error in execution', error);
        });
    }

    getBikesRented(user_id) {
        let initialBikesRented = [];
        fetch(`http://localhost:8080/api/rentals?user_id=${user_id}`)
        .then(response => response.json())
        .then(data => {
            initialBikesRented = data.map((bikes) => {
                return bikes
            });
            this.setState({
                bikesRented: initialBikesRented
            });
        })
        .catch((error) => {
            console.error('error in execution', error);
        });
    }

    rentABike() {
        if(!this.state.user_id){
            alert('Please, log in once more.');
            return;
        }
        if(
            this.state.location_id == '-1' 
            || this.state.location_id == -1
            || !this.state.location_id
            ){
            alert('Please, select a location.');
            return;
        }
        
        if(
            this.state.bike_id == '-1' 
            || this.state.bike_id == -1
            || !this.state.bike_id
            ){
            alert('Please, select a bike.');
            return;
        }

        let data = {
            user_id: this.props.user_id,
            location_id: this.state.location_id,
            bike_id: this.state.bike_id
        };

        fetch('http://localhost:8080/api/rentals', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.status != 500){
                this.setState({
                    message: 'Bike has been rented!'
                });
            } else{
                this.setState({
                    message: 'Bike can\'t be rented you have already rented one!'
                });
            }
            this.getBikesRented(this.props.user_id);
            setTimeout(this.hideMessage, 3000);
        })
        .catch((error) => {
            console.error('error in execution', error);
        });
        
    }

    delete(){
        fetch(`http://localhost:8080/api/rentals/${this.props.user_id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if(response.status != 500){
                this.setState({
                    message: 'Bike has been returned!'
                });
            } else{
                this.setState({
                    message: 'Bike can\'t be returned'
                });
            }
            this.getBikesRented(this.props.user_id);
            setTimeout(this.hideMessage, 3000);
        })
        .catch((error) => {
            console.error('error in execution', error);
        });
    }

    hideMessage() {
        this.setState({message: ''})
    }

    render() {

        return (
            <div>
                <div className='text-danger'>
                    {this.state.message}
                </div>
                <br/>
                <Location state={this.state}/>
                <br/>
                <Bike state={this.state}/>
                <button className="m-3 btn btn-sm btn-danger" onClick={this.rentABike}>
                    Rent
                </button>
                <br/><br/><br/>
                <BikeRented state={this.state}/>
             </div>
        );
    }
    
}

export default withRouter(Rentals);