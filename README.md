Assignment 1: Object and Context Analysis for LMS Project

Student Name: Gaurav Asodariya

Project Title: Learning Management System

The Learning Management System is a web-based application designed to simplify online course delivery and student management. It supports secure authentication, personalized course access based on academic branches, comprehensive course and lecture management, and role-based admin and student views. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), the LMS enables educational institutions to digitize and streamline their learning processes.

Object, Context & Information Mapping : 

Object                                       Context                                                         Information                                                                                 

1) User                    A person using the system, either as Student or Admin            ID, Name, Email, Password, Role(admin/student),                                                                                                 Branch, Profile Details.
                        
2) Authentication         System module that handles sign-up, login, and password reset     JWT Tokens for session, Bcrypt for passwordhashing,                                                                                              Email verification, Change password.
 
3) Branch/Stream          Academic stream for categorizing students                         Branch Name(CS, BBA), Courses linked with branch.

                                          
4) Course                 A subject or topic provided under a specific branch               Title, Description, Instructor, Linked Branch ID.


5) Lecture               Content of a course, typically a video or material                 Lecture Title, Video URL, Lecture Description.                                                     

6) Enrollment            Process of a student joining a course                              Enrollment ID, Student ID, Course ID, Date, Status.

                                              
7) Student Dashboard      View for students to track progress and access content            Enrolled Courses, Progress status, Profile info,
                                                                                            Subscription validity.
                          
8) Admin Panel            Interface for admins to manage entire LMS                         CRUD for Branches, Courses, Users; View Enrollment
                                                                                            Data.
                                           
9) Subscription          Controls student access to paid courses                             Plan duration (1 year), Status (Active/Expired),                                                                                                Linked to User ID.

10) Profile Management    For students to update personal information                        Name, Branch, Password, Profile Picture.


11) Activity Logging     Tracks user login or course interaction                             Login Timestamps, Course Access History.


12) Course Filtering     Displays relevant courses based on selected branch                  Branch Filter Logic, Personalized Course Feed.

                               |
13) Notification System  Informs users about account or course updates                       Email or future in-app notifications for password                                                                                               reset, enrollment status.

                  
14) API Gateway         Serves as communication interface between frontend and backend      RESTful API Endpoints, JSON data, Error Handling                                                                                                Middleware.

                                          
15) MongoDB Database      Stores persistent application data                                  User Table, Course Table, Lecture Table,                                                                                                       Enrollment Table, Subscription Table.

                  
16) Frontend Interface     React-based UI for students and admins                            Dynamic Course Pages, Responsive Layout, Forms for                                                                                              Login/Register/Profile.                         

    
17) Admin Actions          CRUD functionality provided to Admins                            Add/Edit/Delete Branches, Courses, View User                                                                                                    Activity


18) Student Learning       Main user activity within the system                             Watch Lectures, Track Progress, View Course                                      
