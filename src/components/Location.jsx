import React from 'react';

class Location extends React.Component {
    constructor() {
        super();
        this.onChangeLocation = this.onChangeLocation.bind(this);
    }

    onChangeLocation(e) {
        this.props.state.getBikes(e.target.value);
    }

    render () {
        let locations = this.props.state.locations;
        let optionItems = locations.map((location) =>
            <option key={location.id} value={location.id}>
                {location.hub_location}
            </option>
        );

        return (
         <div>
             Locations:&nbsp; 
             <select onChange={this.onChangeLocation}>
                <option value='-1'>
                    Select
                </option>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Location;