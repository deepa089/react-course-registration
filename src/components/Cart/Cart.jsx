import React from 'react';

const Cart = ({cart}) => {
    const {course_name} = cart ;
    return (
        <div>
            <li>{course_name}</li>
        </div>
    );
};

export default Cart;