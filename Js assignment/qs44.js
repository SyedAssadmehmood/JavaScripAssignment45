function make_Sandwiches(arr) {
    console.log(`A sandwich who have:`);
    arr.map(item => {
        console.log(item);
    });
}
make_Sandwiches(['cheese', 'sauces', 'Zinger']);
make_Sandwiches(['beef', 'mayo', 'salad']);
make_Sandwiches(['ketchup', 'mayo', 'extra sauce']);