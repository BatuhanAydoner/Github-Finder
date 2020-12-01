import React from 'react'
import loading from './loading.gif'

const Loading = (props) => {
    return (
        <div>
            <React.Fragment>
                <img src={loading} alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
            </React.Fragment>
        </div>
    )
}

export default Loading;