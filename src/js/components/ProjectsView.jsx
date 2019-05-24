import React, { Component } from "react";
import YouTube from 'react-youtube';
import '../../styles.css'

class ProjectsView extends Component {

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div className="centered-container">
                <div className="page-header">
                    <h1>Projects</h1>
                    <hr/>
                </div>
                <div>
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
                <div>
                    <p>More to come...</p>
                </div>
            </div>
        );
    }
}

export default ProjectsView;