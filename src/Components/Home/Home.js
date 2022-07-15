import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <section className='home' >
                <div className='container home-l' >
                    <div className='row'>
                        <div className='col-xl-6 md-6 sm-12 xs-12'>
                            <div className='home-h'>
                                <h1>Stay curious.</h1>
                                <span>Discover stories, thinking, and expertise </span>
                                <span>from writers on any topic. </span>
                                <button className='btn button-h'>Start reading</button>
                            </div>
                        </div>
                        <div className='col-xl-6 md-6 sm-12 xs-12'>
                            <div className='home-r'>
                                right side
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr style={{ marginTop: '-1px' }} />

        </>
    )
}

export default Home