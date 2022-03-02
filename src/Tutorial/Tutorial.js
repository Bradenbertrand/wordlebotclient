import React from 'react';
import styles from './Tutorial.css'

function Tutorial() {

    return (
        <div className="tutorialContainer">
            <h1>How to upload your score</h1>
            <div className="tutorialTextContainer">
                <h3 className="tutorialText">1. Add the bot to your discord server</h3>
                <div className="buttonContainer1"><a href="https://discord.com/api/oauth2/authorize?client_id=938544999665135626&permissions=3072&scope=bot" target="_blank" rel="noreferrer noopener" className="botButton">Click Here</a></div>
                <h3 className="tutorialText">2. Type !wlsave {'<'}paste your score here{'>'}</h3>
                <h3 className="tutorialText">3. All done! Your score is added to the database</h3>
                <h3 className="tutorialText">Use !wlhelp for a list of all the available commands</h3>
            </div>
        </div>
    )
}

export default Tutorial