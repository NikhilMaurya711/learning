import React from 'react';
import '../css/Greviance.css'

class Greviance extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className="left-side-column">
                    <div className="form-data">
                        <div className="control-data">

                            <div><label>Customer ID:</label></div>
                            <div><input
                                className="Customer-ID"
                                type="text"
                            /></div>
                        </div>
                        <div className="control-data">

                            <div><label>Customer Name:</label></div>
                            <div><input
                                type="text"
                            /></div>
                        </div>
                        <div className="control-data">


                            <div><label>Email Address:</label></div>
                            <div><input
                                type="text"
                            /></div>
                        </div>

                        <div className="control-data">

                            <div><label>Mobile Number:</label></div>
                            <div><input
                                type="text"
                            /></div>
                        </div>

                        <div className=" subject">

                            <div><label>Subject:</label></div>
                            <div className="subject-div-input">
                                <textarea
                                    className="subject-input"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            <hr className="hr-line"/>
                <div className="right-sidebar-comment">
                    <div className="description">

                        <div><label>Subject:</label></div>
                        
                        <div className="description-div-input">
                            <textarea
                                className="description-input"
                            />
                        </div>
                    </div>
                    
                </div>
          
            </div>


        )
    }
}

export default Greviance;