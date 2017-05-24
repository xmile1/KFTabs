import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types'
import "./Action.css";

class Action extends Component {
    static propTypes={
        className: PropTypes.string,
        styles: PropTypes.object
    }

    static defaultProps ={
        text: 'missing text'
    }

    constructor(props){
        super(props);
        this.state = {hover: false};
    }

    handleHover(e){
        this.setState({hover: true})
    }

    render() {
        const {id, name, clickHandler, hoverHandler, className, styles, text} = this.props;

        const classes = ClassNames({
            [`${className}`]: className,
            'hover-action': this.state.hover,
            'foo':true

        })
        return (
            <div className={classes}>
                {text}
            </div>
        );
    }
}

export default Action;