var nature = ["the", "of","and", "a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be", "this","have","from","or","one","had","by","words","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which",
            "she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been",
            "called","who","oil","sit","now","find","long","down","day","did","get","come","made","may","part","noun","little","thick","solution","rose","fresh","corn","born","rich","uncle","fig","fruit","hoe","cotton","apple","yellow","hunting","flow","cattle","molecules","southern","consider",
            "provide","elements","sister","oxygen","wash","spot","save","stick","grew","sand","conditions","cows","foot","garden","yard","blow","branches","east","catch","symbols","insects","crops","cloud","ears","climbed","spring","Africa","brown","valley","bear","plains","itself","hope","snow","eggs","weather",
            "hill","stone","root","baby","possible","gold","milk","middle","quiet","natural","south","swim","lake","flowers","temperature","blue","factors","result","summer","appear","ice","drop","son","simple","cells","soft","child","desert","Island","forest","months","material","strong","sky","grass","correct","brother",
            "seeds","coast","race","wild","inside","anything","person","winter","green","sing","field","contain","ocean","wood","energy","shape","farmers","figure","farm","fly","fall","produce","fish","area","horse","whole","birds","stream","planets","me","mountains","back","sun","often","grow","become","sea","pattern","feet",
            "eat","children","good","round","life","great","before","any","seem","around","form","ask","does","us","try","kind","change","tree","morning","clean","food","air","father","light","below","animal","earth","known","wind","rock","true","space","covered","plant","waves","reached","mother"];

var title = ["Running Through A Field", "First Flowers", "May", "Earth And Wind", "Old Lands", "The Sun And The Moon", "Rain", "The Forest", "Ever Changing", "The Animals" ]


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
        var random_number = Math.floor(Math.random() * nature.length);
        generated_poem += nature[random_number];
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