import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./CourseGallery.css"
import CourseItems from './CourseItems';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const CourseGallery = (props) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateCourses = async () =>{
    props.setProgress(10);
    setLoading(true);

    let data = await axios.get('http://localhost:5000/app/')
    .then((response) => {
      return response.data;
    })
    let parsedData = await data;
    console.log(parsedData);

    props.setProgress(70);
    setCourses(parsedData);

    setTotalResults(parsedData.length)
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() =>{
    updateCourses();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () =>{
    setPage(page + 1);

    let data = await axios.get('http://localhost:5000/app/')
    .then((response) => {
      console.log(JSON.stringify(response.data));

      return response.data;
     
    })

    let parsedData = await data;
    setCourses(parsedData);
  }
  
  return (
    <>
      {loading && <Spinner />}

      {/* <InfiniteScroll 
        dataLength = {courses.length}
        next = {fetchMoreData}
        hasMore={courses.length !== totalResults}
        loader ={<Spinner />}
      > */}
        <div className="container">
          <div className="row">
            {courses.map((element) =>{
              return(
                <div className="col-md-4 my-3" key={element.url}>
                  <CourseItems
                    title={element.title}
                    courseName={element.courseName}
                    description={element.description}
                    thumbnail={element.thumbnail}
                    author={element.author}
                  />
                </div>
              )
            })}
          </div>
        </div>

      {/* </InfiniteScroll> */}
    </>
  );
};

export default CourseGallery;
