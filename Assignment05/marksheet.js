////////////////////// CLASS ASSIGNMENT 05 //////////////////////
//This is the Assignment of Class 07
//Question: Make a Module with parameters and arguments.
//We have created two files:   1) marksheet.ts   and   2) main.ts
//In "marksheet.ts file" we export the function and
//In "main.ts file" we import the function 
//Creating the module in which we defined the function name as myMarksheet
function myMarksheet(math, comp, pst, eng, urdu) {
    const totalMarks = 500;
    const obtainedMarks = math + comp + pst + eng + urdu;
    const myPercentage = obtainedMarks / totalMarks * 100;
    return myPercentage;
}
//exporting the function than somebody can import my function and use it
export default myMarksheet;
