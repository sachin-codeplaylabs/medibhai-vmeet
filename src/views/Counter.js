import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const CounterView = (props) => {

    return (
        <section>
            <Button onClick={props.setCounter}>Click here</Button>
        </section>
    )
}

export default CounterView;