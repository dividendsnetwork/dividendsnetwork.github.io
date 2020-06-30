var abi = [{"constant":false,"inputs":[],"name":"divest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSurplus","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"partialDivest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"storedProfit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAffiliateCommission","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getProfitFromSender","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"investedDDT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getInvestorPosition","outputs":[{"name":"investor","type":"address"},{"name":"currentPrice","type":"uint256"},{"name":"halfLife","type":"uint256"},{"name":"percentageCut","type":"uint256"},{"name":"startingTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastInvest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDDTforInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllInvestorPositions","outputs":[{"name":"investors","type":"address[]"},{"name":"currentPrices","type":"uint256[]"},{"name":"halfLives","type":"uint256[]"},{"name":"percentageCuts","type":"uint256[]"},{"name":"startingTimes","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getVaultInterestPerDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAffiliateCommission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInvested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"tokenFallback","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"customer","type":"address"}],"name":"getProfit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"affiliateCommission","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalAffiliateDDT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStoredDDT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvestProfit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_DDAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];
var DDabi = [{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canAcceptTokens_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_value","type":"bool"}],"name":"setCanAcceptTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"stickyRef","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"giveEthFundAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"etherToSendFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthFundCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"address"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payFund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthFundRecieved","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}];

var contractAddress = "0xe26Eb67bB1CB79024ae2840a0F0711bAa70a0a5D";
var DDAddress = "0xd2bfCEeaB8FFa24cDF94FaA2683Df63DF4bCBdC8";

function investDDT(tokens, callback) {
    var contractAbi = web3.eth.contract(DDabi);
    var myContract = contractAbi.at(DDAddress);
    var outputData = myContract.transferAndCall.getData(contractAddress, tokens, 0x0);
    var endstr = web3.eth.sendTransaction({to:DDAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else {
            console.log('error :(');
        }
    });
}

function divestDDT(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.divest.getData();
    var endstr = web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else{
            console.log('error :(');
        }
    });
}

function partialDivestDDT(amount, callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.partialDivest.getData(amount);
    var endstr = web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else{
            console.log('error :(');
        }
    });
}

function reinvestProfit(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.reinvestProfit.getData();
    var endstr = web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else {
            console.log('error :(');
        }
    });
}

function getDDTBalance(callback) {
    var contractAbi = web3.eth.contract(DDabi);
    var myContract = contractAbi.at(DDAddress);
    var outputData = myContract.myTokens.getData();
    var endstr = web3.eth.call({to:DDAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getBalance(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getBalance.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getSurplus(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getSurplus.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getVaultInterestPerDay(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getVaultInterestPerDay.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getAge(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getAge.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getInvested(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getInvested.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else{
            console.log('error :(');
        }
    });
}

function getAffiliateCommission(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getAffiliateCommission.getData();
    var endstr=web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else {
            console.log('error :(');
        }
    });
}

function withdrawAffiliateCommission(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdrawAffiliateCommission.getData();
    var endstr = web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else {
            console.log('error :(');
        }
    });
}

function getMyProfit(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.getProfitFromSender.getData();
    var endstr = web3.eth.call({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result));
        } else {
            console.log('error :(');
        }
    });
}

function withdrawProfit(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var outputData = myContract.withdraw.getData();
    var endstr = web3.eth.sendTransaction({to:contractAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else {
            console.log('error :(');
        }
    });
}

function getInvestorPosition(index, callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var endstr = myContract.getInvestorPosition.call(index,
    function(error, result) {
        if (!error) {
            callback(web3.toDecimal(result[1]), web3.toDecimal(result[2]), web3.toDecimal(result[3]));
        } else {
            console.log('error :(');
        }
    });
}

function getAllInvestorPositions(callback) {
    var contractAbi = web3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);
    var endstr = myContract.getAllInvestorPositions.call(function(error, result) {
        if (!error) {
            var currentPrices = [];
            var halfLives = [];
            var percentageCuts = [];
            for (var i = 0; i < result[0].length; i++) {
                currentPrices.push(web3.toDecimal(result[1][i]));
                halfLives.push(web3.toDecimal(result[2][i]));
                percentageCuts.push(web3.toDecimal(result[3][i]));
            }

            callback(currentPrices, halfLives, percentageCuts);
        } else {
            console.log('error :(');
        }
    });
}

function inheritInvestorPosition(tokens, index, callback) {
    var data = web3.fromDecimal(index + 1);
    if (data.length == 3) {
        data = data.replace('0x', '0x0');
    }

    var contractAbi = web3.eth.contract(DDabi);
    var myContract = contractAbi.at(DDAddress);
    var outputData = myContract.transferAndCall.getData(contractAddress, tokens, data);
    var endstr = web3.eth.sendTransaction({to:DDAddress, from:null, data: outputData},
    function(error, result) {
        if (!error) {
            callback();
        } else {
            console.log('error :(');
        }
    });
}

