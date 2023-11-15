import React from 'react';
import Game from '../Components/game';


const Hard = () => {
    return (
        < div >
            <Game words={['elephant', 'kangaroo', 'giraffe', 'rhinoceros', 'hippopotamus']} wordLength={8} attemptLimit={8} />
        </div>
        </div >
    );
}

export default Hard;
