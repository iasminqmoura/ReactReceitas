import React from 'react';
import styled from 'styled-components/native';

import { getStyledBackground, getStyledForeground } from '../common/colors';

// Constants

export const CuteConstants = {

};

// Labels

export const CuteLabel = styled.Text`
    ${props => getCommonProps(props)}
    ${props => getColorProps(props)}

    ${props => getPropsElement(props.fontSize, 'font-size', undefined, pxElementFunction)}
    ${props => getPropsElement(props.fontWeight, 'font-weight')}
    ${props => getPropsElement(props.textAlign, 'text-align')}
`;

// Containers

export const CuteContainer = styled.View`
    ${props => getCommonProps(props)}
    ${props => getColorProps(props)}
    ${props => getContainerProps(props)}
`;

export const CuteImage = styled.Image`
    ${props => getCommonProps(props)}
    ${props => getColorProps(props)}
    ${props => getContainerProps(props)}

    ${props => getPropsElement(props.resizeMode, 'resize-mode')}
`;

export const CuteTouchable = styled.TouchableOpacity`
    ${props => getCommonProps(props)}
    ${props => getColorProps(props)}
    ${props => getContainerProps(props)}
`;

// Other

export const AbsoluteContainer = styled(CuteContainer)`
    ${props => getAbsoluteProps(props)}
`;

// Utils

function defaultGetPropsElementFunction(value: any): string {
    if(typeof value == 'string')
        return value;
    else
        return String(value);
}

function pxElementFunction(value: any) {
    return `${defaultGetPropsElementFunction(value)}px`;
}

function getPropsElement(prop: any, elementName: string, defaultValue: any = undefined, func: (value: any) => string = defaultGetPropsElementFunction, acceptsNullProp: boolean = false) {
    if(prop === undefined || (!acceptsNullProp && prop === null)) {
        if(defaultValue === undefined)
            return '';
        else
            return `${elementName}: ${func(defaultValue)};`;
    }

    return `${elementName}: ${func(prop)};`;
}

function getCommonProps(props: any): string {
    return `
        ${getPropsElement(props.m, 'margin')}
        ${getPropsElement(props.p, 'padding')}
        ${getPropsElement(props.w, 'width', undefined, pxElementFunction)}
        ${getPropsElement(props.h, 'height', undefined, pxElementFunction)}
        ${getPropsElement(props.transform, 'transform')}
        ${getPropsElement(props.borderRadius, 'border-radius', undefined, pxElementFunction)}
    `;
}

function getColorProps(props: any): string {
    if(props.colors != null) {
        return `
            ${getStyledForeground(props.colors)}
            ${getStyledBackground(props.colors)}
        `;
    }
    else {
        return `
            ${getPropsElement(props.foreground, 'color')}
            ${getPropsElement(props.background, 'background-color')}
        `;
    }
}

function getContainerProps(props: any): string {
    return `
        ${getPropsElement(props.flex, 'flex')}
        ${getPropsElement(props.direction, 'flex-direction')}
        ${getPropsElement(props.justify, 'justify-content')}
        ${getPropsElement(props.align, 'align-items')}
    `;
}

function getAbsoluteProps(props: any): string {
    let hasWidth = props.width != null;
    let hasHeight = props.height != null;
    let defaultRightValue = hasWidth ? undefined : '0';
    let defaultBottomValue = hasHeight ? undefined : '0';

    return `
        ${getPropsElement(props.position, 'position', 'absolute')}
        ${getPropsElement(props.top, 'top', '0', pxElementFunction)}
        ${getPropsElement(props.left, 'left', '0', pxElementFunction)}
        ${getPropsElement(props.right, 'right', defaultRightValue, pxElementFunction)}
        ${getPropsElement(props.bottom, 'bottom', defaultBottomValue, pxElementFunction)}
    `;
}
