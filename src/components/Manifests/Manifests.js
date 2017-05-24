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

        let {data, searchTerm} = this.props;
        console.log(searchTerm)

        data = searchTerm ? data.filter((manifest)=>{   
                    console.log(manifest.manifestId)
            return manifest.manifestId.indexOf(searchTerm) > -1
        }) : data;

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