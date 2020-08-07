interface Color {
    background: string,
    foreground: string
}

const Colors = {
    primary: {
        background: '#FFFFFF',
        foreground: '#FF9077'
    },
    surface: {
        background: '#FEF0E3',
        foreground: '#A2A2AC'
    },
    background: {
        background: '#FFFFFF',
        foreground: '#0A143B'
    }
};

const getStyledColor = (color: any): Color => {
    return {
        background: getStyledBackground(color),
        foreground: getStyledForeground(color)
    };
};

const getStyledBackground = (color: Color): string => {
    return `background-color: ${color.background};`;
};

const getStyledForeground = (color: Color): string => {
    return `color: ${color.foreground};`;
};

export default Colors;
export { Color as AppColor, getStyledColor, getStyledForeground, getStyledBackground };
