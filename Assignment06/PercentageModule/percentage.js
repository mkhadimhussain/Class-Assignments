// Named Export (Variable)
export const percentage = "Percentage (Named Export from Different Folder)";
// Named Export (Function)
export function percentage1() {
    const total = 500;
    const obtained = 250;
    const result = obtained / total * 100;
    return `The Percentage of ${obtained} in ${total} is ${result}%.`;
}
// Default Export
export default function percentage2() {
    const total = 1000;
    const obtained = 800;
    const result = obtained / total * 100;
    return `The Percentage of ${obtained} in ${total} is ${result}%.`;
}
