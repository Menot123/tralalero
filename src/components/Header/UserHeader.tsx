import React from 'react';

const UserHeader: React.FC = () => {
    return (
        <header>
            <h1>User Dashboard</h1>
            <nav>
                <ul>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/`}>Dashboard</a></li>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/settings`}>Settings</a></li>
                    <li><a href={`${import.meta.env.VITE_ORIGINAL_PATH as string}/logout`}>Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default UserHeader;