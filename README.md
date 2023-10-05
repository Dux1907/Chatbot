Implement a SPA mobile react/redux application for students to be used for student enrollment. Here is the behaviour of the mobile webapp. 

1. Page 1 - content looks like - 

Enter into Student Info System
[Button] Enroll Now!


2. Upon clicking on Enroll Now, a chatbot shows that takes up the screen looks like this.

Chatbot says - 

a.
... [for 3 seconds]

replaces .... with - Hello, Welcome to student info system! [It does this for all msgs bot types]

1 button says - Got it!

User clicks on "Got it!"

Got it! gets printed on Chatbot. So it looks like - 


Bot: Hello, Welcome to student info system!
User: Got it!

b. Bot then asks for Name

B: Hello, Welcome to student info system!
U: Got it!
B: Enter your Name

[Label] That takes Name as input

User types Name and presses enter. Lets say - 


B: Hello, Welcome to student info system!
U: Got it!
B: Enter your Name
U: Gowtham

c. Bot asks and gets age from user. Age is a drop down. 18-40.
So overall after entering age, it looks 

B: Hello, Welcome to student info system!
U: Got it!
B: Enter your Name
U: Gowtham
B: Enter your Age
U: 27


d. Bot then says "Thank you. In 5 seconds, bot will exit" as the last line below 27. It counts down , 5..4...3..2...1 and then it takes user to page 3


3. Page 3 says - 

Your name Gowtham aged 27 has been added to student system. You may now exit.


