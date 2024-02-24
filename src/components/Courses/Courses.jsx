import { useEffect, useState } from "react";
import Course from "../Course/Course";

// import 'PropTypes' from 'prop-types';
const Courses = ({handlerSelectCourse}) => {
  const [coursesList, setCourses] = useState([])

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div className="w-3/4 grid grid-cols-3">
            {
                coursesList.map((cl,idx) => <Course key={idx} course={cl} handlerSelectCourse={handlerSelectCourse}></Course> )
            }
        </div>
    );
};

export default Courses;