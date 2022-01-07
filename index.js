const csv = require('csv-parser')
const fs = require('fs')

// {
//   entry_time: string;
//   exit_time: string;
//   payment_status: string;
//   price?: number;
//   self_park: boolean;
//   site_id: number;
//   transaction_id: number;
//   user_id: number;
//   valet: boolean;
//   vehicle_id: number;
//   vehicle_status: string;
// };

const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // results = data.csv to JS editable format
    console.log(results);
  });