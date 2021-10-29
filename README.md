# Reservation System 
This repo is made as a submission to online competition on D2C for full stack roles [here](https://dare2compete.com/job/dare2compete-off-campus-hiring-drive-for-full-stack-developer-roles-via-d2c-recruitables-dare2compete-195488)

## Problem Statement
-  There are 80 seats in a coach of a train with only 7 seats in a row and last row of only 3 seats. For
simplicity, there is only one coach in this train.

-  One person can reserve up to 7 seats at a time.
-  If person is reserving seats, the priority will be to book them in one row.
-  If seats are not available in one row, then the booking should be done in such a way that the
nearby seats are booked.
-  User can book as many tickets as s/he wants until the coach is full.
-  You don’t have to create login functionality for this application.


## Solution Provided
I have tried to simplify the solution as far as possible. The entire thing is built using MERN stack and hosted on heroku platform

Deployed Link - https://d2c-reservation-booking.herokuapp.com/

- On the link you'll see two components left one which is used to take input from the user and right one to display status of seats.
- The staus of the seats are stored as a boolean array of size 80 on the database (MongoDB). True indicates the seat is free and False indicates it is booked.
- Depending upon the boolean value the colors of the seats are displayed in green(free) and red(booked)  along with the seat no.
- Seats are divided into 10 rows and each row in group of 7 & 3 as mentioned in requirements.
- As the user selects the number of seats to book and hits "Reserve" button the current status of seats is fetched the algorithm for finding best suitable seats is applied and optimal seats are booked for the user.
- Booked seats are informed to the user through a dialog box and the new status of the seats is updated in the database as well as the frontend.
- The solution uses 2 API one to get the status and one to post the status of the seats.

## Diagrams & Schemas

### Architecture
![Architecture](https://github.com/anshumyname/D2C_Reservation_System/blob/master/model/diagram.png)

### Schema
There is only 1 schema involved for now which is <br>
<b>
Seats Schema <br>
{
   <br>Name: String, <br>
   Availability: Boolean Array [80], <br>
}
</b>

## Seat Selection Algorithm
- Input  [ Seats (availability array), n (number of seats to book)]
- We have a boolean array of size 80 as representaion of seats.
- First we'll divide boolean array into 10 rows of size 8 each
- <b>Step 1:</b> For each row we will select n  ones which are closest to each other
   - For doing that we will follow a sliding window approach  
   - First we take n available seats from start of the row and calculate the cost (which is summation of differnce betweent the positions of the seats)
   - Select Next available seat and pop out the first seat then recalculate the distance
   - Repeat the above process till we have exhausted the entire row and select that group which has least cost.
   - Store its [index , cost]
- <b>Step 2:</b> After doing the previous step we'll have an array of possible positions in some rows (some rows may be rejected due to too few seats available). Next step is to again take the least cost group and since we already stored index with cost we can start from that corresponding index and take n seats.
- <b>After following Step 1 and 2 it is possible that there are n seats available but in not in a single row now in this case we have to give seats in different rows. </b>
- <b>Step 3:</b> Select first n available seats from all 80 seats and allocate them.

<b>This way if seats are availabe then it is guaranteed that user will get a seat.</b>


<br>

## Possible Improvements
- I am assuming a single user is booking the ticket so i havent used any userId to track who is booking the ticket. However with an effort of few hours this functionality could be added easily.
- I have implemented the algorithm for seats booking on frontend side however it should have been at the backend side since then database could be made readonly which makes it more secure.Currently concurrency issues may cause discrepancy in the app.
- Functinoality to Track which seats are booked first and later can be added for clear visiblity.

