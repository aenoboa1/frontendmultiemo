import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'


const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        hola
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
