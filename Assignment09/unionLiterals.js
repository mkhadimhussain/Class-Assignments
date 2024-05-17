// Union Literals
// A union literal in TypeScript is a type that represents a set of specific, 
// literal values that a variable or parameter can take. It combines multiple 
// literal types into one type, allowing the variable or parameter to accept 
// any of those specified literal values.
var rollNum;
// Now rollNum only accept string and numbers
rollNum = 12345;
rollNum = "GIAIC 12345";
// rollNum = true;     // Shows Error
console.log(rollNum); // Output: GIAIC 12345 
// Another Example
var yesNo;
// Now variable accepts string, numbers and booleans
yesNo = "Yes";
yesNo = 1;
yesNo = true;
console.log(yesNo); // Output: true
//----------------------------------------------------------------------------------
console.log();
// type is a keyword used to define custom types. When you write 
// type Status = "Pending" | "Approved" | "Rejected";, you are creating a new type named Status. 
// This type Status is a union type, specifically a union of literal string types.
function getStatusMessage(status) {
    switch (status) {
        case "Pending":
            return "Your request is pending approval.";
        case "Approved":
            return "Your request has been approved.";
        case "Rejected":
            return "Sorry, your request has been rejected.";
        default:
            throw new Error("Invalid status.");
    }
}
console.log(getStatusMessage("Pending")); // Output: Your request is pending approval.
console.log(getStatusMessage("Approved")); // Output: Your request has been approved.
console.log(getStatusMessage("Rejected")); // Output: Sorry, your request has been rejected.
