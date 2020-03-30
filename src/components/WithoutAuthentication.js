import React from 'react';

const WithoutAuthentication = ({ children, without }) => {
    const isLoggedIn = !!window.localStorage.getItem('access_token');
    
    return without
        ? !isLoggedIn ? children : null
        : isLoggedIn ? children : null;
}
 
export default WithoutAuthentication;