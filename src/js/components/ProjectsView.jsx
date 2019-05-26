import React, { Component } from "react";
import YouTube from 'react-youtube';
import '../../styles.css'
import streamosphere from '../../../resources/streamosphere.png';

class ProjectsView extends Component {

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <div className="centered-container">
                <div className="page-header">
                    <h1>Projects</h1>
                    <hr className="close-hr"/>
                    <p><a href="https://github.com/kellyfreet13">My github</a></p>
                </div>
                <div className="project-item">
                    <h3 className="title">Engineering Honors Thesis</h3>
                    <p className="subtitle">Image Recognition and Object Manipulation in Autonomous Vehicles</p>
                    <p>
                        The focus of my Honors Thesis was on Computer Vision. The larger, ongoing
                        project under the direction of Dr. Ponce sought to create a network of
                        autonomous vehicles equipped with robotic arms whose goal was to communicate
                        amongst each other to move a variable-weight box. In other words, the box could require
                        one to many vehicles to move it. My finer focus of the project was on the
                        recognition of a specified goal object using Aruco markers, the calculation of distance vectors
                        related to that object, and the subsequent movement towards the object. I
                        used Python and OpenCV for computer vision utilities, which ran on a Raspberry
                        Pi onboard the vehicle. I used a Raspberry Pi Camera in order to recognize
                        images.
                    </p>
                    <YouTube
                        videoId="Bi4lUakDG2w"
                        opts={opts}
                    />
                </div>
                <div className="project-item">
                    <h3 className="title">Streaming Service</h3>
                    <p className="subtitle-close">Senior Project &middot; Backend with some Full-Stack</p>
                    <p className="subtitle"><a href="https://github.com/kellyfreet13/streamosphere">Code Here</a></p>
                    <p>
                        Our team of 4 students built a web application that streams user media files stored on our
                        cloud servers. The idea was to be a mix of netflix and google drive, while focusing on
                        creating a user friendly interface. My focus on the project was everything API-related.
                        I wrote the <b>RESTful API</b> service in <b>Go</b> with <b>gin-gonic</b> for handling http requests.
                        I created the collections and sample documents in <b>MongoDB</b>, and also used the
                        Go library <b>mongo-go-driver</b> to update, store, and retrieve data. Although the
                        documentation for the mongo-go-driver was very immature - few examples with only
                        simple use cases - I learned a lot from having to look directly at source code to understand
                        how to accomplish what I wanted. I also wrote a good portion of the frontend
                        in <b>React.js</b> and <b>integrated API calls</b> that I wrote into the frontend.
                        I wrote all the server logic on <b>AWS EC2</b> and communicated with our <b>AWS S3</b> to
                        fetch and store user media.
                    </p>
                    <img
                        src={streamosphere}
                        className="col"
                        id="streamosphere-img"
                    />
                    <div className="subtitle center-text">The home view in our web-app.</div>
                </div>
                <div className="project-item">
                    <h3 className="title">Facial Expression Recognition</h3>
                    <p className="subtitle-close">Machine Learning</p>
                    <p className="subtitle"><a href="https://github.com/kellyfreet13/FacialRecognition">Code Here</a></p>
                    <p>
                        I implemented a VGG-style facial expression classifier with <b>Python</b> and <b>Keras</b>.
                        I used Keras' data augmentation tools and trained on a VM instance
                        on <b>Google Cloud Platform</b> for their inexpensive GPU costs.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="title">N-Queens Solver</h3>
                    <p className="subtitle-close">Artificial Intelligence</p>
                    <p className="subtitle"><a href="https://github.com/kellyfreet13/NQueens">Code Here</a></p>
                    <p>
                        A genetic solution to the N-Queens problem using <b>Python</b> for my Artificial Intelligence
                        course.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="title">Encryption Malware</h3>
                    <p className="subtitle-close">Security</p>
                    <p className="subtitle"><a href="https://github.com/kellyfreet13/Encryption-Malware">Code Here</a></p>
                    <p>
                        This project uses <b>Python</b> to recursively encrypt files in a directory,
                        so don't run it in your C drive!
                        I used RSA to encrypt the public and private keys, and AES in CBC mode for file encryption.
                    </p>
                </div>
            </div>
        );
    }
}

export default ProjectsView;