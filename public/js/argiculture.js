const { web3 } = window
const selectedAddress = web3.eth.defaultAccount

$(document).ready(function() {
    const productRegistryContractAddress = '0xf65B26023D9DEbc4adA5E76a939d82bCe4d2252e';
    const productRegistryContractABI = [
		{
		   "constant": false,
		   "inputs": [
			  {
				 "name": "_initNumber",
				 "type": "uint256"
			  },
			  {
				 "name": "_account",
				 "type": "string"
			  }
		   ],
		   "name": "addAccountList",
		   "outputs": [],
		   "payable": false,
		   "stateMutability": "nonpayable",
		   "type": "function"
		},
		{
		   "constant": false,
		   "inputs": [
			  {
				 "name": "_initNumber",
				 "type": "uint256"
			  },
			  {
				 "name": "_account",
				 "type": "string"
			  },
			  {
				 "name": "_donateCoin",
				 "type": "uint256"
			  },
			  {
				 "name": "_donationTo",
				 "type": "string"
			  }
		   ],
		   "name": "addDonationList",
		   "outputs": [],
		   "payable": false,
		   "stateMutability": "nonpayable",
		   "type": "function"
		},
		{
		   "constant": false,
		   "inputs": [
			  {
				 "name": "_initNumber",
				 "type": "uint256"
			  },
			  {
				 "name": "_account",
				 "type": "string"
			  },
			  {
				 "name": "_donateCoin",
				 "type": "uint256"
			  },
			  {
				 "name": "_donationTo",
				 "type": "string"
			  }
		   ],
		   "name": "addDonaToCoinList",
		   "outputs": [],
		   "payable": false,
		   "stateMutability": "nonpayable",
		   "type": "function"
		},
		{
		   "constant": false,
		   "inputs": [],
		   "name": "killContract",
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
		   "constant": true,
		   "inputs": [
			  {
				 "name": "",
				 "type": "uint256"
			  }
		   ],
		   "name": "accountLists",
		   "outputs": [
			  {
				 "name": "number",
				 "type": "uint256"
			  },
			  {
				 "name": "account",
				 "type": "string"
			  },
			  {
				 "name": "timestamp",
				 "type": "uint256"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [
			  {
				 "name": "",
				 "type": "uint256"
			  }
		   ],
		   "name": "donationLists",
		   "outputs": [
			  {
				 "name": "number",
				 "type": "uint256"
			  },
			  {
				 "name": "account",
				 "type": "string"
			  },
			  {
				 "name": "donateCoin",
				 "type": "uint256"
			  },
			  {
				 "name": "donationTo",
				 "type": "string"
			  },
			  {
				 "name": "timestamp",
				 "type": "uint256"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [
			  {
				 "name": "",
				 "type": "uint256"
			  }
		   ],
		   "name": "donaToCoinLists",
		   "outputs": [
			  {
				 "name": "number",
				 "type": "uint256"
			  },
			  {
				 "name": "account",
				 "type": "string"
			  },
			  {
				 "name": "donateCoin",
				 "type": "uint256"
			  },
			  {
				 "name": "donationTo",
				 "type": "string"
			  },
			  {
				 "name": "timestamp",
				 "type": "uint256"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [
			  {
				 "name": "_index",
				 "type": "uint256"
			  }
		   ],
		   "name": "getAccountListsRe",
		   "outputs": [
			  {
				 "name": "",
				 "type": "string"
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
		   "name": "getAllAccounts",
		   "outputs": [
			  {
				 "components": [
					{
					   "name": "number",
					   "type": "uint256"
					},
					{
					   "name": "account",
					   "type": "string"
					},
					{
					   "name": "timestamp",
					   "type": "uint256"
					}
				 ],
				 "name": "",
				 "type": "tuple[]"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [],
		   "name": "getAllDonations",
		   "outputs": [
			  {
				 "components": [
					{
					   "name": "number",
					   "type": "uint256"
					},
					{
					   "name": "account",
					   "type": "string"
					},
					{
					   "name": "donateCoin",
					   "type": "uint256"
					},
					{
					   "name": "donationTo",
					   "type": "string"
					},
					{
					   "name": "timestamp",
					   "type": "uint256"
					}
				 ],
				 "name": "",
				 "type": "tuple[]"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [],
		   "name": "getAllDonaToCoins",
		   "outputs": [
			  {
				 "components": [
					{
					   "name": "number",
					   "type": "uint256"
					},
					{
					   "name": "account",
					   "type": "string"
					},
					{
					   "name": "donateCoin",
					   "type": "uint256"
					},
					{
					   "name": "donationTo",
					   "type": "string"
					},
					{
					   "name": "timestamp",
					   "type": "uint256"
					}
				 ],
				 "name": "",
				 "type": "tuple[]"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [
			  {
				 "name": "_index",
				 "type": "uint256"
			  }
		   ],
		   "name": "getDonationListsRe",
		   "outputs": [
			  {
				 "name": "",
				 "type": "string"
			  },
			  {
				 "name": "",
				 "type": "string"
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
		   "inputs": [
			  {
				 "name": "_index",
				 "type": "uint256"
			  }
		   ],
		   "name": "getDonaToCoinRe",
		   "outputs": [
			  {
				 "name": "",
				 "type": "string"
			  },
			  {
				 "name": "",
				 "type": "string"
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
		   "name": "getNumOfAccounts",
		   "outputs": [
			  {
				 "name": "",
				 "type": "uint8"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [],
		   "name": "getNumOfDonations",
		   "outputs": [
			  {
				 "name": "",
				 "type": "uint8"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		},
		{
		   "constant": true,
		   "inputs": [],
		   "name": "getNumOfDonaToCoins",
		   "outputs": [
			  {
				 "name": "",
				 "type": "uint8"
			  }
		   ],
		   "payable": false,
		   "stateMutability": "view",
		   "type": "function"
		}
	 ]


    $('#linkHome').click(function() { showView("viewHome") });
    $('#linkSubmitDocument').click(function() { showView("viewSubmitDocument"); showTable();  });
    $('#linkVerifyDocument').click(function() { showView("viewVerifyDocument") });
    $('#itemUploadButton').click(itemUploadButton);
    $('#showTableButton').click(showTable);
	

	
    $('#contractLink').text(productRegistryContractAddress);
    $('#contractLink').attr('href', 'https://ropsten.etherscan.io/address/' + productRegistryContractAddress);
	    
    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }    
    });
    
    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }
    
    function showInfo(message) {
        $('#infoBox>p').html(message);
        $('#infoBox').show();
        $('#infoBox>header').click(function(){ $('#infoBox').hide(); });
    }

    function showError(errorMsg) {
        $('#errorBox>p').html("Error: " + errorMsg);
        $('#errorBox').show();
        $('#errorBox>header').click(function(){ $('#errorBox').hide(); });
    }

	async function showTable() {
        // $('#viewSubmitDocument>table').html( );
        // $('#viewSubmitDocument').show();

		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
                return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
		

		let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);


		$('#myTable').append(  '<table>' );

	

		contract.getNumOfDonations(function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			
				
			// showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
			console.log("length: " + result);

			for (let i = 0; i < result; i++) {

				contract.getDonationListsRe(i, function(err, product) {

					console.log("product: " + product);

					let toString = product.toString();
					// console.log("product: " + toString);
					let strArray = toString.split(",");

					let timestamp = new Date(strArray[3]*1000);
					console.log("timestamp: " + timestamp);
					console.log("timestamp: " + strArray[3]*1000);

					// let row = table.insertRow();
					// let cell1 = row.insertCell(0);
					// let cell2 = row.insertCell(1);
					// let cell3 = row.insertCell(2);
					// let cell4 = row.insertCell(3);
					// cell1.innerHTML = strArray[0];
					// cell2.innerHTML = strArray[1];
					// cell3.innerHTML = strArray[2];
					// cell4.style.width ="60%";
					// cell4.innerHTML = timestamp;

					$('#myTable').append( '<tr><td>' + strArray[0] + ", "+ strArray[1] + ", "+ strArray[2] + ", "+ timestamp  + '</td></tr>' );

				})  // end of get

			} // end of for

		}); 


		

		

		// for(i=0;i<3;i++){
		// 	$('#myTable').append( '<tr><td>' + 'result' +  i + '</td></tr>' );
		// }		

 		$('#myTable').append(  '</table>' );

    }
    
    async function itemUploadButton() {
        // if ($('#documentForUpload')[0].files.length == 0)
            // return showError("Please select a file to upload.");

		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
                return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
			
		let account = selectedAddress 
		console.log("my account " , account);
		
		let receiver = $("#receiv").val();
		console.log("receiver " , receiver);
		
		//let whenIs = "test";
		// let whenIs = $("#when").val();
		// console.log("whenIs " , whenIs);

		let howMany = $("#price").val();
		console.log("howMany " , howMany);
		
		let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);

		contract.addDonationList(1, account, receiver, howMany, function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
		}); 
		
    }

    function verifyDocument() {
		
		
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
			
		let account = selectedAddress 
		console.log("my account " , account);
		

 
    }
});
