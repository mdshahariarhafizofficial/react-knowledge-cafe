import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { author,title, posted_date, hashtags, cover, author_img } =
    blog;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={cover}
            alt=""
          />
        </figure>
        <div className="card-body">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-12" src={author_img} alt="" />
                    <h3>{author}</h3>
                </div>
                <div><p>{posted_date}</p></div>
            </div>
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div>
            {
                hashtags.map( tag => <div key={tag} className="badge badge-outline bg-gray-200 font-bold mr-3">{tag}</div>)
            }
          </div>
          <div className="card-actions mt-5 justify-between">
            <button className="btn btn-primary">Mark as read</button>
            <button className="btn bg-white border-0 hover:shadow-none"><FaBookmark size = {35} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
