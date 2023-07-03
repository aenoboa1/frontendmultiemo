// material-ui
import {Box, useMediaQuery} from '@mui/material';

// project import
import Search from './Search.jsx';
import Profile from './Profile/index.jsx';
import Notification from './Notification.jsx';
import MobileSection from './MobileSection.jsx';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            {!matchesXs && <Search/>}
            {matchesXs && <Box sx={{width: '100%', ml: 1}}/>}

            <Notification/>
            {!matchesXs && <Profile/>}
            {matchesXs && <MobileSection/>}
        </>
    );
};

export default HeaderContent;
