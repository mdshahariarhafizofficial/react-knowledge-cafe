import { Suspense } from 'react';
import './App.css'
import Blogs from './Components/Blogs/blogs'
import Navbar from './Components/Navbar/Navbar'

// Fetch Data
const blogsFetch = fetch('/public/blogs.json')
  .then(res => res.json())

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto'>


        {/* Navbar */}
        <Navbar></Navbar>

        {/* Blogs & Sidebar */}
        <div className='flex justify-between bg-base-100 shadow-sm my-5 p-5 gap-5 rounded-sm'>
          <div className="blogs w-[75%] shadow-sm rounded-sm p-5">
            <Suspense fallback={<h2>Blogs Loading....</h2>}>
              <Blogs blogsFetch = {blogsFetch}></Blogs>
            </Suspense>
          </div>
          <div className="sidebar w-[25%] shadow-sm rounded-sm">
            Sidebar
          </div>
        </div>



      </div> 
    </>
  )
}

export default App
