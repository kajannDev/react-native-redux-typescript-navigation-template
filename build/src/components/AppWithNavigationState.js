import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigator } from './Navigator';
import { addListener } from '../store';
class AppWithNavigationState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: null
        };
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        const { dispatch, navigationState } = this.props;
        return (React.createElement(Navigator, { navigation: addNavigationHelpers({
                dispatch: dispatch,
                state: navigationState,
                addListener
            }) }));
    }
}
const mapStateToProps = (state) => ({
    navigationState: state.tabBar
});
const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators({}, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
//# sourceMappingURL=AppWithNavigationState.js.map