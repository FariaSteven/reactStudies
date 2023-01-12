import React from 'react';
import Header from './Header';

export default function ChildrenExample02() {
    return (
        <>
            <Header title='Homepage'>
                <ul>
                    <li>Homepage</li>
                </ul>
            </Header>
            <Header title='Projects'>
                <ul>
                    <li>Homepage</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
};
