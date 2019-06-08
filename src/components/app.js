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
        return (
            <div className={'wrapper'}>
                <NavBar />
                <Header />
                {this.props.changePage === 'MAIN' ? (
                    <Body />
                ) : this.props.changePage === 'WORK' ? (
                    <Work />
                ) : null}
                <Footer />
            </div>
        );

    }
}

export default connect(mapStateToProps)(App)
