import { FiDollarSign } from "react-icons/fi";
const Course = ({course}) => {
    const {course_name, course_details, img} = course;
    return (
        // <div className="float-left mx-2 bg-white w-72 mb-8 rounded-lg">
        <div className="mx-2 bg-white w-72 mb-8 rounded-lg">
            <div className="w-64 h-36 my-3 mx-4">
                <img src={img} className="rounded-lg w-64 h-36"/>
            </div>
            <div className="w-64 my-3 mx-4 space-y-2">
            <div className="text-lg font-semibold">{course_name}</div>
            <div className="text-base text-slate-400">{course_details}</div>
            <div className="flex">
                <FiDollarSign></FiDollarSign>
                <div className="text-slate-400"> Price : </div>
            </div>
            </div>
            
        </div>
    );
};

export default Course;