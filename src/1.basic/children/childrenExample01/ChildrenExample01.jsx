import React from 'react';
import ChildrenExample01Function from './ChildrenExample01Function';
import ChildrenExample02Class from './ChildrenExample02Class';

export default function ChildrenExample01() {
    return (
        <>
            <ChildrenExample01Function>Olá, Children (função)</ChildrenExample01Function>
            <ChildrenExample02Class>Olá, Children (classe)</ChildrenExample02Class>
        </>
    );
};
