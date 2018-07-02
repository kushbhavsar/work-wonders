import React from 'react';
import './Container.css';

const Container = props =>  (

    <div id = 'container' className={`container${props.fluid ? '-fluid' : ""}`} {...props} />
)


export default Container;   

