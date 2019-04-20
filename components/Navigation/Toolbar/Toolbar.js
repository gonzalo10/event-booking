import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../../components/Logo/Logo';
import DrawerToggle from '../SideDrawer/Drawertoggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Title}>
            Manage users
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>
);

export default toolbar;