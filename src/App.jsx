import { Suspense, useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/blogs'
import Navbar from './Components/Navbar/Navbar'

// Fetch Data
const blogsFetch = fetch('/public/blogs.json')
  .then(res => res.json())

function App() {

  // Handle Bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (bookmarksData)=>{
    setBookmarks([...bookmarks, bookmarksData])
  };

  // Handle Reading Time
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = (blog) => {
    setReadingTime(readingTime+blog.reading_time)
    removeBookmark(blog.id)
  };

  // Remove Bookmark
  const removeBookmark = (id) => {
    const filterBookmarks = bookmarks.filter(mark => mark.id !== id);
    setBookmarks(filterBookmarks);
    
  }

  return (
    <>
      <div className='w-11/12 mx-auto'>


        {/* Navbar */}
        <Navbar></Navbar>

        {/* Blogs & Sidebar */}
        <div className='flex justify-between bg-base-100 shadow-sm my-5 p-5 gap-5 rounded-sm'>
          <div className="blogs w-[75%] shadow-sm rounded-sm p-5">
            <Suspense fallback={<h2>Blogs Loading....</h2>}>
              <Blogs 
              blogsFetch = {blogsFetch}
              handleBookmarks = {handleBookmarks}
              handleReadingTime = {handleReadingTime}></Blogs>
            </Suspense>
          </div>
          <div className="sidebar w-[25%] shadow-sm rounded-sm">
            <div className='border-b-2 border-gray-300 p-5 flex justify-between items-center'>
              <h2 className='text-lg text-blue-600 font-bold'>Reading Time: {readingTime}</h2>
              <h2 className='text-lg text-blue-600 font-bold'>Bookmarks: {bookmarks.length}</h2>
            </div>
            <div className='p-5'>
              {
                bookmarks.map( bookmark => <p className='p-3 bg-blue-600 text-white font-bold rounded-md my-3' key={bookmark.id}>{bookmark.title}</p>)
              }
            </div>
          </div>
        </div>



      </div> 
    </>
  )
}

export default App
