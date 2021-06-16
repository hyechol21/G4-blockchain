const { web3 } = window


$(document).ready(function() {

	async function itemUploadButton() {

		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
                return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
		
		
		const selectedAddress = web3.eth.defaultAccount

		console.log("selectedAddress: " , selectedAddress);

	}

	itemUploadButton();

	

	
});
