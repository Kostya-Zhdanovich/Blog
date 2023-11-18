import React, { useContext } from 'react';
import { LightMode , DarkMode } from '@mui/icons-material';
import { ThemeModesEnum } from '../../styles/theme';
import { ThemeTogglerWrapper , ThemeTogglerButton } from './styles';
import { useActions } from '../../store/Hooks/useActions';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';

const ThemeToggler = () => {
    const themeMode = useTypedSelector((state) => {
        return state.theme.themeMode;
    });

    const { toggleTheme } = useActions();

    const isThemeDark = themeMode === ThemeModesEnum.DARK;

    return (
        <ThemeTogglerWrapper>
            <ThemeTogglerButton onClick={() => toggleTheme(ThemeModesEnum.LIGHT)}>
                <LightMode color = {!isThemeDark ? 'primary' : 'disabled'}/>
            </ThemeTogglerButton>
            <ThemeTogglerButton onClick={() => toggleTheme(ThemeModesEnum.DARK)}>
                <DarkMode color = {isThemeDark ? 'primary' : 'disabled'}/> 
            </ThemeTogglerButton>           
        </ThemeTogglerWrapper>
    );
};

export default ThemeToggler;