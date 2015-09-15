exports.openMainWindow = function(_tab) {
  _tab.open($.credit_window);
};

function creditDetailAddRow (date,dateadded,creditamount) {
		console.log("credit.js::creditDetailAddRow: date: "+date+"  dateadded: "+dateadded+" creditamount: "+creditamount);
	    var creditrow = Ti.UI.createTableViewRow ({
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
        var datecredit = Ti.UI.createLabel ({
                color : "#0F84DE",
                font : {
                	fontSize : 24
                },
                left  : "30",
               top : "50",
                text : date
       });
        var amountlabel = Ti.UI.createLabel ({
                color : "#333",
                font : {
                	fontSize : 24
                },
                right  : "100",
                top : "50",
                text : "$"+creditamount
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
        creditrow.add(datelabel);
        creditrow.add(datecredit);
        creditrow.add(amountlabel);
        creditrow.add(blueline);
        
        creditrow.add(innerview);
    
        creditrow.metadata = dateadded; // add metadata info
        
       $.credit_table.appendRow(creditrow);
};

var content=[{col1:"1/1/1",col2:"1/1/1",col3:"120",col4:"120"},{col1:"1/2/1",col2:"1/2/1",col3:"130",col4:"130"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"},{col1:"1/3/1",col2:"1/3/1",col3:"3000",col4:"3000"}];
console.log("debit.js::JSON stringify content: "+JSON.stringify(content));

function displayRow(e){
	var totalcredit=0;
	for(i=0;i<content.length;i++){
		creditDetailAddRow(content[i].col1,content[i].col2,content[i].col3,'$'+content[i].col4);
		var totalcredit = parseFloat(content[i].col3)+ parseFloat(totalcredit);
		Titanium.App.Properties.setInt('totalcredit', totalcredit);//write to persistent memory
		//$.notes_textarea.data = {"totalspent":totalspent,"totalcredit":totalcredit,"creditamount":creditamount,"bal":bal,"lastcredit":lastcredit}; 
		//$.credit_window.data.totalcredit = totalcredit;	
		//$.credit_window.data = {"totalspent":totalspent,"totalcredit":totalcredit,"creditamount":creditamount,"bal":bal,"lastcredit":lastcredit}; 
	}	
	return totalcredit;
}
var totalcredit=displayRow();
console.log("debit.js::totalcredit: "+totalcredit);

