import React from 'react';

class Bike extends React.Component {
    constructor() {
        super();
        this.onChangeBike = this.onChangeBike.bind(this);
    }

    onChangeBike(e) {
        this.props.state.bike_id = e.target.value; 
    }

    render () {
        let bikes = this.props.state.bikes;
        let optionItems = bikes.map((bike) =>
            <option key={bike.id} value={bike.id}>
                {bike.name}
            </option>
        );

        return (
            <div>
                <div>
                    Bikes:&nbsp; 
                    <select onChange={this.onChangeBike}>
                    <option value='-1'>
                        Select
                    </option>
                        {optionItems}
                    </select>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Bike;