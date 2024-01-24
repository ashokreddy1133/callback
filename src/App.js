
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [themeType, setThemeType] = useState('dark')
  const lightTheme = createTheme({
    palette: {
      mode: 'light'
    },
    shape: {
      borderRadius: 8
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
    shape: {
      borderRadius: 8
    }
  })
  return (
    <ThemeProvider theme={themeType === 'light' ? lightTheme: darkTheme}>
<CssBaseline />
<Login />
    </ThemeProvider>
  );
}

export default App;
