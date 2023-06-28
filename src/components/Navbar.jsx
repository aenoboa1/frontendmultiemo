import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    offset: {
      ...theme.mixins.toolbar, // min-height: 56px;
      marginBottom: "1rem", // margen opcional
    },
}));

const Navbar = () => {
    return(
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
