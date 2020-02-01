import React from 'react';
import logo from './logo.svg';

export const ss = Component => {
    const WithLoading = ({ data }) =>
        data
            ? <Component data={data} />
            : <img
                alt="logo"
                className="App-logo"
                src={logo}
                style={{ display: 'block', margin: '0 auto' }}
            />;
    return WithLoading;
};


