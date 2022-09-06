import './cell-list.css';
import {Fragment} from 'react';
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import {useActions} from "../hooks/use-actions";
import * as React from 'react';

const CellList:React.FC = () =>{
    const cells:Cell[] = useTypedSelector(({cells:{order,data}}) => {
        return order.map((id) => data[id]);
    });
    const {fetchCells} = useActions();


    React.useEffect(() => {
        fetchCells();
    },[])
    

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell}/>
            <AddCell prevCellId={cell.id}/>
        </Fragment>
    ));
    
    return (
        <div className='cell-list'>
            <AddCell forceVisible={cells.length <= 0} prevCellId = {null}/>
            {renderedCells}
        </div>
        )
};

export default CellList;
