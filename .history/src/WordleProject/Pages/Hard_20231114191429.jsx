import React from 'react';
import Game from '../Components/game';


const Hard = () => {
    return (
        < div >
            <Game words={['elephant', 'kangaroo', 'giraffe', 'rhinoceros', 'hippopotamus']} wordLength={7} attemptLimit={5} />
        </div>

    );
}

export default Hard;
