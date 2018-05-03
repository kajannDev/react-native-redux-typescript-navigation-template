import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigator } from './Navigator';
import { addListener } from '../store';

class AppWithNavigationState extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            back: null
        };
    }

    public componentDidMount(): void {

    }

    public componentWillUnmount(): void {
        
    }

    public render(): JSX.Element {
        const { dispatch, navigationState } = this.props;
        return (
            <Navigator
                navigation={addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState,
                    addListener
                })}
            />
        );
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

interface INav {
    routes: Array<any>;
    index: number;
}
interface IState {
    back: number | null;
}
interface IProps {
    resetEvent: any;
    dispatch: any;
    actions: any;
    navigationState: INav;
}
