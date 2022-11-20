# Lab 8 - Starter

## Lab Partners 
- Ojeen Gammah
- Vaughan Chase
## Questions

#### 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

<b>I would like with option 1 "Within a Github action that runs whenever code is pushed" because it allows to automate our testing and add less complexity to the code and every developer has access to it.</b>

#### 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

<b>no, end to end testing is for UI testing. A unit test would work as this test is concerned only with the correct input output relationship of a function.</b>

#### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

<b>no, because what we are testing, takes the integration of many functions and unit test tests one function.</b>

#### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    
 <b>no, because testing max message length requires testing the UI to ensure that any given user cannot write messages larger than maximum length.</b>
