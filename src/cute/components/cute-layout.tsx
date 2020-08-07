import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';

import Observable from '../../common/observable';
import Colors, { AppColor } from '../../common/colors';
import { CuteContainer, AbsoluteContainer, CuteLabel } from '../styles';
import { TouchableOpacity } from 'react-native';

type LayoutMenuItem = { type: 'label'|'icon'|'array', value: string|Array<LayoutMenuItem>, action?: () => void }

interface LayoutProps {
    configuration: Observable<LayoutConfiguration>
}

interface LayoutState {
    configuration: Observable<LayoutConfiguration>
}

class LayoutConfiguration {
    // General
    backgroundColor: AppColor = Colors.background;

    // Menu
    isMenuVisible: boolean = true;
    menuWidth: number = 70;
    menuItemMargin: number = 5;
    menuLabelSize: number = 18;
    menuIconSize: number = 30;
}

// https://dribbble.com/shots/6804284-Recipe-app-design/attachments
class CuteLayout extends React.Component<LayoutProps, LayoutState> {
    constructor(props: LayoutProps) {
        super(props);

        this.state = {
            configuration: props.configuration
        };

        props.configuration.subscribe(this.onConfigurationChanged);
    }    

    private onConfigurationChanged(source: LayoutConfiguration, property: Array<string>) {
        this.setState((prevState: LayoutState) => prevState);
    }

    getConfiguration(): Readonly<LayoutConfiguration> {
        return this.state.configuration.getObject();
    }

    render() {
        const configuration = this.getConfiguration();
        let top = Constants.statusBarHeight;

        return (
            <AbsoluteContainer top={top}>
                {this.renderContent(configuration)}
                {this.renderMenu(configuration)}
            </AbsoluteContainer>
        );
    }

    renderContent(configuration: LayoutConfiguration) {
        let left = configuration.isMenuVisible ? configuration.menuWidth : 0;
        let colors = configuration.backgroundColor;

        return (
            <AbsoluteContainer left={left} colors={colors}>
                {this.props.children}
            </AbsoluteContainer>
        );
    }

    renderMenu(configuration: LayoutConfiguration) {
        if(!configuration.isMenuVisible)
            return null;

        let width = configuration.menuWidth;

        const items: Array<LayoutMenuItem> = [{
            type: 'label',
            value: 'Padaria',
            action: () => {}
        }, {
            type: 'icon',
            value: 'menu',
            action: () => {}
        }, {
            type: 'array',
            value: [{
                type: 'label',
                value: 'test',
                action: () => {}
            }]
        }];

        return (
            <AbsoluteContainer flex={1} flexDirection="column" justify="space-between" 
                               width={width} colors={Colors.surface}>
                { items.map((item, index) => this.renderMenuItem(configuration, item, String(index))) }
            </AbsoluteContainer>
        );
    }

    renderMenuItem(configuration: LayoutConfiguration, item: LayoutMenuItem, key: string): JSX.Element {
        let margin = configuration.menuItemMargin;

        const renderItem = {
            icon: () => <Icon style={{ margin, backgroundColor: 'red' }} name={item.value as string} size={configuration.menuIconSize} color={Colors.surface.foreground} key={key} />,
            label: () => <MenuLabel background="#ff0000" margin={`${margin}px`} foreground={Colors.surface.foreground} fontSize={configuration.menuLabelSize} numberOfLines={1} key={key}>{ item.value }</MenuLabel>,
            array: () => <CuteContainer key={key}>{ (item.value as Array<LayoutMenuItem>).map((i, index) => this.renderMenuItem(configuration, i, `${key ?? ''}${index}`)) }</CuteContainer>
        };

        if(item.action == null)
            return renderItem[item.type]();
        else {
            return (
                <TouchableOpacity key={key} onPress={() => { if(item.action) item.action() }} style={{ backgroundColor: 'blue', alignSelf: 'center' }}>
                    {renderItem[item.type]()}
                </TouchableOpacity>
            );
        }
    }
}

const MenuLabel = styled(CuteLabel)`
    transform: rotate(270deg);
`;

export { LayoutProps, LayoutConfiguration };
export default CuteLayout;
