var arr = ['Ali','Asad','Sharjeel','Sufiyan','Umair'];

try {
    var err = arr[4].split();
    console.log(err);
} catch (err){
    console.error("Array out of bonds error occured.");
    console.error(err);
    var err = arr[3].split();
    console.log(err);
}

