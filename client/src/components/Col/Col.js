import React from 'react';

const Col = prop => {

    const size = props.size.split(" ").map(size => 'col-'+size).join(' ');
    return <div className = {size} {...props} />;

};

export default Col;

