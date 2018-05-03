import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Main from './src/Main';

interface IProps {
  skipLoadingScreen?: boolean;
}

interface IState {
  isLoadingComplete: boolean;
}

export default class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this._handleFinishLoading = this._handleFinishLoading.bind(this);
    this.state = {
      isLoadingComplete: false
    };
  }

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <Main />
      );
    }
  }

  public async _loadResourceAsync() {
    return Asset.loadAsync([
    ]).then(
      () => Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.loadFont,
      })
    );
  }

  public async _handleLoadingError(error: any) {
    console.warn(error);
  }

  public async _handleFinishLoading() {
    this.setState({ isLoadingComplete: true })
  }
}

