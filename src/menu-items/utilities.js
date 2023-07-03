// assets
import {DashboardOutlined, UploadOutlined} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UploadOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'Dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'upload',
            title: 'Cargar Video',
            type: 'item',
            url: '/upload/default',
            icon: icons.UploadOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
