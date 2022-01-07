The data files contain some anomalies which are probably best left in as they are instructive within the context of a coding challenge.

There is a row missing a price.

The selfPark and Valet columns are mostly one or the other, but there are rows that are neither.

 

Structure: 
site id
transaction id
user id
vehicle id
payment status
vehicle status (note: exclusively “picked up”)
entry time
exit time
price

Exercises
For the entirety of the data, find the total revenue by site, taking payment status into consideration.

Filter to only “weekend” visits (visits that start on Saturday or Sunday)

For each week (ISO week), find the total weekly revenue by site

Determine Week-over-Week revenue change ($) for each site

Find the 3 sites having the highest ratio of foregone revenue

Find the total revenue by visit type (valet or self-park)

Find these values by week

Find the number of repeat visitors by site

Find the list of vehicles that have been used by more than 1 user