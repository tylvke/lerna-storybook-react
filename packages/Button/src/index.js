import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const {size,children}=props;
    return(
        <button>{children}</button>
    )
}

export default Button;