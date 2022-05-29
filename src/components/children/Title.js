import React from 'react'
import Content from './Content'

const Title = ({ data }) => {
    return (
        <>
            <div> Title {data.id}</div>
            <Content name={data.name} />
        </>
    )
}
export default Title