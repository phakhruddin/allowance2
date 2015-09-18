exports.openMainWindow = function(_tab) {
  _tab.open($.debit_window);
  //Ti.API.info("This is child widow debit.js" +JSON.stringify(_tab));
 
};

function debitDetailAddRow (date,dateadded,category,amount) {
		console.log("debit.js::debitDetailAddRow: date: "+date+"  dateadded: "+dateadded+" +dateadded: "+dateadded);
	    var debitrow = Ti.UI.createTableViewRow ({
                backgroundColor: "white",
                opacity:"0",
                color:"transparent",
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE
        });
	
        var datelabel = Ti.UI.createLabel ({
                color : "orange",
                font : {
                	fontSize : 10
                },
                right  : "40",
                top : "10",
                text : dateadded
        });
        var datespend = Ti.UI.createLabel ({
                color : "#0F84DE",
                font : {
                	fontSize : 12
                },
                left  : "20",
                 top : "35",
                text : date
       });
        var categorylabel = Ti.UI.createLabel ({
                color : "#333",
                font : {
                	fontSize : 24
                },
                left  : "20",
                top : "50",
                text : category
       });
        var amountlabel = Ti.UI.createLabel ({
                color : "#333",
                font : {
                	fontSize : 24
                },
                right  : "50",
                 top : "50",
                text : amount
          });
        var blueline = Ti.UI.createImageView ({
                left  : "20",
                top : "30",
                width : "85%",
                height : "3",
                image : "/blueline.png"
        });
        var innerview = Ti.UI.createView({
                width:"30%",
                height:"Ti.UI.Size",
                left:"60%",
                top:"40",
                backgroundColor:"white",
                borderRadius:"10",
                borderWidth:"0.1",
                borderColor:"white"
        });
        debitrow.add(datelabel);
        debitrow.add(datespend);
        debitrow.add(categorylabel);
        debitrow.add(amountlabel);
        debitrow.add(blueline);
        
        debitrow.add(innerview);
    
        debitrow.metadata = dateadded; // add metadata info
        
        $.debit_table.appendRow(debitrow);

};

//List table contents
var content=[{col1:"1/1/1",col2:"1/1/1",col3:"Book",col4:"120"},{col1:"1/2/1",col2:"1/2/1",col3:"Grocery",col4:"130"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"Travel",col4:"3000"}];
console.log("debit.js::JSON stringify content: "+JSON.stringify(content));
function displayRow(e){
	var totalspent=0;
	for(i=0;i<content.length;i++){
		debitDetailAddRow(content[i].col1,content[i].col2,content[i].col3,content[i].col4);
		var totalspent = parseFloat(content[i].col4)+ parseFloat(totalspent);
		//if (i == (content.length-1)) { $.debit_window.lastdebit = content[i].col1;} // capture the last date
	}	
	return totalspent;
}
var totalspent=displayRow();
Titanium.App.Properties.setInt('totalspent',totalspent);
console.log("debit.js: after row display totalspent: "+totalspent);