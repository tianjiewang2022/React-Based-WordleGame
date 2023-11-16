import Game from '../Components/gameContainer';

const Hard = () => {
    return (
        < div >
            <Game words={['curious', 'glimpse', 'hydrate', 'observe', 'protest', 'vintage', 'analyze', 'justice', 'whisper', 'capture']} wordLength={7} attemptLimit={5} />
        </div>
    );
}
export default Hard;
