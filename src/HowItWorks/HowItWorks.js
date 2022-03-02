import React from 'react';
import styles from './HowItWorks.css'

function HowItWorks() {

    return (
        <div className="howItWorks">
            <h1>How it works</h1>
            <div className="">
                <h3 className="">The average score is calculated with the total of your games played, divided by the games played.</h3>
                <h3 className="">The points are handed out as follows:</h3>
                <h3 className="">1/6 - 12 points</h3>
                <h3 className="">2/6 - 10 points</h3>
                <h3 className="">3/6 - 8 points</h3>
                <h3 className="">4/6 - 6 points</h3>
                <h3 className="">5/6 - 4 points</h3>
                <h3 className="">6/6 - 2 points</h3>
                <h3 className="">X/6 - 0 points</h3>
            </div>
        </div>
    )
}

export default HowItWorks