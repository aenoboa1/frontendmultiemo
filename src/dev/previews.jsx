import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Login from "../pages/authentication/Login.jsx";
import AuthWrapper from "../components/auth/AuthWrapper.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
            <ComponentPreview path="/AuthWrapper">
                <AuthWrapper/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews