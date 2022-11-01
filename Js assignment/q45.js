function carInfo(manufacture, model){
    console.log(arguments);
    var obj = {
        manuacturer: manufacture,
        modle: model,
};
for (i = 2; i < arguments.length; i++){
    console.log(arguments[i]);
}
};
carInfo('japan', 'm-2022', color = 'red');