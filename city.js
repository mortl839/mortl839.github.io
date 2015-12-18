var city = ["the", "of","and", "a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be", "this","have","from","or","one","had","by","words","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which",
            "she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been",
            "called","who","oil","sit","now","find","long","down","day","did","get","come","made","may","part","noun","sound","truck","capital","steel","team","deal","sell","shop","sharp","substances","smell","underline","seat","process","industry","current","block","track","arrived","located","park","create",
            "hat","stretched","office","huge","match","win","weight","shoes","party","cook","rhythm","rather","bought","crowd","eight","science","bank","wire","corner","Japanese","electric","famous","guess","loud","modern","visit","pay","straight","rise","statement","thousands","able","pounds","pole","repeated","column",
            "business","information","practice","printed","express","quite","ride","angle","cost","fraction","control","copy","serve","gas","experiment","engine","wide","tall","design","instead","least","wall","cool","metal","lost","buy","speed","century","factories","cents","glass","pushed","law","village","store","build","lot",
            "bottom","direct","trip","whether","job","raised","represent","sign","discovered","interest","common","drive","object","site","present","better","members","base","iron","main","test","direction","center","plan","method","section","square","developed","front","subject","town","clear","shown","paint","system","behind","minutes","verb","fire","city",
            "unit","high","week","order","rolled","inches","street","draw","wheels","half","ten","box","voice","quickly","seen","bill","dance","cold","heard","top","building","learn","usually","surface","friends","add","numeral","house","money","step","song","dog","complete","room","being","idea","include","built","study","place","very","talk",
            "just","paper","where","through","line","right","show","again","fast","several","listen","plural","various","large","big","hard","level","book","car","mile","night","open","turn","move","home"];

var title = ["The Big Apple", "Small Town Problems", "City Dreams", "Broken Lines", "Small Town Dreams", "Lines And More Lines", "Looking Through Windows", "The Evening", "Cement", "Looking Up" ]

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
        var random_number = Math.floor(Math.random() * city.length);
        generated_poem += city[random_number];
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