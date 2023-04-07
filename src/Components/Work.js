import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';


const Work = () => {
    return (
        <div>
            <div className='word-container'>
                <h1 className='project-heading'>Projects</h1>
                <div className="poject-container">
                    {WorkCardData}
                </div>
            </div>
        </div>
    )
}

export default Work