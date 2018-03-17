var trace1 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [242,239,253,248,187,174,171,212,269,216,207,177,272,209,150,195],
    name: "Yes",
    type: "bar"  
};

var trace2 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [178,182,171,170,236,233,233,208,62,212,206,247,152,201,264,192],
    name: "No",
    type:"bar"

};

var data = [trace1, trace2];

var layout = {
	title: "Vote Totals"
};

Plotly.newPlot("Vote_Graph", data, layout);