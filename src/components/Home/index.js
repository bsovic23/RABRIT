import React from 'react';

function Home() {
    return(
        <section class="home">
            <div class="home-about">
                <h2>About</h2>
                <h3>Education</h3>
                    <ul>
                        <li>Certificate: Columbia University Full Stack Web Development</li>
                        <li>Graduate Degree: Tulane University, MPH - Epidemiology</li>
                        <li>Undergraduate Degree: Syracuse University, BS - Public Health</li>
                    </ul>
                <h3>Occupation</h3>
                <p>
                    Data Analysis and Managment for the Infectious Diseases Department of Medicine at Columbia University Irving Medical Center (Current)
                </p>
                <h3>What is RABRIT</h3>
                <p>
                    RABRIT (Research Assistant BRIT) was built to continue processes and add additional processes that may be of use to different units/PIs/clinicians.
                </p>
            </div>

            <div class="home-site">
                <h3>Tab Descriptions</h3>
                <ul>
                    <li>REDCap FAQ: I answer a lot of REDCap information here regarding my role with REDCap</li>
                    <li>Study: Here you can find a list of active studies the Division of Infectious Diseases is currently recruiting for</li>
                    <li>Questions: Here you can submit any question to me and I will respond</li>
                </ul>
            </div>
        </section>
    )
};

export default Home;