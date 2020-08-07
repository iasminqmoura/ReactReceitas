import React from 'react';
import Colors from '../common/colors';

import { FlatList } from 'react-native';
import { CuteContainer, CuteLabel, CuteImage, CuteTouchable } from '../cute/styles';

export default class MainPage extends React.Component {
    constructor(props: Readonly<{}>) { 
        super(props);
    }

    onItemClick(item: any) {
        console.log('click!');
    }

    render() {
        return (
            <CuteContainer flex={1} background={Colors.background.background}>
                <CuteContainer m="48px 0 48px 32px">
                    <CuteLabel foreground={Colors.background.foreground} fontSize={28} fontWeight="bold">Simple way to find</CuteLabel>
                    <CuteLabel foreground={Colors.primary.foreground} fontSize={28} fontWeight="bold">tasty recipes</CuteLabel>
                </CuteContainer>
                <CuteContainer>
                    <FlatList<any> horizontal={true} data={[]} renderItem={({item, index}) => (
                        <CuteTouchable key={`key-${item.id}`} align="center"
                                       m={index == 0 ? "0 32px 16px 32px" : "0 32px 16px 0"}>
                            <CuteContainer w="48" h="48" borderRadius="24" justify="center" align="center" background={Colors.surface.background}>
                                <CuteImage source={{ uri: item.imageUrl }} w="32" h="32" />
                            </CuteContainer>
                            <CuteLabel>{item.name}</CuteLabel>
                        </CuteTouchable>)} 
                    />
                </CuteContainer>
                <CuteContainer>
                        <FlatList<any> horizontal={true} data={[]} renderItem={({item, index}) => (
                            <CuteTouchable key={`key-${item.id}`} background={Colors.surface.background} w="256" h="400" borderRadius="32"
                                           m={index == 0 ? "64px 48px 16px 48px" : "64px 48px 16px 0"}
                                           onPress={(event: any) => this.onItemClick(item)}>
                                <CuteImage source={{ uri: item.imageUrl }} w={256 + 24} h="200" transform="translate(-32px, -32px)" resizeMode="contain" />
                                <CuteContainer flex={1} p="32px">
                                    <CuteLabel fontSize={24} fontWeight="bold" foreground={Colors.background.foreground}>{item.name}</CuteLabel>
                                    {   item.nameComplement
                                            ? <CuteLabel fontSize={16} fontWeight="200" foreground={Colors.surface.foreground}>{item.nameComplement}</CuteLabel>
                                            : null }
                                    <CuteContainer flex={1} />
                                    <CuteContainer flexDirection="row" align="center">
                                        <CuteLabel fontSize={24} fontWeight="bold" foreground={Colors.background.foreground}>{item.calories}</CuteLabel>                                    
                                        <CuteLabel fontWeight="normal" fontSize={16} foreground={Colors.surface.foreground} p="4px 0 0 0"> kcal</CuteLabel>
                                    </CuteContainer>
                                </CuteContainer>
                            </CuteTouchable>
                        )}
                    />
                </CuteContainer>
            </CuteContainer>
        )
    }
}


