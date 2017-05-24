import React from 'react';
import './Snapshot.css';
//import Actions from '../Action';


class Snapshot extends React.Component {
  
    render(){
       const snapshot = this.props;

        return (
            <div>
                <li>{snapshot.tag}</li>
                <li>{snapshot.label}</li>
                <li>{snapshot.date}</li>
                <li>{snapshot.creator}</li>
                <hr />
            </div>
        );
    };
}
export default Snapshot;