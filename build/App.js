var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Main from './src/Main';
export default class App extends Component {
    constructor(props) {
        super(props);
        this._handleFinishLoading = this._handleFinishLoading.bind(this);
        this.state = {
            isLoadingComplete: false
        };
    }
    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (React.createElement(AppLoading, { startAsync: this._loadResourceAsync, onError: this._handleLoadingError, onFinish: this._handleFinishLoading }));
        }
        else {
            return (React.createElement(Main, null));
        }
    }
    _loadResourceAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return Asset.loadAsync([]).then(() => Font.loadAsync(Object.assign({}, Ionicons.loadFont)));
        });
    }
    _handleLoadingError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn(error);
        });
    }
    _handleFinishLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ isLoadingComplete: true });
        });
    }
}
//# sourceMappingURL=App.js.map