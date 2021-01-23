import './SeasonDisplay.css'
import React from 'react'

// lat > 0 === Nothern Hemi

const seasonConfig = {
    summer: {
        text: 'NICE AND TOASTY',
        iconName: 'sun'
    },
    winter: {
        text: 'BURRRRR its cold',
        iconName: 'snowflake'
    }
}

const renderSeason = (lat) => {
    const monthIdx = new Date().getMonth();

    if (monthIdx > 2 && monthIdx < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = ({lat, long, error}) => {
    const season = renderSeason(lat);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h2>{new Date().toDateString()}: {text}</h2>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
