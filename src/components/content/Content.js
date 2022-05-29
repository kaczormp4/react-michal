import React, { useEffect, useState } from 'react'
import Error from '../error/Error';
import './Content.css';

const Content = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    // const [status, setStatus] = useState('loading');


    useEffect(() => {
        const url = `https://my-json-server.typicode.com/kaczormp4/rumblefish-api/recommendations/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(() => setError(true))
    }, [])

    console.log(data);
    // @ts-ignore
    // const currentStatus = (status) => {
    //     if (status === 'loading') {
    //         return <>LOADING</>
    //     }
    //     else if (status === 'success') {
    //         return <>success</>
    //     }
    //     else if (status === 'error') {
    //         return <Error />
    //     }

    // }

    if (error) {
        return <Error />
    }

    if (data.length === 0) {
        return <>LOADING...</>
    }

    return (
        <div>
            {/* <button onClick={() => setStatus('loading')}>LOADING</button>
            <button onClick={() => setStatus('success')}>SUCCESS</button>
            <button onClick={() => setStatus('error')}>ERROR</button> */}
            {/* <p>{status}</p> */}
            {/* {currentStatus(status)} */}
            {
                data.map((item) => <div>
                    {item.id}
                    <img src={item.imageURL} />
                </div>)
            }
        </div>
    )
}
export default Content;
