import { Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import lightImage from './../../assets/login_page_light.svg'
import darkImage from './../../assets/login_page_dark.jpg'
import { useTheme } from '@emotion/react'

const Login = () => {
    const isDarkTheme = useTheme().palette.mode === 'dark';
    console.log(isDarkTheme)
  return (
    <Grid container>
        <Grid item md = {6} lg = {8} component={Box} sx = {{backgroundColor: isDarkTheme ? '#100f0f': '#fbfcfb'}}>
            <Stack sx={{height: '100vh', alignItems: 'center', justifyContent: 'center', padding: '16px'}} spacing={4}>
                {/* {
isDarkTheme && <Box component={'img'} src={darkImage} sx = {{width: 1/1.5, height: '70vh',objectFit: 'cover'}}/>
                }
                {
!isDarkTheme && <Box component={'img'} src={lightImage} sx = {{width: 1/1.5, height: '70vh',objectFit: 'cover'}}/>
                } */}
                <Box component={'img'} src={lightImage} sx = {{width: 1/1.5, height: '70vh'}}/>
            </Stack>
            
        </Grid>
        <Grid item sm = {12} md = {6} lg = {4}>
            <Stack sx={{height: '80vh', alignItems: 'center', justifyContent: 'center', padding: '30px'}} spacing={2}>
                <Typography component={'h4'} variant='h4' >Sign-in</Typography>
            <TextField label = "Username" sx={{width: 1}}/>
            <TextField label = "Email" sx={{width: 1}}/>
            <Link>Forgot Password?</Link>
            <Button sx={{width: 1, padding: '10px'}} variant='contained'>Login</Button>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Login