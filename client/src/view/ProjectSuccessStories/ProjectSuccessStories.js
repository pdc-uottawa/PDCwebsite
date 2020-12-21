import React, { useEffect, useState, Fragment } from "react";
import { Button, Container,Segment,Form , List, Header } from "semantic-ui-react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { config } from "../../common/config/config";
let path = config();

const ProjectSuccessStories = (props) => {

  const [image, setImage] = useState([]);
  const [retrievedImageData, getImageData] = useState([]);
  const [retrievedImages, getImages] = useState([]);

    const handleFormSubmit=(e)=>{
        let imageFormObj= new FormData();
        imageFormObj.append("imageData",image[0]);

         path +='images/uploadImage';
        axios({
          url: path,
          method: 'POST',
          data: imageFormObj
        })
          .then((res) => { 
            console.log('Data has been sent to the server');
          })
          .catch(() => {
            console.log('Internal server error');
          });
    };

    const onChangePicture = e => {
      setImage([e.target.files[0]]);
    };
    
    // const getImages =()=>{
    //     path += 'image/getImages'
    //   console.log('getting image');
    //     axios({
    //       url: path,
    //       method: 'GET'
    //     })
    //       .then((response) => {
    //         return response.data;
    //       })
    //     //   .then((data)=>{
    //     //     getDbImages(response.data);
    //     //   })
    //       .catch((e) => {
    //         console.log('Internal server error, not able to retrieve image',e);
    //       });
    // };

    useEffect(() => {
        console.log('getting data');
        path += 'images/getImages'
        console.log('getting image');
        axios({
            url: path,
            method: 'GET'
          })
          .then((response) => {
            return response.data;
           })
          .then((data) => { 
            if(data !== null){
              const files = data.files;
              var imageArray = [];
              var imageCrousel = [];
 
              if(files) {
                  files.forEach(function(file) {

                    imageArray.push(<div><h3>{file.filename}</h3></div>);
                    const url =`http://localhost:8080/images/image/${file.filename}`
                    //   const url =`/images/image/${file.filename}`
                       imageArray.push(<div><img className="sliderimg" src={url} /></div>);
                      // subjectArray.push(<div><button onClick={(file._id)=>deleteImage(file._id)} class="btn btn-danger">Delete</button></div>);
                      });
                    //crousal for images
                   imageCrousel.push(<Carousel>{imageArray}</Carousel>)
              } else {
                imageCrousel.push(<p>No files to show</p>);
              }
              getImages(imageCrousel);
            }
            else{
              console.log("No events");
            }
          })
          .catch((err) => {
            console.log('Internal server error, not able to receive data',err);
          });
      }, []);

    return (
    <Fragment>
      <Segment placeholder>
        <div class="centre">
          <div id="imageCrousal"> 
            {retrievedImages}
          </div>
        </div>
        <div class="center">
          <Form  onSubmit={handleFormSubmit}>
            <Form.Field>
            <label>Choose file</label>
            <input
                name="image"
                onChange={e => onChangePicture(e)}
                type="file"
                placeholder="choose file"
            />
            </Form.Field>
            <Button positive type="submit">
            Upload
            </Button>
        </Form>
        </div>
      </Segment>
    </Fragment>
  );
};

export default ProjectSuccessStories;