import React from 'react';

const AdminHeader: React.FC = () => {
    return (
        <header>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/#/admin`}>Admin Dashboard</a></li>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/#/admin/settings`}>Settings</a></li>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/#/admin/users`}>Users</a></li>
                </ul>
            </nav>
            <a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/#`}>
                <button>Back to user</button>
            </a>
        </header>
    );
};

export default AdminHeader;