import React, { Component } from 'react';
import "./Form.css"
import axios from 'axios'

class Form extends Component {
    state = {
        courseName: "",
        title: "",
        description: "",
        thumbnail: "",
        author: "",
    }
    
      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      };

      createCourse =(event)=>{
          event.preventDefault();

          const courseRegistered ={
            courseName: this.state.courseName,
            title: this.state.title,
            description: this.state.description,
            thumbnail: this.state.thumbnail,
            author: this.state.author,
        };

        axios.post('http://localhost:5000/app/courseEntry', courseRegistered)
        .then(response => console.log(response.data))

        this.resetUserInputs();

      };

        resetUserInputs=()=>{
            this.setState({
                courseName: "",
                title: "",
                description: "",
                thumbnail: "",
                author: ""

            });

    };

    

    render(){
        function refreshPage(){
            window.location.reload(false);
        }
        return (
            <div className="form_body">
                <h1>New Course Entry</h1>
                <form onSubmit = {this.createCourse}>
                   <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Course Name</label>
                       <input type="text"
                       name="courseName" 
                       value={this.state.courseName} 
                       onChange = {this.handleChange}
                       className="form-control" 
                       id="exampleInputEmail1" 
                       aria-describedby="emailHelp" 
                       />
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                       <input type="text"
                       name="title" 
                       value={this.state.title} 
                       onChange = {this.handleChange}
                       className="form-control" id="exampleInputPassword1" 
                       />
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                       <textarea
                       name="description" 
                       value={this.state.description} 
                       onChange = {this.handleChange}
                       className = "form-control" 
                       id = "myBox" rows = "5"></textarea>
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Thumbnail</label>
                       <input type="url"
                       name="thumbnail" 
                       value={this.state.thumbnail} 
                       onChange = {this.handleChange}
                       className="form-control" id="exampleInputPassword1" 
                       />
                   </div>
                   <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
                       <input
                       name="author" 
                       value={this.state.author} 
                       onChange = {this.handleChange}
                       type="text" className="form-control" id="exampleInputPassword1" />
                   </div>
                   
                   <button type="submit" className="btn btn-primary" onClick={refreshPage}>Create The Entry</button>
               </form>
            </div>
         );
    }
  
}

export default Form;
