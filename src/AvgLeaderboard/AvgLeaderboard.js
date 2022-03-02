import React, { useEffect, useState } from 'react';
import { fetchAvg } from '../api/api';
import styles from './AvgLeaderboard.css'

const AvgLeaderboard = () => {
    const [state, setState] = useState(0)

    const getTop5Avg = async () => {
        let top5;
        await fetchAvg().then(users => {
            top5 = users
        }).catch(error => {
            console.log(error)
        })
        console.log(top5)
        await setState({ top5avg: top5.data })
    }

    useEffect(() => {
        getTop5Avg();
    }, [])


    return (
        !state.top5avg ? <div className="placeholder"></div> : (
        <div>
            <header>
                <h1>Top Averages</h1>
            </header>
            <div className="avgUsers">
                {state.top5avg.map((user, key) => (
                    <span  key={key}>
                        <h3 className="singleUser">{key + 1}. {user.username} - ~{user.scoreAvg.toFixed(3)}</h3>
                    </span>
                ))}
            </div>
        </div>
        )
    )
}

export default AvgLeaderboard