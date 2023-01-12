import React, { Profiler } from 'react';
import UseStateTimer from '../../hooks/1.useState/useState';

export const Profiler01 = () => {
    const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions ) => {
        console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions})
        }

    return (
        <>
            <Profiler id="Navigation" onRender={callback}>
                <UseStateTimer  />
            </Profiler>
        </>
    )
};

export default Profiler01;
