import React from 'react'
import NavBar from './navbar'
import Header from './header'
import Body from './body'
import Work from './work'
import Footer from './footer'
import connect from "react-redux/es/connect/connect";

const mapStateToProps = function(state){
    return {
        changePage: state.changePage
    }
};

class App extends React.Component{

    render() {
        const mainPage = this.props.changePage === 'MAIN';
        return (
            <div className={'wrapper'}>
                <NavBar />
                <Header isMainPage={mainPage}/>
                <div id={'content'} className={'content'}>
                    {this.props.changePage === 'MAIN' ? (
                        <Body />
                    ) : this.props.changePage === 'WORK' ? (
                        <Work />
                    ) : null}
                </div>
                <Footer />
            </div>
        );

    }
}

export default connect(mapStateToProps)(App)
