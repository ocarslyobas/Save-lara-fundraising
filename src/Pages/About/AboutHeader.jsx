import React from 'react';
import "./about.css";



const About = ()=> {
    return ( <div className='aboutcontent'>

                <div className='headertext'>
                    <h1>About Lara </h1>
                </div>
                <div className='contentbox'>
                    <div className='textwrapper' >
                        <p id='abouttext'>
                            
                                Lara is a young boy from Edo State, Nigeria who had been diagnosed
                                with a rare medical condition that required urgent attention. 
                                Unfortunately, Lara's family are poor and could not afford the 
                                expensive medical treatment he needs. They had exhausted all
                                their savings and borrowed as much as they could from family
                                and friends, but they are still short of 2 million naira. 
                                Lara's health is deteriorating rapidly, and the time is running out. 
                                The family reached out to the public for financial assistance,
                                hoping that kind-hearted individuals would come to their aid and help save Lara's life.
                                
                                Lara is a young boy from Edo State, Nigeria who had been diagnosed
                                with a rare medical condition that required urgent attention. 
                                Unfortunately, Lara's family are poor and could not afford the 
                                expensive medical treatment he needs. They had exhausted all
                                their savings and borrowed as much as they could from family
                                and friends, but they are still short of 2 million naira. 
                                Lara's health is deteriorating rapidly, and the time is running out. 
                                The family reached out to the public for financial assistance,
                                hoping that kind-hearted individuals would come to their aid and help save Lara's life.
                                
                               
                        </p>

                    </div>
                    <div className='imgwraper'>
                        <img src="../photo/photo4.jpg" alt="" id='aboutimg' />
                    </div>

                    
                </div>

                {/* <div className="push"></div> */}
               

    </div> );
}

export default About;