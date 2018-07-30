import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Post_or_Bid.css'

class Post_or_Bid extends Component {

    render() {
        return (

            <div id="bidpage">
                <h3 id="bidTitle" >
                    How can we help you ?
                </h3>

                <div id="btngroup">
                    <Link to ="/bidpage">
                    <   button type='button' id="bid" className = 'btn btn-lg'>Bid</button>
                    </Link>
                    
                    <Link to="/postpage">
                        <button type='button' id="postjob" className = 'btn btn-lg '>Post a Job</button>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Post_or_Bid;