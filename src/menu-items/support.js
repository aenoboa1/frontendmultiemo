// assets
import {ChromeOutlined, QuestionOutlined, SettingFilled} from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined,
    SettingFilled
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Config',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Configuración',
            type: 'item',
            url: '/config',
            icon: icons.SettingFilled,
        },
    ]

};

export default support;
