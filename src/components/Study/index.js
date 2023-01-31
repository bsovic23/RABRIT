import React from 'react';

const infStudies = [
    {
        studyName: "ARMOR Study: A Study to Follow COVID-19 Antibodies Over Time",
        studyDescription: "We want to assess the baseline and cumulative seroprevalence of SARS-CoV-2 using serological and molecular assays. We will also administer a survey. Findings from this study will inform; 1) our understanding of changing epidemiology of COVID-19; 2) use of serological assays and testing algorithms, and 3) approaches to managing psychosocial stress in the community."
    },
    {
        studyName: "C4671026 - Pfizer Pediatric Paxlovid Study",
        studyDescription: "Pfizer and Columbia University Irving Medical Center are conducting a trial to learn about the safety and effectiveness of an experimental COVID-19 treatment, nirmatrelvir co-packaged with ritonavir, for children with COVID-19 that are at risk of the infection getting worse. Nirmatrelvir/ritonavir has been shown to be effective in fighting SARS-CoV-2 (the virus that causes COVID-19) in laboratory experiments and has been previously evaluated for safety in Phase 1 trials with healthy participants. The US FDA has granted Emergency Use Authorization (EUA) to nirmatrelvir/ritonavir for the..."
    },
    {
        studyName: "HIV Prevention Study",
        studyDescription: "We are looking for HIV-negative individuals 18 to 60 years old who are interested in learning more about HIV prevention research studies. We will ask you to complete a brief questionnaire to find out if we can schedule you for a one-on-one, 1.5-hour education visit to learn about the research we do. The education visit will help you decide if you want to participate in one of our studies. You will be compensated for the visit. Your responses to this questionnaire will be kept strictly confidential."
    },
    {
        studyName: "Screening for COVID-19 Vaccine, Prevention and Treatment Research Studies",
        studyDescription: "We are looking for individuals over 18 years old who are interested in learning more about COVID-19 prevention research studies. We will ask you to complete a brief questionnaire to find out if you may be eligible for one of our studies. We can then schedule a phone call, teleconference, or in-person education visit so you can learn about the research we do and decide if you want to participate in one of our studies. Your responses to this questionnaire will be kept strictly confidential."
    }
];

function Study() {
    return(
        <section class="study">
            <h2>Current Studies</h2>
            {infStudies.map((studies) => 
                <li key={studies.studyName}>
                    <h3>{studies.studyName}</h3>
                        <p>{studies.studyDescription}</p>
                </li>
            )}
        </section>
    )
};

export default Study;