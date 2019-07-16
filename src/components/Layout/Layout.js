import React from 'react';
import './Layout.css';
const Layout = (props) => (

    <React.Fragment>
        <div>ToolBar, Side Drawer, Backdrop</div>

        <main className="content">
            {props.children}
        </main>
    </React.Fragment>
)
export default Layout;