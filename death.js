var death = ["the", "of","and", "a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be", "this","have","from","or","one","had","by","words","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which",
            "she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been",
            "called","who","oil","sit","now","find","long","down","day","did","get","come","made","may","part","noun","few","suppose","human","row","doctor","else","finished","kept","meat","ever","whose","Ill","tube","necessary","edge","suddenly","while","finally","six","sat","hit",
            "moon","matter","am","along","until","course","deep","blood","lie","walk","wear","white","over","exercise","sum","left","under","only","train","work","never","last","leave","family","always","school","years","sometimes","between","after","old","three","heavy","rain","small",
            "same","still","also","face","set","less","let","above","end","answer","among","must","circle","even","why","went","carry","cannot","west","lay","dark","picture","door","short","river","away","soil","bed","without","already","off","easy","travel","second","late"
            ,"strange","nothing","rest","certain","hours","black","products","hold","cried","bring","happened","passed","vowel","sleep","table","oh","sail","pulled","ground","yet","north","ready","slowly","per","ran","boat","road","break","floor","done","wouldnt","prepared","ahead",
            "isnt","killed","understand","couldnt","gave","scale","died","beat","exactly","remain","paragraph","shall","bright","tiny","wont","bones","mall","wasnt","board","silent","except","string","expect","flat","wings","thin","death","send","entered","afraid","dead","total","fear","determine","evening","rope","view"];

var title = ["The Last Goodbye", "Thinking Of You", "Gone", "Bye Bye Birdie", "Sleeping?", "Blood Stains", "Remembering", "Six Feet Under", "Death And Other Things", "Forever" ]


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
        var random_number = Math.floor(Math.random() * death.length);
        generated_poem += death[random_number];
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