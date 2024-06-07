class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.bankBranchInstance) {
            this.branchInfo = branchInfo;
            BankBranch.bankBranchInstance = this;
        }
        return BankBranch.bankBranchInstance;
    }

    static get bankBranchInstance() {
        return this._bankBranchInstance;
    }

    static set bankBranchInstance(instance) {
        this._bankBranchInstance = instance;
    }

    getBranchInfo() {
        return this.branchInfo;
    }
}

// Usage
const branchA = new BankBranch("Branch A Information");
const branchB = new BankBranch("Branch B Information");

console.log(branchA === branchB); // true, both referring to the same instance

console.log(branchA.getBranchInfo()); // "Branch A Information"
console.log(branchB.getBranchInfo()); // "Branch A Information" (same as branchA)

