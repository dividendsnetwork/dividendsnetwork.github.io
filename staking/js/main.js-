function init() {

	$('#investDDT').click(investTokens);
	$('#divestDDT').click(divestTokens);
	$('#partialDivestDDT').click(partialDivestTokens);
	$('#reinvestProfit').click(reinvestProfits);
	$('#withdrawProfit').click(withdrawProfits);
	$('#withdrawAffiliate').click(withdrawAffiliate);
	for (var i = 0; i < 6; i++) {
		var tmpObj = $('#inheritPosition' + i);
		tmpObj.attr('index', i);
		tmpObj.click(inheritPosition);
	}

    controlLoop();
}

function controlLoop() {
    refreshData();
    setTimeout(controlLoop, 15000);
}

function refreshData() {
    
    updateDDTBalance()
    updateBalanceSurplus();
    updateVaultInterestPerDay();
    //updateAge();
    updateInvested();
    updateProfit();
    updateAffiliate();
    updateAllPositions();

}

function investTokens() {
	var amount = parseFloat($('#investmentAmount').val());
	if (!$('#investmentAmount').val().length) {
		var bg = $('#investInputs');
		bg.addClass('error');
		setTimeout(function() {
			bg.removeClass('error');
		}, 200);
	} else {
	    var tokensToSpend = web3.toWei(amount, 'ether'); // tokens have 18 decimals like ETH
		investDDT(tokensToSpend, function() {
			// done
		});
	}
}

function divestTokens() {
	divestDDT(function() {
		// done
	});
}

function partialDivestTokens() {
	var amount = parseFloat($('#divestAmount').val());
	if (!$('#divestAmount').val().length) {
		var bg = $('#divestInputs');
		bg.addClass('error');
		setTimeout(function() {
			bg.removeClass('error');
		}, 200);
	} else {
	    var tokensToWithdraw = web3.toWei(amount, 'ether'); // tokens have 18 decimals like ETH
		partialDivestDDT(tokensToWithdraw, function() {
			// done
		});
	}
}

function reinvestProfits() {
	reinvestProfit(function() {
		// done
	});
}

function withdrawProfits() {
	withdrawProfit(function() {
		// done
	});
}

function withdrawAffiliate() {
	withdrawAffiliateCommission(function() {
		// done
	});
}

function updateAllPositions() {
	getAllInvestorPositions(function(currentPrices, halfLives, percentageCuts) {
		for (var i = 0; i < currentPrices.length; i++) {
			var ethPrice = formatEthValue(web3.fromWei(currentPrices[i], 'ether'));
			$('#positionCost' + i).text(ethPrice);
			$('#positionCost' + i).attr('cost', currentPrices[i]);
			$('#positionHalfLife' + i).text(Math.floor(halfLives[i]/86400));
			$('#positionPercent' + i).text(percentageCuts[i]);
		}
	});
}

function inheritPosition() {
    var index = parseInt($(this).attr('index'));
    var cost = parseFloat($('#positionCost' + index).attr('cost'));
    inheritInvestorPosition(cost, index, function() {
        // done
    });
}

function updateDDTBalance() {
	getDDTBalance(function(ddtBalance) {
		var myDDT = formatEthValue(web3.fromWei(ddtBalance, 'ether'));
		$('#myDDT').text(myDDT);
	});
}

function updateBalanceSurplus() {
	getBalance(function(balance) {
		var ethBalace = formatEthValue(web3.fromWei(balance, 'ether'));
		$('#balanceDDT').text(ethBalace);
		getSurplus(function(surplus) {
			var ethSurplus = formatEthValue(web3.fromWei(surplus, 'ether'));
			$('#surplusDDT').text(ethSurplus);
			if (surplus > 0)
				$('#surplus').removeClass('negative').addClass('positive');
			else
				$('#surplus').removeClass('positive').addClass('negative');

			var totalWithdrawable = (balance - surplus);
			$('#surplusDDTPercent').text('(' + (surplus > 0 ? '+' : '') + (100 * surplus / totalWithdrawable).toFixed(1) + '%)');
		});
	});
}

function updateVaultInterestPerDay() {
	getVaultInterestPerDay(function(interest) {
		var ethInterest = formatEthValue(web3.fromWei(interest, 'ether'));
		$('#interestDDT').text(ethInterest);
	});
}

function updateAge() {
	getAge(function(age) {
		$('#runningTime').text(moment.duration(age,'seconds').format("y [years], w [weeks], d [days], h [hours], m [minutes]"));
	});
}

function updateInvested() {
	getInvested(function(price) {
		var ethPrice = formatEthValue(web3.fromWei(price, 'ether'));
		$('#activeAmount').text(ethPrice);
	});
}

function updateProfit() {
	getMyProfit(function(price) {
		var ethPrice = formatEthValue(web3.fromWei(price, 'ether'));
		$('#profitAmount').text(ethPrice);
	});
}

function updateAffiliate() {
	getAffiliateCommission(function(price) {
		var ethPrice = formatEthValue(web3.fromWei(price, 'ether'));
		$('#affiliateAmount').text(ethPrice);
	});
}

function formatEthValue(ethstr) {
    var floatVal = parseFloat(ethstr);
    if (floatVal > 0) {
        var zeroes = Math.floor(log10(floatVal));
        /*var postfix = '';
        if (zeroes >= 3) {
            postfix = 'k';
            floatVal /= 1000;
            zeroes = 5 - zeroes;
        } else {
            zeroes = Math.min(5, 4 - zeroes);
        }*/

        zeroes = Math.min(5, 4 - zeroes);
         
        return parseFloat(floatVal.toFixed(Math.max(0, zeroes))).toLocaleString(); // + postfix;
    } else return 0;
}

function log10(val) {
    return Math.log(val) / Math.log(10);
}

$(document).ready(init);

