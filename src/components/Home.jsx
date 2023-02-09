import React from 'react';
import { withRouter } from '../common/with-router';

class Home extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
         <div>
             Welcome to Bixi!
         </div>
        )
    }
}

export default withRouter(Home);