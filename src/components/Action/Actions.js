import React from 'react';
import ClassNames from 'classnames';
import "./Actions.css";
import Action from "./Action";

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state= {};
        this.handleClick =  this.handleClick.bind(this);
    }

    handleClick(e){
        // show / hide goes here... 
    }

    render(){
        const {id, name, className, styles} = this.props;

        const classes = ClassNames({
            [`${className}`]: className,
            'hover-action': this.state.hover,
            'foo':true

        })
        const actions = [];

        actions.push(<Action className={''} style={{backgroundColor: 'gray'}} id={''} text={'something here'}/>)

        return (
            <div className={classes} style={styles} onClick={this.handleClick}>
               
            </div>
        );

    }
}

export default Actions;