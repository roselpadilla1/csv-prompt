# Structure:
The data you start off with is an array of objects, that object looks like this:
```js
{
  entry_time: string;
  exit_time: string;
  payment_status: string;
  price?: number;
  self_park: boolean;
  site_id: number;
  transaction_id: number;
  user_id: number;
  valet: boolean;
  vehicle_id: number;
  vehicle_status: string;
};
```

# Exercises

1) For the entirety of the data, find the total revenue by site, taking payment status into consideration.

    - Filter to only “weekend” visits (visits that start on Saturday or Sunday)

2) For each week (ISO week), find the total weekly revenue by site
    
    - Determine Week-over-Week revenue change ($) for each site

3) Find the 3 sites having the highest ratio of foregone revenue

4) Find the total revenue by visit type (valet or self-park)
    - Find these values by week

5) Find the number of repeat visitors by site

6) Find the list of vehicles that have been used by more than 1 user
# Notes
- The data files contain some anomalies which are probably best left in as they are instructive within the context of a coding challenge.

- There is a row missing a price.

- The selfPark and Valet columns are mostly one or the other, but there are rows that are neither.

 
