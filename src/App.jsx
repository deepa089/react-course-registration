import { useState } from 'react';
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Courses/Courses';
import Message from './components/Message/Message';

function App() {
  // const [count, setCount] = useState(0)

  // const [remainingHour, setRemainingHour] = useState(20,[]);
  const [cartList, setCart] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState("")
  // let message = "i m here";

  const handlerSelectCourse = (course) => {
    setMessage("");
    const isExistCourse = cartList.find(crt => crt.id  == course.id)
    if(isExistCourse){
      setMessage("Multiple course can not be added");
      return false;
    }
    const addToCart = [...cartList, course];
    

    const newTotalHour = totalHour + course.credit;
    if (newTotalHour > 20) {
      setMessage("You can't take this course. Course Exceed.")
      return false;
    }
    setCart(addToCart);
    setTotalHour(newTotalHour);
    setTotalPrice(totalPrice + course.price);
    // const remainHour = 20 - (totalHour + course.credit);
    console.log(totalHour);
    // console.log(remainHour); 
    // setRemainingHour(20 - totalHour);
  }


  return (
    <div className='bg-slate-100'>
      <h1 className='text-center'>Course Registration</h1>
      <div className='flex flex-row mx-8 md:flex-row'>
        <Courses handlerSelectCourse={handlerSelectCourse}></Courses>
        <Bookmarks totalPrice={totalPrice} totalHour={totalHour} cartList={cartList} ></Bookmarks>
      </div>
      { message && <Message message={message}></Message>
      }
    </div>
  )
}

export default App
