const express = require('express')
const router = express.Router()
const coursesTemplateCopy = require('../models/CourseDetails')

router.post('/courseEntry', (request, response) => {
    const _courseEntry = new coursesTemplateCopy({
        courseName: request.body.courseName,
        title: request.body.title,
        description: request.body.description,
        thumbnail: request.body.thumbnail,
        author: request.body.author,
    });

    _courseEntry.save()
    console.log(request.body)
    response.json(request.body)
})

router.get('/', (request, response) => {
    coursesTemplateCopy.find({ })
      .then((data)  =>{
        console.log('Data: ', data);
        response.json(data);
      })
      .catch((error) => {
        console.log('error');
      });
  });

router.get("/signin");
module.exports = router