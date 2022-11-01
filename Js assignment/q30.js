var arr = ['umar ', 'danish', 'asad', 'hammad'];

arr.map(item => {
    if (item == 'admin') {
        console.log("Hello admin, would you like to see a status report");
 } else {
    console.log(`Hello ${item}, thank you for logging in again.`);
 }
 })