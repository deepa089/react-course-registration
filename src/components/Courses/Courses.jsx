import { useEffect, useState } from "react";
import Course from "../Course/Course";

// import 'PropTypes' from 'prop-types';
const Courses = () => {
  const [coursesList, setCourses] = useState([])

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div className="w-3/4">
            {
                coursesList.map((cl,idx) => <Course key={idx} course={cl}></Course> )
            }
        </div>
    );
};

export default Courses;