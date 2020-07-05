function displayWei(id, wei, ethToUsd) {
    ether = web3.fromWei(wei, "ether");
    $(id).text(ether.toFormat(5, web3.BigNumber.ROUND_HALF_UP) + " ETH");
    $(id).attr("data-original-title", ether.toFormat() + " ETH");
    $(id).tooltip();
    if (ethToUsd !== undefined)
        $(id + "-usd").text("($" + ether.times(ethToUsd).toFormat(2, web3.BigNumber.ROUND_HALF_UP) + ")");
}

function setup() {
    var abiArray = [
	{
		"constant": false,
		"inputs": [],
		"name": "activate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "bid",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "claimWinnings",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "devWithdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dayPot",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dayPotExpiration",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dayPotHighscore",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dayPotLeader",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyLastScore",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hourPot",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hourPotExpiration",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hourPotHighscore",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hourPotLeader",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalBids",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "weekPot",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "weekPotExpiration",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "weekPotHighscore",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "weekPotLeader",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
    ];

    var contract = web3.eth.contract(abiArray).at("0x8F489da0BA6bbD90BC719C7e0cEE9C5b037da7db");

    $("#btn-bid").click(function() {
        contract.bid({value: web3.toWei(0.1), gas: 300000}, function(error, result) {
		
	});
    });

    function refresh() {
	contract.hourPot(function (error, result) {
	    if(!error) {
	    	$('#hour-value').text(web3.fromWei(result).toFixed(4) + " ETH");	  
	    }
	});

	contract.dayPot(function (error, result) {
	    if(!error) {
		$('#day-value').text(web3.fromWei(result).toFixed(4) + " ETH");
	    }
	});

	contract.weekPot(function (error, result) {
	    if(!error) {
	        $('#week-value').text(web3.fromWei(result).toFixed(4) + " ETH"); 
	    }
	});

	contract.hourPotLeader(function (error, result) {
	    if(!error) {
		$('#hour-leader').html("<a href='https://etherscan.io/address/"+result+"'>"+result.substring(0, 16) + "...</a>");
	    }
	});

	contract.dayPotLeader(function (error, result) {
	    if(!error) {
		$('#day-leader').html("<a href='https://etherscan.io/address/"+result+"'>"+result.substring(0, 16) + "...</a>");
	
	    }
	});

	contract.weekPotLeader(function (error, result) {
	    if(!error) {
		$('#week-leader').html("<a href='https://etherscan.io/address/"+result+"'>"+result.substring(0, 16) + "...</a>");
	    }
	});

	contract.hourPotHighscore(function (error, result) {
	    if(!error) {
		adjustedResult = new web3.BigNumber(result).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);
		$('#hour-score').text(Number(adjustedResult.toFixed(0)).toLocaleString());
	    }
	});

	contract.dayPotHighscore(function (error, result) {
	    if(!error) {
		adjustedResult = new web3.BigNumber(result).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);
		$('#day-score').text(Number(adjustedResult.toFixed(0)).toLocaleString());
	    }
	});

	contract.weekPotHighscore(function (error, result) {
	    if(!error) {
		adjustedResult = new web3.BigNumber(result).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);
		$('#week-score').text(Number(adjustedResult.toFixed(0)).toLocaleString());
	    }
	});

	contract.hourPotExpiration(function (error, result) {
	    if(!error) {
	        var time = new Date().getTime() / 1000;	
		var secondsLeft = result - time;
		var minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
	        var seconds = Math.floor(secondsLeft % 60);
	        if (seconds < 10) { seconds = "0" + seconds; }
	        if (minutes < 10) { minutes = "0" + minutes; }
		$('#hour-time').text(minutes + "m, " + seconds + "s");
	    }
	});

	contract.dayPotExpiration(function (error, result) {
	    if(!error) {
	        var time = new Date().getTime() / 1000;
                var secondsLeft = result - time;
	        var hours = Math.floor((secondsLeft / (60 * 60)));
	        var minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
	        var seconds = Math.floor(secondsLeft % 60);
	        if (hours < 10) { hours = "0" + hours; }
	        if (minutes < 10) { minutes = "0" + minutes; }
	        if (seconds < 10) { seconds = "0" + seconds; }
	        $('#day-time').text(hours + "h, " + minutes + "m, " + seconds + "s");
	    }
	});

	contract.weekPotExpiration(function (error, result) {
	    if(!error) {
	        var time = new Date().getTime() / 1000;
		var secondsLeft = result - time;
		var days = Math.floor((secondsLeft / (60 * 60 * 24)));
		var hours = Math.floor((secondsLeft % (60 * 60 * 24) / (60*60)));
		var minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
		var seconds = Math.floor(secondsLeft % 60);
		if (hours < 10) { hours = "0" + hours; }
		if (minutes < 10) { minutes = "0" + minutes; }
		if (seconds < 10) { seconds = "0" + seconds; }
		$('#week-time').text(days + "d, " + hours + "h, " + minutes + "m, " + seconds + "s");
	    }
	});

	contract.getMyLastScore(function (error, result) {
	    if(!error) {
		result1 = result[0];
		result2 = result[1];
		result3 = result[2];

	        adjusted1 = new web3.BigNumber(result1).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);		
		adjusted2 = new web3.BigNumber(result2).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);
		adjusted3 = new web3.BigNumber(result3).dividedBy(new web3.BigNumber(2).pow(256)).times(1000000);

		text1 = Number(adjusted1.toFixed(0)).toLocaleString();
		text2 = Number(adjusted2.toFixed(0)).toLocaleString();
		text3 = Number(adjusted3.toFixed(0)).toLocaleString();

		if (text1 != 0) {
		    $('#recent-bids').text("Your Recent Results: " + text1 + " (hour), " + text2 + " (day), " + text3 + " (week)");
		}
	    }
	});

	contract.totalBids(function (error, result) {
	    if(!error) {
	        $("#contract-bids").text(result + " Total Bids (View Contract)");
	    }
	});
    }

    refresh();
    setInterval(refresh, 1000);
}

window.addEventListener("load", function() {
    var failureText = "Cannot load";
    if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
        web3.version.getNetwork(function(error, result) {
            if (!error) {
                if (result == "1") {
                    setup();
                }
            }
        });
    } else {
        $("#error").html('Warning: web3 library not found. Please install the <a class="text-warning" href="https://metamask.io/">MetaMask</a> plugin to use this website.');
        $("#error").toggle(true);
        web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/93ve0hE3bjf9xJ5dlZod"));
        setup();
    }
});
