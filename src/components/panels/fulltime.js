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
                    to deliver an exceptional product. Through Leidos I worked on two separate projects: MPACS and LEAF
                </div>
                <h3>MPACS</h3>
                <div>
                    Helped develop a single page web app for the local Air Force base. Worked directly with the
                    customers as an Agile team locally in Nebraska using a variety of technologies to modernize their workflow.
                </div>
                <h3>LEAF</h3>
                <div>
                    Created a library of Web Components to be used by other projects. Worked to ensure that they were generic
                    and reusable, as well as appropriately documented. Developed code with engineers both local and remote.
                </div>
                <h3>Technologies Used:</h3>
                <div className={"flex-container"}>
                    <div>
                        <h4 className={"text-center"}>Languages/Libraries</h4>
                        <ul>
                            <li>Javascript/HTML/CSS</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Jquery</li>
                            <li>Web Components</li>
                            <li>Backbone/Marionette</li>
                            <li>Less</li>
                            <li>Semantic UI</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={"text-center"}>Build Tools</h4>
                        <ul>
                            <li>Webpack</li>
                            <li>NPM</li>
                            <li>Yarn</li>
                            <li>Gulp</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={"text-center"}>Software/Tools</h4>
                        <ul>
                            <li>Git</li>
                            <li>Bash</li>
                            <li>Vagrant/VirtualBox</li>
                            <li>WebStorm</li>
                        </ul>
                    </div>
                </div>
            </div>
        );

    }
}

export default Fulltime