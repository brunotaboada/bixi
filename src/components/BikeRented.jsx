import React from 'react';

class BikeRented extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.state.delete(); 
    }

    render () {
        let bikes = this.props.state.bikesRented;
        let optionItems = bikes.map((bike) =>
            <tr key={bike.id}>
                <td>{bike.name}</td>
                <td>{bike.hub_location}</td>
                <td>
                    <a href='#' onClick={this.onClick}>
                        delete
                    </a>
                </td>
            </tr>
        );
        let tHead;
        if(optionItems.length > 0){
            tHead = 
            <tr>
                <td>name</td>
                <td>location</td>
                <td>action</td>
            </tr>;
        }
        return (
            <div>
                <div>
                    Your Bikes:&nbsp; 
                    <table>
                        <thead>
                            {tHead}                      
                        </thead>
                        <tbody>
                        {optionItems}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default BikeRented;