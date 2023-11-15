import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export function useGridContext() {
    return useContext(GridContext);
}

export function GridProvider({ children }) {
    const [grid, setGrid] = useState([
        [false, false],
        [false, false],
    ]);

    const toggleCell = (row, col) => {
        const newGrid = [...grid];
        newGrid[row][col] = !newGrid[row][col];
        setGrid(newGrid);
    };

    const countOnCells = () => {
        return grid.flat().filter((cell) => cell).length;
    };

    return (
        <div>
            <GridContext.Provider value={{ grid, toggleCell, countOnCells }}>
                {children}
            </GridContext.Provider>
        </div>
    );
}
