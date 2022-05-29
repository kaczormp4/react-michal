import React, { FC } from 'react'
import { ITypesComponentProps } from './types'


const TypesComponent: FC<ITypesComponentProps> = ({ id, name, error, data }) => {
    return (
        <div>{id}</div>
    )
}
export default TypesComponent