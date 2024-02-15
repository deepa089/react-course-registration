const Courses = ({coursesList}) => {

    return (
        <div>
            {
                coursesList.map(cl => console.log(cl.id))
            }
        </div>
    );
};

export default Courses;