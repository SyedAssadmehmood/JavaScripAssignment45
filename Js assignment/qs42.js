var magicians_names = ['jon', 'sam', 'harry'];

function show_magicians(names) {
     {
        console.log("magicians_name",names);
     }
 };
function great_magician(name){
    magicians_names.push(name);
    show_magicians(magicians_names);
}
show_magicians(magicians_names);
great_magician('phrase');