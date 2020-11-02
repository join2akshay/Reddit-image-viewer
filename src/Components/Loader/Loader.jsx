import React from 'react'
import { Spinner } from 'reactstrap'

export default function Loader() {
    return (
        <div className='mt-5'>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="dark" />
      </div>
    )
}
