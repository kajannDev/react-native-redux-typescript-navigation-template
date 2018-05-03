import { NavigationState } from 'react-navigation';
import { Navigator } from '../../components/Navigator';
import { INITIAL_ROUTE } from '../types';

const router = Navigator.router;
const action = router.getActionForPathAndParams('Home');
const INITIAL_STATE: NavigationState = router.getStateForAction(action);

export const NavigatorReducer = (
    state: NavigationState = INITIAL_STATE,
    action: any
): NavigationState => {
    switch(action.type) {
        case INITIAL_ROUTE:
            return { ...state, routes: [...action.payload] };
        default: {
            const nextState = router.getStateForAction(action, state);
            return nextState || state;
        }
    }
};