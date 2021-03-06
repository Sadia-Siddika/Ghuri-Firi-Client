import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        const url = 'https://creepy-village-08269.herokuapp.com/event';

        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    },[]);
    return (
        <div className="container my-5 shadow p-3">
            <h1 className="text-center">OUR BLOGS</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4">
                {
                    blogs.map(blog => <div className="col" key={blog._id}>
                        <div className="card h-100 border-success">
                            <img src={blog.img} className="card-img-top img-fluid doctorsCard" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <h5 className="card-title">{blog.location}</h5>
                                <Link to={`/detailsBlog/${blog._id}`}><button className="btn btn-secondary p-2 fw-bold text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;