import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
const Course = ({ course, handlerSelectCourse }) => {
    const { course_name, course_details, img, price, credit } = course;
    return (
        // <div className="float-left mx-2 bg-white w-72 mb-8 rounded-lg">
        <div className="mx-2 bg-white w-72 mb-8 rounded-lg">
            <div className="w-64 h-36 my-3 mx-4">
                <img src={img} className="rounded-lg w-64 h-36" />
            </div>
            <div className="w-64 my-3 mx-4 space-y-2">
                <div className="text-lg font-semibold h-12">{course_name}</div>
                <div className="text-base text-slate-400 h-20">{course_details}</div>
                <div className="flex justify-between">
                    <div className="flex">
                        <FiDollarSign></FiDollarSign>
                        <div className="text-slate-400 ml-2"> Price : {price} </div>
                    </div>
                    <div className="flex">
                        <IoBookOutline />
                        <div className="text-slate-400 ml-2">Credit : {credit}hr</div>
                    </div>
                </div>

            <button  onClick={()=>handlerSelectCourse(course)} className="w-full h-10 font-semibold text-white bg-blue-500 rounded-lg border-blue-500">Select</button>
            </div>

        </div>
    );
};

export default Course;