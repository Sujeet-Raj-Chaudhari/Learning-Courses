import React, {useState} from 'react';
import Form from "./Form";
import "./Body.css"
import CourseGallery from './CourseGallery';
import LoadingBar from 'react-top-loading-bar'

function Body() {

  const pageSize= 6;
  const[progress, setProgress] = useState(0);
  return (
    <div className="blogs_body">
        <Form />
        <div>
          <LoadingBar height={3}
            color="#f11946"
            progress={progress}
          />
        </div>
        <CourseGallery setProgress={setProgress} pageSize={pageSize}/>
    </div> 
  );
}

export default Body;
