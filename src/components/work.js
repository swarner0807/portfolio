import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { toggleAccordion } from "../actions"
import connect from "react-redux/es/connect/connect"
import Fulltime from './panels/fulltime'

class Accordion extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const component = this;
        return (
            <div className={'accordion-bar'} onClick={function () {
                component.props.dispatch(toggleAccordion(component.props.tab));
            }}>
                <span>{this.props.title}</span>
                {this.props.toggle[this.props.tab] ? (<FontAwesomeIcon icon={faCaretDown} />) : (<FontAwesomeIcon icon={faCaretRight} />) }
            </div>
        );

    }
}

class Panel extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let classList = ['panel'];
        if (this.props.active) {
            classList.push('active');
        }
        return (
            <div className={classList.join(' ')}>
                {this.props.content}
            </div>
        );

    }
}

const mapStateToProps = function(state){
    return {
        toggleAccordion: state.toggleAccordion
    }
};

class Work extends React.Component{

    render() {
        return (
            <div className={'accordion'}>
                <Accordion title={'Full Time'} tab={'full'} toggle={this.props.toggleAccordion} dispatch={this.props.dispatch}/>
                <Panel content={<Fulltime/>} active={this.props.toggleAccordion.full}/>
                <Accordion title={'Open Source'} tab={'open'} toggle={this.props.toggleAccordion} dispatch={this.props.dispatch}/>
                <Panel content={'LOOK AT ME CONTENT'} active={this.props.toggleAccordion.open} />
                <Accordion title={'Freelance'} tab={'free'} toggle={this.props.toggleAccordion} dispatch={this.props.dispatch}/>
                <Panel content={'LOOK AT ME CONTENT'} active={this.props.toggleAccordion.free}/>
            </div>
        );

    }
}

export default connect(mapStateToProps)(Work)