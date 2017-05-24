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
        // searchTerm was passed as a props from the App component
        let {data, searchTerm} = this.props;

        // here i am using javascript filter prototype method
        // to filter the data based on your search term
        data = searchTerm ? data.filter((manifest)=>{
            //indexOf is a method that can be used on a string to check if a value is a substring in it
            // there are other ways to do this chekcout substring and substr
            return manifest.manifestId.indexOf(searchTerm) > -1 || 
            manifest.snapshot[0].tag.indexOf(searchTerm) > -1 ||
            manifest.snapshot[0].lable.indexOf(searchTerm)
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