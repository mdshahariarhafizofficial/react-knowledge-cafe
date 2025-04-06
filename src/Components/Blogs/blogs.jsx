import { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({blogsFetch}) => {
    const blogs = use(blogsFetch);
    console.log(blogs);
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-3">Total Blogs: {blogs.length}</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    blogs.map( blog => <Blog 
                        key={blog.id} 
                        blog={blog}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;