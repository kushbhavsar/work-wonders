import React, { Component } from 'react';

class PostJob extends Component {

    render() {
        return (

            <div>
                <h3>
                    How can we help you ?
                </h3>

                <button type='button' className = 'btn btn-primary'>Bid</button><br/><br/>
                <button type='button' className = 'btn btn-primary'>Auction</button>
            
            </div>

        );
    }
}

export default PostJob;