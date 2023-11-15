
import { useGridContext } from './Grid';

function Cell({ row, col }) {
    const { grid, toggleCell } = useGridContext();

    const isOn = grid[row][col];
    const backgroundColor = isOn ? 'black' : 'white';

    return (
        <div
            className="cell"
            style={{
                backgroundColor,
                width: '100px',
                height: '100px',
                border: '1px solid grey',
            }}
            onClick={() => toggleCell(row, col)}
        ></div>
    );
}
export default Cell;