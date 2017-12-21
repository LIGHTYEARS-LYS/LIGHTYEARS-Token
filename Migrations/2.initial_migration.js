var LYS = artifacts.require("./LYS.sol");



module.exports = function(deployer, network) {
		var owner = web3.eth.accounts[0];
		var btcproxy = web3.eth.accounts[1];
  deployer.deploy(LYS, {from: owner}).then(function(){
  	return deployer.deploy();
  });
};

/* ADD these step
truffle console:
LYS.at(LYS.address).balanceOf(address)
LYS.at(LYS.address).transferOwnership(address)
LYS.at(LYS.address).owner()
*/
