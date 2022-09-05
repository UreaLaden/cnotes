import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';
import * as React from 'react';

/*Bind all of our action creators to the dispatch function **/
export const useActions = () =>{
    const dispatch = useDispatch();

    //Function only re-executes when dispatch is changed
    return React.useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    },[dispatch])
};

