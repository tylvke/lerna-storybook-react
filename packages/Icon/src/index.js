import React from 'react';

const Icon = (props) => {
    const {type,children}=props;
    return(
        <button type={type}>{children}</button>
    )
}

export default Icon;