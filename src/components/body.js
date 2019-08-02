import React from 'react'
import image from '../images/stevenZoo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faGithub, faInstagram, faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'

let years = new Date().getFullYear() - 2015;
const Body = () => (
    <div className={"bio"}>
        <h2>Hello!</h2>
        <div className={"bio-text"}>
            My name is Steven Warner, a Web Developer from Omaha Nebraska with over {years} years of full time experience.
            I have worked on several large scale projects with teams from across the country.
        </div>
        <div className={"wrap-text soft enFFds"}>
            <img className={"side soft bottom"} src={image}/>
            <div className={"side soft left"}>
                <div>
                    I majored in Computer Science at Creighton University, graduating in 2014. Along the way, I minored in music
                    focusing on performance guitar. My passions are in line with my education, with me spending much of
                    my free time with technology as well as listening to and playing music.
                </div>
                <div className={"soft top"}>
                    I have held an interest in the world of technology since a very young age, building my first website
                    at the age of 10 years old. Since that time the internet has gone through many large scale changes while I
                    continued to develop my skills around it.
                </div>
                <h2 className={"soft ends"}>Connect with me!</h2>
                <div className={"text-center"}>
                    <a href={'https://github.com/swarner0807'}><FontAwesomeIcon size={'3x'} icon={faGithub} /></a>
                    <a href={'https://twitter.com/S2Warner'}><FontAwesomeIcon size={'3x'} icon={faTwitterSquare} /></a>
                    <a href={'https://www.instagram.com/steven.g.warner/'}><FontAwesomeIcon size={'3x'} icon={faInstagram} /></a>
                    <a href={'https://www.linkedin.com/in/steven-warner-233608189/'}><FontAwesomeIcon size={'3x'} icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    </div>
)

export default Body