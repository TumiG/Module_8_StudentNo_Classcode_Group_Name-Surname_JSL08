// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo
let bankBranchInstance = null;
// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
class BankBranch {
    constructor (branchInfo) {
        if (bankBranchInstance == null) {
            this.branchInfo = branchInfo; 
            bankBranchInstance = this; 
        }
        return bankBranchInstance;
    }
    getBranchInfo() {
        return this.branchInfo;
    }
}

const branchA = new BankBranch("Branch A Info");
const branchB = new BankBranch("Branch B Info"); 

console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

console.log(branchA === branchB);
