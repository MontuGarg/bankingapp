// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2>Banking App</h2>
            </div>
            <ul className="sidebar__menu">
                <li className="sidebar__menu-item"><Link to="/">Dashboard</Link></li>
                <li className="sidebar__menu-item"><Link to="/accounts">Accounts</Link></li>
                <li className="sidebar__menu-item"><Link to="/transactions">Transactions</Link></li>
                <li className="sidebar__menu-item"><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
