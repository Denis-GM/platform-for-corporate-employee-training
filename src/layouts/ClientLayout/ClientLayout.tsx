import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/common/NavigationBar/NavigationBar';
import './ClientLayout.scss';

const ClientLayout: FC = () => {
    return (
        <>
            <div className='outer'>
                <div className='inner'>
                    <NavigationBar bottomPadding={175} title="Добро пожаловать!"></NavigationBar>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

export default ClientLayout;