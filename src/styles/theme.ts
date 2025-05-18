// src/styles/theme.ts
const theme = {
  colors: {
    primary: '#SEU_CODIGO_HEX_PARA_PRIMARY', 
    lacreiGreen: '#018762',
    secondary: '#FFFFFF',
    lacreiDarkGreenButtonBg: '#014C37',
    lacreiLightGreen: '#B0E0D3',
    navLinkHoverBg: '#E6F3EF',
    lacreiGrey: '#515151',
    lacreiLightGrey: '#E0E0E0',
    text: '#333333',
    background: '#F9F9F9',
    headerBackground: '#F5FFFB',
    dropdownBorder: '#CFCFCF',
    dropdownText: '#2D2D2D',
    black: '#000000',
  },
  fonts: {
    primary: "'Nunito', sans-serif",
  },
  fontSizes: {
    mediumPlus: '1.125rem', 
    medium: '1rem',       
    small: '0.875rem',    
    large: '1.25rem',     
    xlarge: '1.5rem',     
    xxlarge: '2rem',      
  },
  spacings: {
    xxsmall: '0.25rem',   
    xsmall: '0.5rem',    
    small: '1rem',       
    medium: '1.5rem',    
    large: '2rem',       
    xlarge: '3rem',      
    xxlarge: '6rem',     
  },
  breakpoints: {
    mobile: '768px',
    tablet: '992px',
    desktop: '1200px',
  },
};

export type ThemeType = typeof theme;
export default theme;