import { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({blogsFetch, handleBookmarks, handleReadingTime}) => {
    const blogs = use(blogsFetch);
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-3">Total Blogs: {blogs.length}</h1>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    blogs.map( blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handleBookmarks = {handleBookmarks}
                        handleReadingTime = {handleReadingTime}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;