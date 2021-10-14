import React from 'react'
import data from '../data/data'

const Hero = () => {
    return (
        <div className="min-w-full">
            <img style={{aspectRatio: '16/9', minWidth: "100%"}} className="" src={data[0].fields.images[0].fields.file.url} alt={data[0].fields.name} />
        </div>
    )
}

export default Hero
