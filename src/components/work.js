import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { toggleAccordion } from "../actions"
import connect from "react-redux/es/connect/connect"
import Fulltime from './panels/fulltime'
import OpenSource from './panels/opensource'

class Accordion extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const component = this;
        const classList = ['accordion-bar'];
        if (!this.props.toggle[this.props.tab]) {
            classList.push('shadow');
        }
        return (
            <div className={classList.join(' ')} onClick={function () {
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
            <div className={'work'}>
                <h2>
                    I have worked on many projects using a variety of different technologies:
                </h2>
                <div className={'accordion'}>
                    <Accordion title={'Full Time'} tab={'full'} toggle={this.props.toggleAccordion} dispatch={this.props.dispatch}/>
                    <Panel content={<Fulltime/>} active={this.props.toggleAccordion.full}/>
                    <Accordion title={'Open Source'} tab={'open'} toggle={this.props.toggleAccordion} dispatch={this.props.dispatch}/>
                    <Panel content={<OpenSource/>} active={this.props.toggleAccordion.open} />
                </div>
            </div>
        );

    }
}

export default connect(mapStateToProps)(Work)