import React from 'react';
import "./Manifests.css";
import Snapshots from '../Snapshots';

class Manifest extends React.Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    render(){
       
       const {manifestId, snapshots} = this.props;

        return (
            <div>
                <h3>{manifestId}</h3>
                <hr />
                <Snapshots data={snapshots} />
              </div>
        );
    };
}


export default Manifest;