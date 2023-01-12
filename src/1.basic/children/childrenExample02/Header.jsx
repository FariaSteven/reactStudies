import React from 'react';

// export default function Header({ title, children, }) {
export default function Header(props) {
    
    // console.log('children', children);
    console.log('props.children.props.children', props.children.props.children);

    return (
        <header>
            {/* <h1>{title}</h1> */}
            {/* {children} */}
            <h1>{props.title}</h1>
                {props.children}
        </header>
    );
};
