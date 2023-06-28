import {Link} from 'react-router-dom';

// material-ui
import {Grid, Stack, Typography} from '@mui/material';
import AuthWrapper from "../../components/auth/AuthWrapper.jsx";


// ================================|| LOGIN ||================================ //

const Login = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline"
                       sx={{mb: {xs: -0.5, sm: 0.5}}}>
                    <Typography variant="h3">Iniciar Sesion</Typography>
                    <Typography component={Link} to="/register" variant="body1" sx={{textDecoration: 'none'}}
                                color="primary">
                        No se encuentra registrado?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    </AuthWrapper>
);


export default Login;
