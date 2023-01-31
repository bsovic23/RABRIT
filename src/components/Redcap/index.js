import React from 'react';

function Redcap() {
    return(
        <section class="redcap">
            <h2>Division of Infectious Diseases REDCap FAQ answered by Brit</h2>

            <div class="redcap-faq">
                <div class="redcap-question">
                    <h3>My REDCap project is missing?</h3>
                </div>
                
                <div class="redcap-answer">
                <p>
                    1. The chart string may have expired. Contact the member in the Administrative Finance Department 
                    that is in charge of chart strings. The owner of the REDCap Project may have to re-delagate 
                    him/her to enter a new valid chart string.
                    <br />
                    <br />
                    2. The project may have been accidently deleted, in which case you will have to re upload the 
                    most recent data dictionary and data backup as a new project
                </p>
                </div>
            </div>

            <div class="redcap-faq">
                <div class="redcap-question">
                    <h3>How do I add a user to a REDCap project?</h3>
                </div>
            
                <div class="redcap-answer">
                <p>
                    Only the user with owner/manager abilities can add/edit someone. To add you will click the hyperlink
                    'here' on the main REDCap page and login with your username and password. 
                    
                    To add: Under each project you can add an individual by clicking 'Add User'
                </p>
                </div>
            </div>

            <div class="redcap-faq">
                <div class="redcap-question">
                    <h3>How do I edit REDCap user privledges?</h3>
                </div>
            
                <div class="redcap-answer">
                <p>
                    Only the user with owner/manager abilities can edit someones privledges. To edit you will click
                    the hyperlink 'here' on the main REDCap page and login with your username and password. 

                    To edit privledges: Click the person on the far right to edit
                </p>
                </div>
            </div>

            <div class="redcap-faq">
                <div class="redcap-question">
                    <h3>As an ownder/manager of a project what should I always do:</h3>
                </div>
            
                <div class="redcap-answer">
                <p>
                    You should always save the most recent data dicitonary and export the data on the same day periodically (I did this every Friday).

                    In case you lose your project unexpectantly, you will have this backup and backup data as a way to 'undo' the mistake.
                </p>
                </div>
            </div>

        </section>
    )
};

export default Redcap;