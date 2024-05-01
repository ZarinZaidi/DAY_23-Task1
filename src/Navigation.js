import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <ul style={styles.navbar}>
                <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
                <li style={styles.navItem}><Link to="/dash" style={styles.navLink}>Dashboard</Link></li>
            </ul>
        </div>
    );
};

const styles = {
    navbar: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        backgroundColor: '#333',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        float: 'left',
        padding: '10px 15px',
    },
    navLink: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 20px',
        textDecoration: 'none',
    },
};
export default Navigation;
