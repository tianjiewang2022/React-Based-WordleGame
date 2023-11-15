import React from 'react';
import Game from '../Components/game'


const Hard = () => {
    return (
        < div >
            <Game words={['apple', 'banana', 'orange', 'grape', 'peach', 'cherry']} wordLength={6} attemptLimit={6} />

        </div >
    );
}

export default Hard;
