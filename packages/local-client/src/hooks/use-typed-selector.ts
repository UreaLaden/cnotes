import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state';

/**Wrapper used to access the redux store state based on our RootState */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;