import React from 'react';
import { useGridContext } from './Grid';

function Counter() {
    const { countOnCells } = useGridContext();
    return <span>{countOnCells()}</span>;
}

export default Counter;

