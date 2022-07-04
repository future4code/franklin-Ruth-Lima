import { createTheme } from '@mui/material/styles';
import {corPrincipal, corNeutra} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
        main: corPrincipal,
        contrastText: "white"
  },
  text: {
      primary: corNeutra
  }
}
})

export default theme