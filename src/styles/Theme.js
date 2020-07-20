import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { gotu, montserrat } from '../assets/fonts';

const primaryHex = "#1de8b5";
const secondaryHex = "#515151";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Gotu',
      'Montserrat',
      'Roboto',
      'Arial']
      .join(','),
    h1: {
      fontFamily: 'Gotu'
    },
    h3: {
      fontFamily: 'Gotu',
      textAlign: 'center',
      margin: '24px 0'
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '16px'
    },
    body1: {
      fontFamily: 'Montserrat'
    },
    button: {
      fontFamily: 'Montserrat',
    }
  },
  palette: {
    primary: {
      main: primaryHex
    },
    secondary: {
      main: secondaryHex
    },
    text: {
      primary: '#000',
      secondary: '#fff'
    },

  },
  props: {
    MuiAppBar: {
      color: "transparent"
    },
    MuiButton: {
      color: "primary",
      variant: "contained"
    },
    MuiIconButton: {
      "color": "primary"
    },
    MuiTextField: {
      fullWidth: true,
      variant: "outlined"
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [[gotu], [montserrat]]
      }
    },
    MuiAppBar: {
      root: {
        height: '65px'
      },
      colorPrimary: {
        backgroundColor: '#fff'
      }
    },

    MuiButton: {
      root: {
        borderRadius: '50px'
      },
      textPrimary: {
        color: secondaryHex
      },
      textSecondary: {
        color: primaryHex
      },
      containedSecondary: {
        color: primaryHex
      },
      label: {
          '&.active a': {
            backgroundColor: '#fff'
          }
      }
    },
    MuiDrawer: {
      paper: {
        height: '155px',
        width: '155px',
        borderRadius: '0 0 0 310px',
        backgroundColor: primaryHex
      }
    },
    MuiListItem: {
      root: {
        textAlign: 'center',
        paddingTop: '0',
        paddingBottom: '0'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#fff',
        width: '100%'
      }
    },
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: primaryHex
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: secondaryHex,
        '&$focused': {
          color: secondaryHex
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem'
  }
}

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem'
  }
}


export default theme;