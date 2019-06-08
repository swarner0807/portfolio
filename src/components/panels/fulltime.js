import React from 'react'

class Fulltime extends React.Component{
    render() {
        let years = new Date().getFullYear() - 2015;
        return (
            <div className={"content"}>
                <h2>Leidos - January 12, 2015 - Present</h2>
                <div>
                    For the past {years} years I have been a web developer for Leidos in Bellevue Nebraska. Starting as
                    a Juinor Developer, over the years I have worked my way up to become a Staff Software Engineer. During
                    that time I have commited countless lines of Javascript and learned a lot about working on an Agile team
                    to deliver an exceptional product.
                </div>
            </div>
        );

    }
}

export default Fulltime