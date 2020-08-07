import React from 'react';
import styled from 'styled-components/native';
import Colors from '../common/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Text, FlatList, Image } from 'react-native';
import { CuteContainer, CuteLabel, CuteImage, CuteTouchable } from '../cute/styles';
import { Recipe, Ingredient, IngredientAmount, FoodType } from '../models/food';
import { FoodTypes, Recipes } from '../common/data';

export default class RecipePage extends React.Component {
    recipe: Recipe;

    constructor(props: Readonly<{}>) { 
        super(props);

        let route = (this.props as any).route;
        this.recipe = route.params as Recipe;
    }

    onBackButtonPress() {
        let navigation = (this.props as any).navigation;
        navigation.goBack();
    }

    render() {
        return (
            <CuteContainer flex={1} background={Colors.surface.background}>
                <CuteContainer flexDirection="row" h="300">
                    <CuteContainer justify="space-evenly" m="8px">
                        <CuteTouchable w="48" h="48" justify="center" align="center" onPress={() => this.onBackButtonPress()}>
                            <Icon name="arrow-back" size={28} color={Colors.surface.foreground} />
                        </CuteTouchable>
                        <CuteTouchable background="#FFFFFFCC" w="48" h="48" justify="center" align="center" borderRadius="24">
                            <Icon name="share" size={22} color={Colors.surface.foreground} />
                        </CuteTouchable>
                        <CuteTouchable background="#FFFFFFCC" w="48" h="48" justify="center" align="center" borderRadius="24">
                            <Icon name="movie" size={22} color={Colors.surface.foreground} />
                        </CuteTouchable>
                    </CuteContainer>
                    <CuteImage source={{ uri: this.recipe.imageUrl }} flex={1} resizeMode="contain" transform="translateX(32px)" />
                </CuteContainer>
                <CuteContainer borderRadius="32" flex={1} background={Colors.background.background} p="32px">
                    <CuteLabel fontSize={24} fontWeight="bold" foreground={Colors.background.foreground}>
                        {`${this.recipe.name} ${this.recipe.nameComplement}`}
                    </CuteLabel>
                    <CuteLabel fontSize={16} fontWeight="200" foreground={Colors.surface.foreground}>{this.recipe.description}</CuteLabel>
                    
                    <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.surface.foreground} p="32px 0 0 0">Nutrition Facts</CuteLabel>
                    <CuteContainer flexDirection="row" justify="space-between" p="16px 0 0 0">
                        <CuteContainer w="64" h="110" borderRadius="32" background={Colors.surface.background} justify="space-between" align="center" p="7px">
                            <CuteContainer w="50" h="50" borderRadius="25" background={Colors.background.background} justify="center" align="center">
                                <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.background.foreground}>{this.recipe.calories}</CuteLabel>
                            </CuteContainer>
                            <CuteLabel fontSize={12} foreground={Colors.background.foreground} p="8px 0 0 0">Calories</CuteLabel>
                            <CuteLabel fontSize={12} foreground={Colors.surface.foreground} p="0 0 8px 0">kcal</CuteLabel>
                        </CuteContainer>

                        <CuteContainer w="64" h="110" borderRadius="32" background={Colors.surface.background} justify="space-between" align="center" p="7px">
                            <CuteContainer w="50" h="50" borderRadius="25" background={Colors.background.background} justify="center" align="center">
                                <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.background.foreground}>{this.recipe.carbo}</CuteLabel>
                            </CuteContainer>
                            <CuteLabel fontSize={12} foreground={Colors.background.foreground} p="8px 0 0 0">Carbo</CuteLabel>
                            <CuteLabel fontSize={12} foreground={Colors.surface.foreground} p="0 0 8px 0">g</CuteLabel>
                        </CuteContainer>

                        <CuteContainer w="64" h="110" borderRadius="32" background={Colors.surface.background} justify="space-between" align="center" p="7px">
                            <CuteContainer w="50" h="50" borderRadius="25" background={Colors.background.background} justify="center" align="center">
                                <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.background.foreground}>{this.recipe.protein}</CuteLabel>
                            </CuteContainer>
                            <CuteLabel fontSize={12} foreground={Colors.background.foreground} p="8px 0 0 0">Protein</CuteLabel>
                            <CuteLabel fontSize={12} foreground={Colors.surface.foreground} p="0 0 8px 0">g</CuteLabel>
                        </CuteContainer>

                        <CuteContainer w="64" h="110" borderRadius="32" background={Colors.surface.background} justify="space-between" align="center" p="7px">
                            <CuteContainer w="50" h="50" borderRadius="25" background={Colors.background.background} justify="center" align="center">
                                <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.background.foreground}>{this.recipe.fat}</CuteLabel>
                            </CuteContainer>
                            <CuteLabel fontSize={12} foreground={Colors.background.foreground} p="8px 0 0 0">Fat</CuteLabel>
                            <CuteLabel fontSize={12} foreground={Colors.surface.foreground} p="0 0 8px 0">g</CuteLabel>
                        </CuteContainer>
                    </CuteContainer>

                    <CuteLabel fontSize={16} fontWeight="bold" foreground={Colors.surface.foreground} p="32px 0 16px 0">Ingredients</CuteLabel>
                    <FlatList<IngredientAmount> style={{ flex: 1 }} data={this.recipe.ingredients} renderItem={({item, index}) => (
                        <CuteContainer key={`key-${item.id}`}>
                            { index != 0
                                ?  <CuteContainer h="1" m="8px" background={Colors.surface.foreground} />
                                : null}

                            <CuteContainer flexDirection="row" align="center" h="32">
                                <CuteImage source={{ uri: item.ingredient.imageUrl }} w="24" h="24"/>
                                <CuteLabel m="0 0 0 16px" fontSize={16} fontWeight="bold">{item.ingredient.name}</CuteLabel>
                                <CuteContainer flex={1} flexDirection="row-reverse">
                                    <CuteLabel>{`${item.amount} ${item.measurement.name}`}</CuteLabel>
                                </CuteContainer>
                            </CuteContainer>
                        </CuteContainer>
                    )}/>
                </CuteContainer>
            </CuteContainer>
        );
    }
}
/*


*/