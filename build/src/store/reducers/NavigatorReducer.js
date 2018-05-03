import { Navigator } from '../../components/Navigator';
import { INITIAL_ROUTE } from '../types';
const router = Navigator.router;
const action = router.getActionForPathAndParams('Home');
const INITIAL_STATE = router.getStateForAction(action);
export const NavigatorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INITIAL_ROUTE:
            return Object.assign({}, state, { routes: [...action.payload] });
        default: {
            const nextState = router.getStateForAction(action, state);
            return nextState || state;
        }
    }
};
//# sourceMappingURL=NavigatorReducer.js.map