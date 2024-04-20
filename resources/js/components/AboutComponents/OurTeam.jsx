import React from 'react'
import TeamBg from 'imgPath/our-team.jpeg'
import Team1 from 'imgPath/images/team1.jpeg'
import Team2 from 'imgPath/images/team2.jpeg'
import Team3 from 'imgPath/images/team3.jpeg'

function OurTeam() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 mt-5 team-bg'>
            <h3 className='text-center bold clr'>OUR TEAM</h3>
            <hr className='heading-line' />

            <div className='pt-5'>
                <div className='row'>
                    <div className='col-md-3 mb-4'>
                        <img src={Team1} alt="team" width="100%" />
                    </div>
                    <div className='col-md-6 text-justify'>
                <p className='text-justify'>Our Team is composed of Korean Management & Technologies, and Indian Technicians who have been working together harmoniously for years.
With a strong team spirit, we are fully prepared to provide perfect production solutions to meet any customer demand at any time.</p>
                <div className=''>
                    <p><b>Management Team</b><br/>
                        Leveraging Korean Management Principles, we lead in mobile CNC machining, embodying unwavering customer-centric excellence.</p>

                    <p><b>Production Team</b><br/>
Mastering precision and embracing innovation, our exceptional CNC production team leads the industry, transforming ideas into reality with unmatched expertise.</p>

                    <p><b>Quality Control Team</b><br/>
Dedicated to perfection, our QC team ensures unrivalled precision and reliability. With meticulous attention to detail, they safeguard exceptional quality in every component.</p>

                    <p><b>Planning & Development Team</b><br/>
Efficient and strategic, our Planning & Development team ensures seamless operations and optimal resource acquisition.</p>
                    </div>
                </div>
                <div className='col-md-3'>
                        <img src={Team2} alt="team" width="100%" className='mb-4' />
                        <img src={Team3} alt="our team" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurTeam
