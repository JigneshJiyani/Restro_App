import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Titillium Web", sans-serif;'].join(',')
    },
    h1: {
        fontWight: 600,
    }
})

export default theme;