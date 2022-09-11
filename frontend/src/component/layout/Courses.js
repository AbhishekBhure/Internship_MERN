import React, { useEffect } from 'react'
import "./Courses.css"
import Course from "./Course"
import { getCourse } from "../../actions/courseAction"
import { useDispatch, useSelector } from "react-redux"

const Courses = () => {
    const dispatch = useDispatch();
    const { courses, } = useSelector(state => state.courses);
    useEffect(() => {
        dispatch(getCourse())
    }, [dispatch])

    // const course = {
    //     title: "titttle1",
    //     duration: "2 hours"
    // }
    return (
        <div className='courses'>
            <h3>Welcome to freeCodeCamp.org</h3>
            <p>"I have not failed. I've just found 10,000 ways that wont work." <br /><span className='span'><i>- Thomas A. Edison</i></span></p>

            {courses && courses.map(course => (
                <Course key={course._id} course={course} />
            ))}


        </div>

    )
}

export default Courses