const Course = ({course}) => {
    const {course_name, course_details} = course;
    return (
        <div className="float-left mx-2 bg-white w-72 mb-8 rounded-lg">
            <div className="text-lg font-semibold">{course_name}</div>
            <div className="text-base text-slate-400">{course_details}</div>

        </div>
    );
};

export default Course;