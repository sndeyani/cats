import React from 'react'
import {Spinner, Circle } from "../styles";

export const Loading:React.FC = () => {
    return (
        <Spinner>
            <Circle />
        </Spinner>
    )
}