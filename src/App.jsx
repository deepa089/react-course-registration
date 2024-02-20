import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Courses/Courses';

function App() {
  // const [count, setCount] = useState(0)
  



  return (
    <div className='bg-slate-100'>
        <h1 className='text-center'>Course Registration</h1>
        <div className='flex flex-row mx-8 md:flex-row'>
          <Courses></Courses>
          <Bookmarks></Bookmarks>
        </div>
    </div>
  )
}

export default App
