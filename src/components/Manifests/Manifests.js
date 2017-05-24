import React from 'react';
import "./Manifests.css";
import Manifest from './Manifest';
import { Accordion, AccordionItem } from 'react-sanfona';

class Manifests extends React.Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    render(){

        const {data} = this.props;

        const manifestsAccordian = (
        <Accordion>
            {data.map((e, i) => (
                <AccordionItem key={i} title={e.manifestId}>
                    <div>
                        <Manifest /*manifestId={e.manifestId}*/ key={i} snapshots={e.snapshots}/>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
        );

        return (
          <div>
            {manifestsAccordian}
          </div>);
    };
}


export default Manifests;