// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Token {
    uint32 public num;

    function balanceOf(address account) public view returns (uint256) {
        return account.balance;
    }

    function nothing() public {
    }

    function add(uint32 i) public {
        num = num + i;
    }
}

contract Factory {
    address[] public children;
    uint32 public num;

    function create(uint count) public {
        for (uint i = 0; i < count;) {
            Token token = new Token();
            children.push(address(token));
            unchecked {
                i++;
            }
        }
    }

    function nothing() public {
    }

    function add(uint32 i) public {
        num = num + i;
    }

    function len() public view returns (uint256) {
        return children.length;
    }
}