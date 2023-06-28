import {Link} from 'react-router-dom';

// material-ui
import {Grid, Stack, Typography} from '@mui/material';
import AuthWrapper from "../../components/auth/AuthWrapper.jsx";
import {AuthRegister} from "./AuthRegister.jsx";

// project import
export const Register = () => {
    return (
        <>
            <AuthWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" alignItems="baseline"
                               sx={{mb: {xs: -0.5, sm: 0.5}}}>
                            <Typography variant="h3">Crear Cuenta</Typography>
                            <Typography component={Link} to="/login" variant="body1" sx={{textDecoration: 'none'}}
                                        color="primary">
                                Ya se encuentra registrado?
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <AuthRegister/>
                    </Grid>
                </Grid>
            </AuthWrapper>
        </>
    )
}