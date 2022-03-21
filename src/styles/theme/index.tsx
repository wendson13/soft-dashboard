import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#CB0C9F',
    secondary: '#8392AB',
    success: '#82D616',
    info: '#17C1E8',
    warning: '#F53939',
    danger: '#EA0606',
    dark: '#252F40',
    light: '#E9ECEF',

    gray1: '#FFFFFF',
    gray2: '#FAFAFA',
    gray3: '#F5F5F5',
    gray4: '#F0F0F0',
    gray5: '#D9D9D9',
    gray6: '#BFBFBF',
    gray7: '#8C8C8C',
    gray8: '#595959',
    gray9: '#434343',
    gray10: '#262626',
    gray11: '#1F1F1F',
    gray12: '#141414',
  },

  gradients: {
    primary: 'linear-gradient(300deg, #7928CA, #FF0080)',
    secondary: 'linear-gradient(300deg, #A8B8D8, #627594)',
    info: 'linear-gradient(300deg, #21d4fd, #2152ff)',
    success: 'linear-gradient(300deg, #98EC2D, #17AD37)',
    warning: 'linear-gradient(300deg, #FBCF33, #F53939)',
    danger: 'linear-gradient(300deg, #FF667C, #EA0606)',
    dark: 'linear-gradient(300deg, #3A416F, #141727)',
    light: 'linear-gradient(300deg, #EBEFF4, #CED4DA)',
  },

  rgba: {
    gray1: '#FFFFFFE0'
  }
};

export { theme };