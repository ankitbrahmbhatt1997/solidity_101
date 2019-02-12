pragma solidity ^0.4.25;


contract Example{
    string public FirstName;
    

    constructor(string name) public{
        FirstName = name;   
    }
    function setName(string name) public {
        FirstName = name;
    }
    function getName() public view returns(string){
        return FirstName;
    }
}