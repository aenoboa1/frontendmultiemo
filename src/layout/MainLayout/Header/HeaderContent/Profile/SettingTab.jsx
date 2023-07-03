import {useState} from 'react';

// material-ui
import {useTheme} from '@mui/material/styles';
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

// assets
import {VideoCameraAddOutlined} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <List component="nav" sx={{p: 0, '& .MuiListItemIcon-root': {minWidth: 32, color: theme.palette.grey[500]}}}>
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon>
                    <VideoCameraAddOutlined/>
                </ListItemIcon>
                <ListItemText primary="Cambiar Entrada de Video/Microfono"/>
            </ListItemButton>
        </List>
    );
};

export default SettingTab;
