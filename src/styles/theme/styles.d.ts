// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      success: string,
      info: string,
      warning: string,
      danger: string,
      dark: string,
      light: string,
  
      gray1: string,
      gray2: string,
      gray3: string,
      gray4: string,
      gray5: string,
      gray6: string,
      gray7: string,
      gray8: string,
      gray9: string,
      gray10: string,
      gray11: string,
      gray12: string,
    },
  
    gradients: {
      primary: string,
      secondary: string,
      info: string,
      success: string,
      warning: string,
      danger: string,
      dark: string,
      light: string,
    },

    rgba: {
      gray1: string;
    }
  }
}