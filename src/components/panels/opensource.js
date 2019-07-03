import React from 'react'

class Fulltime extends React.Component{
    render() {
        return (
            <div className={"content"}>
                <h2>Final Fantasy XIV Name Search</h2>
                <div>
                    Built a single page web app for searching and filtering player names in the massively multilayer
                    online role playing game Final Fantasy XIV. Used <a href={'https://xivapi.com/'}>xivapi</a>, a RESTful API,
                    to query the game's database and display up to date results.
                </div>
                <h4>
                    <a href={'https://github.com/swarner0807/xiv-app'}> Github</a> |
                    <a href={'https://github.com/swarner0807/xiv-app'}> Website</a>
                </h4>
                <h3>Technologies Used:</h3>
                <ul>
                    <li>React</li>
                    <li>Material-UI</li>
                    <li>REST</li>
                </ul>
                <h2>W2UI</h2>
                <div>
                    Contributed to open source JavaScript UI library W2UI. Submitted multiple Issues and Pull Requests to
                    fix preexisting bugs in the live code.
                </div>
                <h4>
                    <a href={'https://github.com/swarner0807/w2ui'}> Github</a> |
                    <a href={'http://w2ui.com'}> Website</a>
                </h4>
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Javascript</li>
                    <li>Jquery</li>
                </ul>
            </div>
        );

    }
}

export default Fulltime