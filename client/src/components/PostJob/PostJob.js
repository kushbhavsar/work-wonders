import React, { Component } from 'react';
import './PostJob.css'

class PostJob extends Component {

    render() {
        return (

            <div id="bidpage">
                <h3 id="bidTitle" >
                    How can we help you ?
                </h3>

                <div id="btngroup">
                    <button type='button' id="bid" className = 'btn btn-lg'>Bid</button>
                    <button type='button' id="postjob" className = 'btn btn-lg '>Post a Job</button>
                </div>
            </div>

        );
    }
}

export default PostJob;