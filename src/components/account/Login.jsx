import styled from "@emotion/styled";
import { Box, Button, TextField, } from "@mui/material";
import React, { useState } from 'react';


const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const[account,toggleAccount]= useState('login');

    const togglesignup = () => {
       account ==='signup' ? toggleAccount('login') : toggleAccount('signup')
    }

    return (
            <Box>
                <div className="flex flex-col gap-8 lg:mx-96 my-16 sm:mx-12 bg-white-500 shadow-lg shadow-black-500/50">
                    <img className="w-24 mx-auto my-14" src={imageURL} alt="login" />
                    
                    { 
                    account === 'login' ?
                            // Login
                    <div className="flex flex-col gap-8 mx-8 mb-6">
                        <TextField id="standard-basic" label="Enter your username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                        <Button sx={`background-color: red;
                        font-size: 16px;
                        text-transform: none;
                        &:hover {
                        background-color: red;`} variant="contained">Login</Button>
                        <Button sx={`
                            text-transform: none;

                        `}
                        onClick={() => togglesignup()}
                        >Creat an account</Button>
                    </div>
                        :
                            //Signed in
                    <div className="flex flex-col gap-8 mx-8 mb-6">
                        <TextField id="standard-basic" label="Enter your username" variant="standard" />
                        <TextField id="standard-basic" label="Enter your username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                        <Button sx={`background-color: red;
                        font-size: 16px;
                        text-transform: none;
                        &:hover {
                        background-color: red;`} variant="contained">SignUp</Button>
                        <Button sx={`
                            text-transform: none;

                        `}
                        onClick={() => togglesignup()}
                        >Already have an account</Button>
                    </div>
}
</div>
            </Box>
    );
};

export default Login;