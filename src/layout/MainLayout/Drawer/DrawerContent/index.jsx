// project import
import Navigation from './Navigation/index.jsx';

import SimpleBar from '../../../../../src/components/third-party/SimpleBar.jsx'
// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        }}
    >
        <Navigation/>
    </SimpleBar>
);

export default DrawerContent;
