var war = ["the", "of","and", "a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be", "this","have","from","or","one","had","by","words","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which",
            "she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been",
            "called","who","oil","sit","now","find","long","down","day","did","get","come","made","may","part","noun","however","teacher","division","doesnt","tools","increase","march","northern","position","gun","action","workers","Washington","Greek","observe","history","period","dollars","opposite","wrong",
            "chart","God","bell","radio","army","western","church","trade","captain","lead","suggested","supply","president","property","value","fight","burning","fit","equal","compound","count","compare","report","everyone","trouble","third","general","chief","alone","act","window","soldiers","difference","nation",
            "bad","hole","poor","distance","low","take","during","solve","past","ship","themselves","written","case","across","red","students","didnt","decided","dry","though","Europe","five","got","outside","fact","perhaps","full","region","hot","check","group","mark","problem","stand","know","power","things","man","run","soon",
            "rule","list","think","government","equation","measure","side","cut","stop","Indian","watch","enough","state","example","too","four","dont","took","means","came","next","told","should","America","against","map","World","saw","want","war","every","those","King","size","country","put","another","such","because",
            "ball","men","need","machine","land","class","brought","point","found","scientist","its"];
var title = ["Bullets", "In The Crossfire", "Its Over", "Churchill", "Bye Bye Bullets", "Way Back When", "WWII", "Society", "Bang", "The Beginning And The End" ]

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
        var random_number = Math.floor(Math.random() * war.length);
        generated_poem += war[random_number];
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