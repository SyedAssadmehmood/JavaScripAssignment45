var magicians_names = ['jon', 'sam', 'harry'];

function show_magicians(names){
    names.map(name => {
        console.log("magicians_name", [name]);
})
};
show_magicians(magicians_names);