var dbConnect;

var qArr = [];
/*
"If you could be a dinosaur - what dinosaur would you be?", 
			"Flying car or self-driving car?",
			"Batman or Superman?", "In a fight who would win - the death star or wesley crusher?",
			"Coke or Pepsi?", "Why do round pizzas come in square boxes?"
			];
*/
function doClick(e){
    //Titanium.API.info("You clicked the button");
    dbConnect = Titanium.Database.install('/QAdb.sqlite', 'DBQAZ');
    var rows = dbConnect.execute('select question from questions');
    while(rows.isValidRow()) {
    	qArr.push(rows.fieldByName('question'));
    	rows.next();
    }
    
    dbConnect.close();

    randomPick();
};

function randomPick(){
	var randomNumber = Math.floor(Math.random()*qArr.length);
	Titanium.API.info(qArr[randomNumber]);
	//return qArr[randomNumber];
	$.questionarea.setValue(qArr[randomNumber]);
};

$.index.open();
