import React from 'react';
import './Tranding.css'

function Tranding() {
    return (

        <>
            <div className='container'>
                <div className='logo'>
                    <p><svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="ix y"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                        <span>Tranding on medium</span>
                    </p>
                </div>

                <div className='section'>
                    <div className='row'>
                        <div className='col-xl-4 col-md-6 col-sm-12'>
                            <div className='first'>
                                <span>01</span>

                                <img src='https://miro.medium.com/fit/c/40/40/1*Frt2pRKkkyj4Kfr02biHGw.jpeg' />
                                <span>Tom cooper</span>
                                <p>Ukraine War, 10–11 July 2022</p>
                                <span>Jul 12·7 min read</span>
                            </div>
                            {/* second */}
                            <div className='first' style={{ marginTop: '30px' }}>
                                <span>04</span>

                                <img src='https://miro.medium.com/fit/c/40/40/1*Frt2pRKkkyj4Kfr02biHGw.jpeg' />
                                <span>StarkWare</span>
                                <p>Part 1: StarkNet Sovereignty: A Decentralization Proposal</p>
                                <span>Jul 12·7 min read</span>
                            </div>

                        </div>
                        <div className='col-xl-4 col-md-6 col-sm-12'>
                            <div className='second'>
                                <span>02</span>

                                <img src='https://miro.medium.com/fit/c/40/40/1*0oIJdWxqjL9Y6P0B0J6Syw.jpeg' />
                                <span>Nick Atwood in Sports Raid</span>
                                <p>The Hidden Motive Behind Kevin Durants’ Trade Request</p>
                                <span>Jul 12 ·4 min read</span>
                            </div>
                            {/* second */}
                            <div className='second' style={{ marginTop: '20px' }}>
                                <span>05</span>

                                <img src='https://miro.medium.com/fit/c/20/20/1*pKOfOAOvx-fWzfITATgGRg.jpeg' />
                                <span>Tim Denning in The Startup</span>
                                <p>High Performers Don’t Quit Jobs — They Quietly Quit These Things </p>
                                <span>Jul 1 .6 min read <svg class="jt" width="15" height="15"
                                    viewBox="0 0 15 15" aria-label="Member only content">
                                    <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z">
                                    </path></svg>
                                </span>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 col-sm-12'>
                            <div className='third'>
                                <span>03</span>

                                <img src='https://miro.medium.com/fit/c/20/20/1*Oa7aZoW8TPZrQjlKYzH5dg.jpeg' />
                                <span>Ev Williams</span>
                                <p>New Decade, New Ideas</p>
                                <span>Jul 12 ·4 min read</span>
                            </div>

                            {/* second */}
                            <div className='third' style={{ marginTop: '30px' }}>
                                <span>06</span>

                                <img src="https://miro.medium.com/fit/c/40/40/1*abL05JgnexvPGkOk3Y9PaA.jpeg" />
                                <span>Blake Lemoine</span>
                                <p>Is LaMDA Sentient? — an Interview</p>
                                <span>Jun 11· 20 min read</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal' />
        </>
    )
}

export default Tranding;