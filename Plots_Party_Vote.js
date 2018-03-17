var trace1 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [218,200,231,90,156,160,36,55,173,124,188,14,123,73,129,120],
    name: "Democrat Yes Votes",
    type: "bar"

};

var trace2 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [45,59,29,167,102,91,213,200,12,139,60,245,135,179,126,119],
    name: "Democrat No Votes",
    type: "bar"

};

var trace3 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [24,39,22,158,31,14,135,157,96,92,19,163,149,136,21,75],
    name: "Republican Yes Votes",
    type: "bar"  
};

var trace4 = {
	x: ["Disable Infants", "Water Project", "Budget Resolution", "Physician Fee Freeze", "El Salvador Aid",
	    "Religious Groups in Schools","Anti Satellite Test Ban","Aid to Nicaraguan Contras","MX Missile",
	    "Immigration","Synfuels Corporation Cutback","Education Spending","Superfund Right to Sue","Crime",
        "Duty Free Exports","Export Administration Act South Africa"],
    y: [133,123,142,3,134,142,20,8,50,73,146,2,17,22,138,73],
    name: "Republican No Votes",
    type: "bar"
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
	title: "Votal Totals by Party"
};



Plotly.newPlot("Vote_Party_Graph", data, layout);