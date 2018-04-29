# reports-app
Web app system for tracking job interviews 
Project Overview:

The system needs to track information about Companies, Candidates and Interviews.
A single Candidate can have an Interview scheduled with one or more Companies. Once the Candidate is involved in an Interview with the sample Company,it can go through several phases. After each phase, a new report is entered into system.
Each Interview Report must have flag if Candidate has passed/not passed the current phase of the
Interview. Only if Candidate has passed current phase, a report for next phase can be added.
Project Structure:
Project is divided in two parts (tasks, smaller projects).
First one is to create UI for viewing already existing candidates and reports which are created for
those candidates.
Second task is to create admin panel which is used for report creation.
Both tasks should be implemented as standalone (separate) applications. But they will use same API for
getting data and creating new reports.
Reports API
Regarding interviews reports API you will be using local web server. Complete API which is needed for developing your tasks can be found at: https://goo.gl/xXFvCa. On github repository page you will find all information about how to start web server and how to use API locally for development.

1. Candidates and Interview Reports overview
Implement responsive public web application, which can be used by anyone, and which is responsible for read-only  overview of Candidates and Interview Reports.
Mocks for this task can be find at: https://goo.gl/RL62oL.  All different page mocks for this task can be find in “Pages” section. Provided mocks are for desktop layout, mobile and tablet layout is left for you to design/ organize.
Public web application should consist of:
    •	List of Candidates (landing page);
    •	Candidates will appear in cards layout (see wireframes);
    •	List of Candidates can be filtered by Candidate Name
    •	For each Candidate, Name, Avatar and Email should be shown
This page should be written in vanilla JavaScript (no jQuery or other third-party JavaScript
libraries)
Candidate Reports Page
All details about the Candidate should be shown:
    •	Name
    •	Avatar
    •	Email
    •	Education
List of all Reports related to the selected Candidate should be shown, including
    •	Company 
    •	Interview Date
    •	Status


User should be able to select a Report from the list in order to see a full Report. Report details should be shown in Modal Dialog. This page should be developed using jQuery.
Implement this Task using HTML, SASS, Vanilla JS (ES5), and AJAX Technologies. For ‘Candidate Reports Page’ jQuery should be used.


2. Administrative Panel
Implement responsive administrative panel web application, which can be used by anyone, and which is responsible for creating/modifying/deleting Interview Reports.
Wireframes for this task can be find at: https://goo.gl/8Whmw3.
All different page mocks for this task can be find in “Pages” section. Provided mocks are for desktop layout, mobile and tablet layout is left for students to design / organize.


Administrative Panel application should consist of: 
1.Login page -(landing page); 

2.Report List;Reports should be rendered in a list.Each Report can be viewed in more detail or deleted. For viewing report in more details Modal (dialog) is used . List of reports can be filter by candidate or company name!

3.Submit Report Page -Submitting a Report should be done through a “Wizard”. 
Wizard is constructed from three steps:
    Step 1: Select Candidate-Candidates will appear in a list; List of Candidates can be filtered by Candidate Name. When user click on candidate it’s selected. After Candidate is selected “Next” button become enabled and user can click on it.When user click on “Next” button next section “Select Company” should be presented.
    Step 2: Select a Company- Companies will appear in a list. List of Companies can be filtered by Company Name. After Company is selected “Next” button become enabled and user can click
on it. When user click on “Next” button next section “Fill Report Details” should be
presented.
    Step 3: Fill Report Details- User should be able to enter all Report fields.
Date/Time;
Phase: cv, hr, tech, final;
Status: passed, declined;
Notes;
All inputs should be validated. All input fields are required. Phase must be one of: cv, hr, tech, final. Status must be one of: passed, declined. Date can not be in the future. Date input should be provided via date-picker component.When user click “Submit” request with all data for creating report is sent.After successfully created report user is redirected to the landing page.
