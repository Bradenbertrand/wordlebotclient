import React, { useEffect, useState } from 'react';
import { fetchPoints } from '../api/api';
import styles from './PointsLeaderboard.css'

const PointsLeaderboard = () => {
    const [state, setState] = useState(0)

    const getTop5Points = async () => {
        let top5;
        await fetchPoints().then(users => {
            console.log("fetching points successful")
            setState({ top5points: users.data })
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getTop5Points();
    }, [])

    console.log(state.top5points);

    return (
        !state.top5points ? <div className="placeholder"></div> : (
        <div>
            <header>
                <h1>Top Points</h1>
            </header>
            <div className="pointsUsers">
                {state.top5points.map((user, key) => (
                    <span key={key}>
                        <h3>{key + 1}. {user.username} - {user.points.toFixed(2)}</h3>
                    </span>
                ))}
            </div>
        </div>
        )
    )
}

export default PointsLeaderboard