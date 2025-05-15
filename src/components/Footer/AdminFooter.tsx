import React from 'react';

const AdminFooter: React.FC = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default AdminFooter;