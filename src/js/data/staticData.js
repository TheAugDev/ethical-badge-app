// src/js/data/staticData.js
// This file centralizes all static data used throughout the application.

export const legalUpdatesData = [
  {
    date: 'May 15, 2025',
    title: 'New Legislation on Body Camera Footage Retention (TX HB 1234)',
    summary:
      'HB 1234 modifies requirements for body-worn camera footage retention periods for specific incident types. Agencies must update policies by Oct 1, 2025.',
    category: 'Legislation',
    fullText:
      'House Bill 1234, passed during the 89th Texas Legislature, introduces significant changes to the Texas Occupations Code regarding the retention of body-worn camera (BWC) footage. Key provisions include extended retention periods for footage related to incidents involving use of force resulting in serious bodily injury (now 5 years, previously 90 days if no complaint filed), incidents subject to internal affairs investigations (duration of investigation plus 2 years), and footage used in criminal proceedings (until final adjudication and appeals). Agencies are mandated to update their local BWC policies to reflect these changes by October 1, 2025. This legislation aims to enhance transparency and accountability.',
  },
  {
    date: 'Apr 28, 2025',
    title: 'AG Opinion on Use of Force Reporting (KP-0567)',
    summary:
      'Clarifies reporting timelines for certain use of force incidents involving serious bodily injury under new TCOLE rules.',
    category: 'AG Opinion',
    fullText:
      "Attorney General Opinion KP-0567 addresses ambiguities in TCOLE Rule §218.5 concerning the reporting of use of force incidents. The opinion clarifies that the 72-hour reporting window for incidents resulting in serious bodily injury begins from the moment the agency's administration becomes aware of the SBI, not necessarily from the time of the incident itself, particularly if the severity was not immediately apparent. It also reiterates that 'serious bodily injury' should be interpreted consistent with its definition in the Texas Penal Code. Law enforcement agencies should review their use of force reporting protocols to ensure alignment with this clarification.",
  },
  {
    date: 'Mar 10, 2025',
    title: 'Case Law Update: Smith v. Texas DPS - Search & Seizure',
    summary:
      'Recent appellate court ruling impacts vehicle searches based on olfactory evidence. Review implications for probable cause.',
    category: 'Case Law',
    fullText:
      "In Smith v. Texas Department of Public Safety (Tex. App.—Austin, 2025), the Third Court of Appeals issued a ruling that may affect how officers establish probable cause for vehicle searches based solely on the odor of marijuana, especially in light of Texas's hemp laws. The court emphasized that the odor of marijuana, while still a factor, may require additional corroborating evidence to establish probable cause for a search, given the legal similarities in odor between marijuana and hemp. Officers should be mindful of this evolving standard and ensure thorough articulation of all factors contributing to probable cause in their reports. Training on distinguishing factors, if any, and articulation of 'odor plus' factors is recommended.",
  },
  {
    date: 'Feb 01, 2025',
    title: 'TCOLE Rule Change: Mandated IDD Training Hours Increased',
    summary:
      'TCOLE has increased the minimum required hours for Intellectual and Developmental Disabilities (IDD) training in the next cycle.',
    category: 'TCOLE Rule',
    fullText:
      'Effective for the training cycle beginning September 1, 2025, TCOLE Rule §217.11 has been amended to increase the minimum required hours for Intellectual and Developmental Disabilities (IDD) training (Course #4204 or equivalent) from 4 hours to 8 hours for all peace officers. This change reflects a legislative mandate aimed at improving officer interactions with individuals with IDD. The updated curriculum requirements will emphasize practical de-escalation techniques, communication strategies, and community resources. Agencies should plan their training schedules accordingly to meet this new requirement.',
  },
];

export const dilemmaOfTheWeekData = {
  text: 'While off-duty at a local grocery store in your jurisdiction, you witness an individual conceal several high-value items and attempt to leave without paying. You are not in uniform and your firearm is secured in your vehicle. Store security is not immediately visible. What is your primary ethical and procedural consideration under Texas law and general orders?',
  options: [
    'Immediately intervene and attempt to detain the suspect, announcing yourself as an officer.',
    'Prioritize personal safety; call 911 to report the theft in progress and provide a detailed suspect description.',
    'Confront the individual verbally without attempting physical detention, hoping they abandon the items.',
    'Do nothing, as you are off-duty and not equipped to safely intervene.',
  ],
};

export const tcoleMandatesData = [
  {
    id: 'tmd1',
    name: 'Legislative Update (#3188)',
    cycle: '2-year',
    status: 'Pending',
    details:
      'Covers changes in state laws, use of force, de-escalation. Essential for staying current with evolving legal standards and best practices in Texas law enforcement.',
    hours: 4,
  },
  {
    id: 'tmd2',
    name: 'Crisis Intervention Training (CIT) (#1850)',
    cycle: '4-year',
    status: 'Pending',
    details:
      'Focuses on effective interaction with persons experiencing mental health crises. Emphasizes de-escalation techniques and community mental health resources. Crucial for modern policing.',
    hours: 40,
  },
  {
    id: 'tmd3',
    name: 'ALERRT Level 1 (#3311)',
    cycle: 'One-time by 8/31/27, then 16hrs/2yrs',
    status: 'Pending',
    details:
      'Advanced Law Enforcement Rapid Response Training for active shooter events. Level 1 provides foundational tactical skills for immediate response. Ongoing ALERRT training is also required.',
    hours: 16,
  },
  {
    id: 'tmd4',
    name: 'Finding Wellness – Building a Healthier Life (#4202)',
    cycle: '2-year',
    status: 'Pending',
    details:
      'Addresses officer mental and physical well-being, focusing on stress management, resilience, and resources for a healthier lifestyle in a demanding profession.',
    hours: 4,
  },
  {
    id: 'tmd5',
    name: 'Intellectual & Developmental Disabilities (IDD) Training (#4204)',
    cycle: 'New Mandate (8hrs)',
    status: 'Pending',
    details:
      'Provides officers with knowledge and skills to effectively identify, interact with, and de-escalate situations involving individuals with IDD. Recently increased to 8 hours.',
    hours: 8,
  },
];

export const ethicalPrinciplesData = [
  {
    name: 'Integrity (Texas LEO Standard)',
    summary: 'Absolute honesty, adherence to moral principles, and incorruptibility.',
    details:
      'In Texas, LEOs are held to a high standard of integrity. This includes truthful testimony, accurate reporting (e.g., offense reports, use of force documentation), rejecting gratuities that could imply influence, and upholding the Law Enforcement Code of Ethics. Any compromise of integrity erodes public trust and departmental credibility. It means doing the right thing, even when no one is watching, and being a role model of ethical conduct.',
  },
  {
    name: 'Fairness & Impartiality (Constitutional Policing)',
    summary: 'Equitable treatment under the law, free from bias or prejudice.',
    details:
      'Texas officers must enforce laws impartially, respecting the constitutional rights of all persons. Decisions (e.g., traffic stops, arrests, investigations) must be based on facts and law, not on race, ethnicity, gender, religion, sexual orientation, socioeconomic status, or other protected characteristics. This aligns with principles of procedural justice, ensuring that all individuals are treated with dignity and respect by law enforcement, fostering community trust and cooperation.',
  },
  {
    name: 'Respect for Dignity (Community Interaction)',
    summary: 'Valuing the inherent worth and rights of every individual.',
    details:
      "Treating all individuals – victims, witnesses, suspects, and community members – with dignity and respect is crucial, even in confrontational situations. This includes professional demeanor, active listening, empathy, and avoiding derogatory language or actions. It's a cornerstone of de-escalation, effective communication, and positive community relations in diverse Texas communities. Respectful interaction builds bridges and enhances legitimacy.",
  },
  {
    name: 'Courage (Moral & Physical)',
    summary: 'Bravery to act rightly, ethically, and protect others, despite risks.',
    details:
      "Physical courage is often required in dangerous calls and volatile situations. Moral courage is equally important: upholding ethical standards, intervening if a fellow officer acts improperly (Duty to Intervene), reporting misconduct, and making tough decisions aligned with law and policy, even under pressure, scrutiny, or when unpopular. It's about standing for what's right.",
  },
  {
    name: 'Service & Duty (Public Trust)',
    summary: 'Selfless commitment to public safety and community well-being.',
    details:
      "The primary duty of a Texas LEO is to serve the community and protect the public. This involves a commitment to problem-solving, proactive policing where appropriate, and a focus on positive outcomes beyond just enforcement. It's about safeguarding the peace, order, and rights of all people within Texas communities, and being a responsible steward of the public trust.",
  },
  {
    name: 'Accountability (Transparency & Responsibility)',
    summary: 'Answerability for actions, decisions, and use of authority.',
    details:
      'Texas LEOs are accountable to their agency, the community, and the law. This includes thorough and accurate documentation (reports, BWC footage), adherence to body-worn camera policies, cooperation with internal and external reviews, and taking responsibility for mistakes. Transparency in actions and decision-making processes builds trust and reinforces the legitimacy of law enforcement.',
  },
];

export const caseStudiesData = [
  {
    id: 'cs1',
    title: 'The Questionable Traffic Stop (Texas Racial Profiling Law)',
    summary:
      'An officer makes a traffic stop based on a vague suspicion in an area with a history of profiling complaints.',
    detailsRaw:
      "Officer Rodriguez is patrolling a neighborhood in a large Texas city that has previously faced scrutiny for racial profiling allegations. She observes a vehicle with out-of-state plates driving slowly through a residential area late at night. The driver is a young minority male. Officer Rodriguez initiates a traffic stop, citing 'suspicious behavior' as the primary reason, although no specific traffic violation was observed. During the stop, she asks for consent to search the vehicle, which is denied. No contraband is found.",
    discussionPointsHTML:
      '<strong>Discussion Points:</strong><ul><li>Applicability of Texas Code of Criminal Procedure Art. 2.131-2.138 (Prohibition on Racial Profiling).</li><li>Legal standard for reasonable suspicion for a traffic stop versus a mere hunch or generalized suspicion.</li><li>Impact of prior agency history or community perceptions of profiling in that area.</li><li>Ethical considerations of discretionary stops and potential for implicit bias.</li><li>Proper documentation requirements under TCOLE rules and agency policy for traffic stops, including data related to racial profiling.</li><li>Best practices for articulating grounds for a stop.</li></ul>',
  },
  {
    id: 'cs2',
    title: 'Off-Duty Social Media Post (First Amendment & Agency Policy)',
    summary:
      "An officer's controversial social media post about a local political issue draws public criticism.",
    detailsRaw:
      "Deputy Miller, employed by a Texas County Sheriff's Office, posts a strongly worded, critical comment on his personal Facebook page regarding a contentious local ordinance being debated by the County Commissioners. His profile identifies him as a Deputy, and he occasionally posts pictures in uniform. Several community members see the post and complain to the Sheriff, stating it shows bias and unprofessionalism that could affect his on-duty performance.",
    discussionPointsHTML:
      "<strong>Discussion Points:</strong><ul><li>Balancing an officer's First Amendment rights with the agency's legitimate interest in maintaining public trust and an image of impartiality.</li><li>Review of specific agency social media policy regarding off-duty conduct and identification as an agency employee.</li><li>Potential for the post to be considered 'conduct unbecoming an officer' or to undermine public confidence in the officer or agency.</li><li>Impact on the officer's perceived ability to perform duties fairly and impartially towards all community members.</li><li>Legal precedents regarding public employee speech (e.g., Pickering v. Board of Education, Garcetti v. Ceballos).</li></ul>",
  },
  {
    id: 'cs3',
    title: 'Use of Force Reporting Discrepancy (Texas Penal Code Sec. 9.51)',
    summary:
      "A use of force incident occurs, and a junior officer notices a discrepancy between their observation and a senior officer's report.",
    detailsRaw:
      "During an arrest of a resistant subject, Officer Chen (a junior officer) observes her Field Training Officer, Officer Davis, use a knee strike that Chen felt was unnecessary and occurred after the subject was already substantially controlled and complying. In Officer Davis's subsequent use of force report, the knee strike is described as occurring earlier in the encounter, when the subject was more actively resisting. Officer Chen knows that accurate reporting is critical under Texas Penal Code Sec. 9.51 (Justification of Force by Peace Officer) and departmental policy regarding truthfulness and use of force documentation.",
    discussionPointsHTML:
      "<strong>Discussion Points:</strong><ul><li>Ethical duty of truthfulness in all official reports and testimony.</li><li>Officer Chen's 'Duty to Intervene' or report misconduct if she believes excessive force was used or the report is falsified.</li><li>Navigating the chain of command versus ethical obligations when a senior officer is involved.</li><li>Potential legal and departmental consequences of inaccurate or falsified use of force reporting for all officers involved.</li><li>Protections for whistleblowers within the agency or under state law.</li><li>Importance of Body-Worn Camera footage in verifying accounts of use of force incidents.</li></ul>",
  },
];

export const texasStatuteBaseUrl = 'https://statutes.capitol.texas.gov/';
export const texasLawData = [
  {
    id: 'pc3103',
    category: 'Penal Code',
    title: 'Sec. 31.03. THEFT.',
    summary:
      'Defines theft as unlawfully appropriating property with intent to deprive the owner. Details various levels of offenses based on the value of the property.',
    link: texasStatuteBaseUrl + 'PE/htm/PE.31.htm#31.03',
    keywords: 'theft, appropriation, property, consent, stolen, value, offense level',
  },
  {
    id: 'pc4904',
    category: 'Penal Code',
    title: 'Sec. 49.04. DRIVING WHILE INTOXICATED.',
    summary:
      'Defines DWI as operating a motor vehicle in a public place while intoxicated. Specifies offense levels, including enhancements for open container or high BAC.',
    link: texasStatuteBaseUrl + 'PE/htm/PE.49.htm#49.04',
    keywords:
      'dwi, driving while intoxicated, motor vehicle, public place, alcohol, drugs, bac, open container',
  },
  {
    id: 'ccp1401',
    category: 'Code of Criminal Procedure',
    title: 'Art. 14.01. OFFENSE WITHIN VIEW.',
    summary:
      "Authorizes a peace officer or any person to arrest an offender without a warrant for an offense committed in their presence or view, if it's a felony or breach of the peace. Peace officers can arrest for any offense in their presence/view.",
    link: texasStatuteBaseUrl + 'CR/htm/CR.14.htm#14.01',
    keywords: 'arrest, warrantless arrest, presence, view, felony, public peace, misdemeanor',
  },
  {
    id: 'ccp2132',
    category: 'Code of Criminal Procedure',
    title: 'Art. 2.132. LAW ENFORCEMENT POLICY ON RACIAL PROFILING.',
    summary:
      'Mandates that all Texas law enforcement agencies adopt a detailed written policy on racial profiling, including definitions, prohibitions, complaint processes, and data collection requirements for motor vehicle stops.',
    link: texasStatuteBaseUrl + 'CR/htm/CR.2.htm#2.132',
    keywords:
      'racial profiling, policy, motor vehicle stop, complaint process, data collection, reporting',
  },
  {
    id: 'tc545351',
    category: 'Transportation Code',
    title: 'Sec. 545.351. MAXIMUM SPEED REQUIREMENT.',
    summary:
      'Prohibits driving at a speed greater than reasonable and prudent. Requires operators to control speed to avoid collisions and to reduce speed for specific hazards or conditions.',
    link: texasStatuteBaseUrl + 'TN/htm/TN.545.htm#545.351',
    keywords: 'speeding, maximum speed, reasonable, prudent, due care, reduced speed, hazard',
  },
  {
    id: 'fc261101',
    category: 'Family Code',
    title: 'Sec. 261.101. PERSONS REQUIRED TO REPORT; TIME TO REPORT (Child Abuse/Neglect).',
    summary:
      'Mandates any person with cause to believe a child is being abused or neglected to report immediately. Professionals must report within 48 hours of first suspicion. This duty applies regardless of privileged communication.',
    link: texasStatuteBaseUrl + 'FA/htm/FA.261.htm#261.101',
    keywords:
      'child abuse, neglect, report, professional, mandatory reporter, immediate report, 48 hours',
  },
];

export const interactiveScenariosData = [
  {
    id: 'scenarioTX1',
    title: 'The Anonymous Tip (Texas Stop & Frisk)',
    description:
      "You receive an anonymous tip detailing a person matching a specific description is selling narcotics at a known high-crime park in your Texas city. The tip provides the person's clothing and location within the park but no predictive information about future actions. Upon arrival, you see a person matching the description exactly, but they are merely standing and talking on a cell phone. What is your best course of action under Texas law (re: Florida v. J.L. and its application in Texas)?",
    choices: [
      {
        text: 'Immediately detain and frisk the individual based on the detailed anonymous tip.',
        outcome: 'incorrect',
        feedback:
          'Incorrect (10 pts). Under Florida v. J.L. (and its interpretation in Texas), an anonymous tip lacking predictive information about illicit activity and merely describing a subject is generally insufficient for reasonable suspicion to stop and frisk. More corroboration is needed.',
        points: 10,
      },
      {
        text: 'Conduct consensual observation, attempt to engage in a casual encounter to gather more information, or observe for any independent criminal activity before deciding to detain.',
        outcome: 'correct',
        feedback:
          "Correct! (30 pts) This approach respects constitutional limits. An anonymous tip alone, without indicia of reliability or predictive information, often isn't enough for a stop. Further observation or a consensual encounter is a better initial step to develop reasonable suspicion if it exists.",
        points: 30,
      },
      {
        text: 'Ignore the tip completely as anonymous tips are unreliable.',
        outcome: 'neutral',
        feedback:
          'Neutral (15 pts). While caution is warranted, completely ignoring a tip about potential drug sales in a high-crime area might be a missed opportunity for lawful observation and potential intervention if further grounds develop. The key is *how* you act on it.',
        points: 15,
      },
    ],
  },
  {
    id: 'scenarioTX2',
    title: 'Body Cam Activation (Texas Occupations Code §1701.655)',
    description:
      "You are responding to a 'check welfare' call at a residence in Texas. Upon arrival, a person answers the door and seems agitated but there's no immediate sign of a crime. When should your body-worn camera ideally be activated according to Texas Occupations Code §1701.655 and common agency policy?",
    choices: [
      {
        text: 'Only if an offense is clearly occurring or an arrest is made.',
        outcome: 'incorrect',
        feedback:
          'Incorrect (10 pts). Texas law and most policies require activation during *any* law enforcement-related encounter with the public, including investigative detentions and responses to calls for service, not just when an offense is obvious.',
        points: 10,
      },
      {
        text: 'Prior to arriving at the scene, or as soon as safely possible upon initiating contact, to capture the entire interaction.',
        outcome: 'correct',
        feedback:
          'Correct! (30 pts) Best practice and often policy is to activate the BWC *before* making contact or as soon as safely possible upon initiating an investigative or enforcement encounter. This ensures the entire interaction is captured.',
        points: 30,
      },
      {
        text: 'After you determine a crime has been committed to save battery/storage.',
        outcome: 'incorrect',
        feedback:
          'Incorrect (5 pts). Waiting until a crime is confirmed is too late and defeats the purpose of capturing the events leading up to that determination, which is crucial for transparency and evidence.',
        points: 5,
      },
    ],
  },
];

export const fieldGuidesData = [
  {
    id: 'sfst-guide',
    title: 'Standardized Field Sobriety Tests (SFST) Quick Reference (Texas)',
    content:
      "<h4>Key Phases:</h4><ol class='list-decimal list-inside ml-4 mb-2'><li>Vehicle in Motion Observations</li><li>Personal Contact & Interview</li><li>Pre-Arrest Screening (SFSTs)</li></ol><h4>SFST Battery (NHTSA Approved):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Horizontal Gaze Nystagmus (HGN):</strong> 6 clues total (3 per eye). Check for: Lack of smooth pursuit, Distinct & sustained nystagmus at maximum deviation, Onset of nystagmus prior to 45 degrees. Remember vertical nystagmus for other substances.</li><li><strong>Walk and Turn (WAT):</strong> 8 clues total. Instructions stage: Cannot keep balance, Starts too soon. Walking stage: Stops while walking, Misses heel-to-toe, Steps off line, Uses arms to balance, Improper turn, Incorrect number of steps. (9 heel-to-toe steps out, turn, 9 back).</li><li><strong>One Leg Stand (OLS):</strong> 4 clues total. Sways while balancing, Uses arms to balance, Hops, Puts foot down. (Hold for 30 seconds).</li></ul><p class='mt-2'><strong>Note:</strong> Administer per NHTSA guidelines. Document all observations meticulously. Consider totality of circumstances for PC. Ensure safe location.</p>",
    category: 'DWI Investigation',
  },
  {
    id: 'miranda-guide',
    title: 'Miranda Warning (Texas - English/Spanish)',
    content:
      "<h4>English (Standard):</h4><p class='mb-2'>You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be appointed for you, prior to any questioning if you wish. You can decide at any time to exercise these rights and not answer any questions or make any statements.</p><p class='font-semibold'>Waiver (Ask both):</p><ol class='list-decimal list-inside ml-4'><li>Do you understand each of these rights I have explained to you?</li><li>Having these rights in mind, do you wish to talk to us now?</li></ol><hr class='my-3'><h4>Español (Ejemplo - Verify with certified translation):</h4><p class='mb-2'>Usted tiene el derecho de permanecer callado. Cualquier cosa que diga puede y será usada en su contra en un tribunal de justicia. Usted tiene el derecho a un abogado. Si no puede pagar un abogado, se le asignará uno antes de cualquier interrogatorio, si así lo desea. Usted puede decidir en cualquier momento ejercer estos derechos y no contestar ninguna pregunta ni hacer ninguna declaración.</p><p class='font-semibold'>Renuncia (Pregunte ambos):</p><ol class='list-decimal list-inside ml-4'><li>¿Entiende cada uno de estos derechos que le he explicado?</li><li>Teniendo estos derechos en mente, ¿desea hablar con nosotros ahora?</li></ol><p class='mt-2 text-xs'><strong>Important:</strong> Ensure suspect understands. If language barrier, use certified translator. Document waiver clearly.</p>",
    category: 'Custodial Interrogation',
  },
  {
    id: 'uof-guide',
    title: 'Use of Force Considerations (Texas Penal Code Ch. 9)',
    content:
      "<h4>Key Principles (Based on Graham v. Connor & TX Law):</h4><ul class='list-disc list-inside ml-4 mb-2 space-y-1'><li><strong>Objective Reasonableness:</strong> Judged from the perspective of a reasonable officer on the scene, not with 20/20 hindsight.</li><li><strong>Totality of Circumstances:</strong> All facts known to the officer at the time.</li><li><strong>Graham Factors:</strong><ol class='list-alpha list-inside ml-6'><li>Severity of the crime at issue.</li><li>Whether the suspect poses an immediate threat to the safety of officers or others.</li><li>Whether the suspect is actively resisting arrest or attempting to evade arrest by flight.</li></ol></li></ul><h4>Texas Penal Code Chapter 9 (Justification Excluding Criminal Responsibility):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Sec. 9.51 (Arrest and Search):</strong> Authorizes force, including deadly force in specific circumstances, to make or assist in making an arrest or search, or to prevent escape after arrest, if the officer reasonably believes the arrest or search is lawful and reasonably believes the force is immediately necessary.</li><li><strong>De-escalation:</strong> When possible and appropriate without compromising safety, officers should use de-escalation techniques.</li></ul><p class='mt-2'><strong>Documentation:</strong> Thoroughly document all use of force incidents, articulating the specific facts justifying the level of force used. Adhere to agency policy and BWC activation requirements.</p>",
    category: 'Response to Resistance',
  },
];

export const wellnessResourcesData = [
  {
    id: 'wr1',
    title: 'Recognizing Signs of Burnout & Cumulative Stress',
    summary:
      'Learn to identify early indicators of burnout and cumulative stress in yourself and peers.',
    details:
      "Burnout and cumulative stress in law enforcement are serious concerns. Manifestations can include: <ul><li><strong>Emotional:</strong> Chronic exhaustion, cynicism, detachment, loss of enjoyment, irritability, anxiety, depression.</li><li><strong>Physical:</strong> Fatigue, sleep disturbances, headaches, digestive issues, changes in appetite/weight, increased susceptibility to illness.</li><li><strong>Behavioral:</strong> Social withdrawal, increased alcohol/substance use, risk-taking behavior, difficulty concentrating, decreased job performance, strained relationships.</li></ul>Recognizing these signs early is crucial for seeking help. Pay attention to persistent changes in your baseline. If you notice these in yourself or a colleague, it's important to talk about it and explore support options. Early intervention is key.",
    keywords: 'burnout, stress, exhaustion, cynicism, cumulative stress, ptsd',
  },
  {
    id: 'wr2',
    title: 'Mindfulness & Tactical Stress Reduction Techniques',
    summary: 'Simple, practical exercises to manage acute and chronic stress and improve focus.',
    details:
      'Mindfulness involves paying attention to the present moment without judgment. Even short practices can help reduce stress and improve situational awareness. Try: <ul><li><strong>Tactical/Combat Breathing (Box Breathing):</strong> Inhale slowly for 4 counts, hold for 4 counts, exhale slowly for 4 counts, hold for 4 counts. Repeat for several minutes. This can be done discreetly to regulate your nervous system during stressful encounters.</li><li><strong>Grounding Techniques:</strong> If feeling overwhelmed, focus on your senses: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste. This helps bring you to the present.</li><li><strong>Mindful Observation:</strong> Briefly focus on a non-threatening detail in your environment (e.g., texture of your steering wheel, a specific sound) to anchor yourself.</li></ul> Consistent practice, even for a few minutes daily, can build resilience.',
    keywords: 'mindfulness, breathing, stress reduction, focus, tactical breathing, grounding',
  },
  {
    id: 'wr3',
    title: 'Accessing Peer Support & Mental Health Resources in Texas',
    summary:
      'Information on connecting with confidential peer support programs and professional mental health services.',
    details:
      "Many Texas agencies and law enforcement associations offer robust peer support programs. These programs provide confidential assistance from fellow officers who understand the unique stressors of the job. Examples include programs through TMPA, CLEAT, local agency initiatives (e.g., Austin PD, Dallas PD, Harris County SO have programs), and the Bill Blackwood LEMIT. <br><br>Additionally, specialized mental health professionals cater to first responders. Organizations like the National Alliance on Mental Illness (NAMI) Texas can also provide resources. Don't hesitate to reach out. Your agency likely has an Employee Assistance Program (EAP). Seeking help is a sign of strength. <br><br><strong>Key Texas Resources (Examples):</strong><ul><li>Your agency's Peer Support Team / EAP</li><li>Texas Law Enforcement Peer Network (TXLEPN - through LEMIT)</li><li>Bluebonnet CISM Team (Central Texas)</li><li>Local chapters of NAMI or Mental Health America</li></ul>Check your agency's resources or state-level LEO association websites for local peer support contacts and vetted mental health providers.",
    keywords:
      'peer support, mental health, help, resources, eap, therapy, counseling, tcole wellness',
  },
];

export const externalResourcesData = [
  {
    name: 'Texas Commission on Law Enforcement (TCOLE)',
    url: 'https://www.tcole.texas.gov/',
    description: 'Official TCOLE website for rules, forms, and licensing information.',
  },
  {
    name: 'Texas Municipal Police Association (TMPA)',
    url: 'https://www.tmpa.org/',
    description: 'Advocacy, legal services, and resources for Texas municipal police.',
  },
  {
    name: 'Combined Law Enforcement Associations of Texas (CLEAT)',
    url: 'https://cleat.org/',
    description: 'Largest police labor organization in Texas, offering legal and support services.',
  },
  {
    name: 'Bill Blackwood Law Enforcement Management Institute of Texas (LEMIT)',
    url: 'https://www.lemitonline.org/',
    description:
      'Provides leadership and management training for Texas law enforcement, including peer support resources.',
  },
  {
    name: 'Texas Police Chiefs Association (TPCA)',
    url: 'https://www.texaspolicechiefs.org/',
    description: 'Professional development and advocacy for Texas police chiefs.',
  },
  {
    name: 'National Alliance on Mental Illness (NAMI) Texas',
    url: 'https://namitexas.org/',
    description:
      'Support, education, and advocacy for individuals and families affected by mental illness.',
  },
  {
    name: 'FBI National Academy Associates - Texas Chapter',
    url: 'https://fbinaatexas.org/',
    description: 'Professional association for graduates of the FBI National Academy.',
  },
];
