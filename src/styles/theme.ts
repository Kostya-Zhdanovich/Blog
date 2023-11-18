export enum ThemeModesEnum {
    LIGHT = 'light',
    DARK = 'dark'
};

const colorPalettes: Record<ThemeModesEnum, any> = {
    [ThemeModesEnum.LIGHT]: {
        primary: {
            main: '#2231AA',
            contrast: '#0382ff',
            additional: 'gray',
            additionalLight: 'silver',
        },
        background: {
            paper: '#dedede',
        },
        fontColor: {
            main: 'black',
            contrast: 'aqua',
            additional: 'gray',
            additionalLight: 'silver',
            white: 'white',
        }
    },
    [ThemeModesEnum.DARK]: {
        primary: {
            main: '#093498',
            contrast: '#1976d2',
            additional: 'gray',
            additionalLight: 'silver',
        },
        background: {
            paper: 'black',
        },
        fontColor: {
            main: 'white',
            contrast: 'aqua',
            additional: 'white',
            additionalLight: 'white',
        }
    },
};

export const createColorTheme = (mode: ThemeModesEnum) => {
    return {
        themeMode: mode,
        palette: {
            mode: mode,
            ...colorPalettes[mode]
        }
    }

}