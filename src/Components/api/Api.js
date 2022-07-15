import React from 'react';
import './Api.css'

function Api() {
    return (
        <>
            <div className='container'>
                <div className='api'>
                    <div className='row'>
                        <div className='col-xl-8 col-md-12 col-sm-12'>
                            left side api
                        </div>


                        {/* right side  */}
                        <div className='col-xl-4 col-md-12 col-sm-12'>
                            <div className='right-side'>
                                <p> discover more of what matter to you</p>
                                <button>self </button> <button>relationship </button>
                                <button>Data science </button>
                                <button>programming </button>
                                <button>productivty </button>
                                <button>javasript </button>
                                <button>machine learning </button>
                                <button>politics </button>
                                <button>health </button>
                                <hr />
                            </div>
                            <div className='down'>
                                <span>Help</span>
                                <span>Status</span>
                                <span>Writer</span>
                                <span>Blog</span>
                                <span>Careers</span>
                                <span>Privacy</span>
                                <span>Terms</span>
                                <span>About</span>
                                <span>Knowable</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Api