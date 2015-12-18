var love = ["the", "of","and", "a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be", "this","have","from","or","one","had","by","words","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which",
            "she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been",
            "called","who","oil","sit","now","find","long","down","day","did","get","come","made","may","part","noun", "new","Live","warm","give","most","score","forward","effect",
            "our","seven","lifted","interesting","fair","sense","experience","fingers","melody","sugar","especially","divided","legs","yes","picked","particular","terms"
            ,"we ll","pretty","name","mine","sight","company","both","major","art","agreed","feeling","movement","believe","cat","broken","moment","say","triangle","France","actually","dictionary","although","chance","exciting","hair","tone","tied","someone","age","woman","help","settled","much","thus","led","indicate","tell","boy","probably","explain","cant","surprise","French","poem","enjoy","maybe","became","wonder","mouth","fun","similar","smiled","follow","well","bit","spread","wife","read","addition","belong","safe","drawing","sir","piece","mind","British","difficult","love","decimal","yourself","received","lets","allow","youre","key","details","entire","women","choose","single","touch","sent","joined","cross","dress","ring","speak","England","wrote","caught","Fell","shoulder","separate","shouted","continued","type","cause","phrase","arms","fine","happy","beside","instruments","meet","lady","pair","different","within","million"
            ,"return","himself","laughed","free","hundred","wish","toward","care","record","hand","carefully","either","began","everything","jumped"
            ,"heart","play","held","describe","clothes","remember","early","English","beautiful","please","page","best","once","upon","ago","length","reason","stood","plane","special","letter","skin","filled","felt","heat","near","body","questions","music","color","game","far","force","language","miss","wait","spell","hear","stay","start","together","today","important","own","stars","keep","eyes","young","note","notice","head","feel","knew","since","close","something","story","real","almost","girl","begin"];

var title = ["The First One", "Broken Heart", "Summer Nights", "Bright Eyes", "Love Songs", "Dreaming Of You", "Lust And Love", "The Beginning", "16", "Growing Up" ]

create_poem();

$(".coins").click(function() {
    create_poem();
});
create_title();

$(".coins").click(function() {
    create_title();
});




function create_poem() {
    var generated_poem = "";
    
    for (var x = 0; x < 50; x++) {
        var random_number = Math.floor(Math.random() * love.length);
        generated_poem += love[random_number];
        generated_poem += " ";
        
    }    
    
    $(".poem").html(generated_poem);
}
function create_title() {
    var generated_title = "";
    
    for (var x = 0; x < 1; x++) {
        var random_number = Math.floor(Math.random() * title.length);
        generated_title += title[random_number];
        generated_title += " ";
        
    }    
    
    $(".title").html(generated_title);
}