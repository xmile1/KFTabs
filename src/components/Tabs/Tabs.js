import React from 'react';
import SimpleTabs from 'react-simpletabs';
import Manifests from "../Manifests";
import data from './Data';
import "./Tabs.css";
//import FontAwesome from 'react-fontawesome';



class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <SimpleTabs>
            <SimpleTabs.Panel title='Source'>
                <h2>Source</h2>
                <Manifests 
                    data={data.data[0].manifests.app.manifests}
                    searchTerm={this.props.searchTerm} 
                    />
            </SimpleTabs.Panel>
            <SimpleTabs.Panel title='Dev'>
                <h2>Dev</h2>
                <Manifests data={data.data[0].manifests.app.manifests} />
            </SimpleTabs.Panel>
            <SimpleTabs.Panel title='QA'>
                <h2>QA</h2>
                <Manifests data={data.data[0].manifests.app.manifests} />
            </SimpleTabs.Panel>
            <SimpleTabs.Panel title='Prod'>
                <h2>Prod</h2>
                <Manifests data={data.data[0].manifests.app.manifests} />
            </SimpleTabs.Panel>
        </SimpleTabs>
    };
}


export default Tabs;