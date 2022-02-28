import React from 'react'

const CourseItems = (props) =>{
    let{ courseName, title, description, author, thumbnail } = props;
    return(
        <div>
            <div className="card" style={{height: "502px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",}}>
                <img style = {{height: "286px"}} src={thumbnail} alt="" />
                <div className="card-body">
                    <h4 className ="card-title">{courseName}</h4>
                    <h5 className="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {author}
                        </small>
                    </p>
                    <a href="/" style={{background: "#051937"}} className="btn btn-dark">enroll</a>
                </div>
            </div>
        </div>
    );
};

export default CourseItems