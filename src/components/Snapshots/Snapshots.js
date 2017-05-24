import React from 'react';
import "./Snapshots.scss";
//import Actions from '../Action';
import Snapshot from './Snapshot';


class Snapshots extends React.Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    render(){
        const {data} = this.props;

        return <ul>{data ? data.map((e, i) => 
            <Snapshot 
            tag={e.tag}
            label={e.label} 
            date={e.date}
            creator={e.creator}
            />
            ) 
            : ''}</ul>
    };
}
export default Snapshots;