import { useEffect, useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses';

function App() {
  // const [count, setCount] = useState(0)
  const [courses, setCourses] = useState([])
  useEffect( () => {
      fetch('coourses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  });



  return (
    <div className='bg-slate-200'>
        <h1 className='text-center'>Course Registration</h1>
        <div className='w-3/4'>
            <Courses coursesList={courses}></Courses>
        </div>
        <div className='w-1/4'></div>
    </div>
  )
}

export default App
