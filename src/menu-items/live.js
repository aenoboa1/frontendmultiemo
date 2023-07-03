// assets
import {CameraOutlined, DashboardOutlined} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    CameraOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const live = {
    id: 'group-live',
    title: 'Reconocimiento en Tiempo Real',
    type: 'group',
    children: [
        {
            id: 'live',
            title: 'Live',
            type: 'item',
            url: '/live/default',
            icon: icons.CameraOutlined,
            breadcrumbs: false
        }
    ]
};

export default live;
