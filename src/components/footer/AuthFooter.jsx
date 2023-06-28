// material-ui
import {Container, Link, Stack, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from "@mui/material/styles";

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container maxWidth="xl">
            <Stack
                direction={matchDownSM ? 'column' : 'row'}
                justifyContent={matchDownSM ? 'center' : 'space-between'}
                spacing={2}
                textAlign={matchDownSM ? 'center' : 'inherit'}
            >
                <Typography variant="subtitle2" color="secondary" component="span">
                    &copy; Aplicativo de Analisis de Emociones multimodal &nbsp;
                </Typography>

                <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3}
                       textAlign={matchDownSM ? 'center' : 'inherit'}>
                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        component={Link}
                        target="_blank"
                        underline="hover"
                    >
                        Universidad de las Fuerzas Armadas ESPE
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default AuthFooter;
