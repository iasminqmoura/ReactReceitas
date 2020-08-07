import React from 'react';

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import Observable from './src/common/observable';
import CuteLayout, { LayoutConfiguration } from './src/cute/components/cute-layout';
import Colors from './src/common/colors';

const AppLayoutConfiguration = new Observable<LayoutConfiguration>(new LayoutConfiguration());

class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar style="auto" backgroundColor={Colors.surface.background} />
                <Routes />
            </>
        );
    }
}

/*
<CuteLayout configuration={AppLayoutConfiguration}>
    <Routes />
</CuteLayout>
*/

export { AppLayoutConfiguration };
export default App;
