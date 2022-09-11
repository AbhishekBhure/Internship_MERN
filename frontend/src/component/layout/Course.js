import React from 'react'
import "./Courses.css"
const course = ({ course }) => {
    return (
        <div className='course'><p>{course.title} <span>duration ({course.duration} hours) </span></p></div>
    )
}

export default course