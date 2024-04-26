
// Named Export (Variable)
export const percentage: string = "Percentage (Named Export from Different Folder)";

// Named Export (Function)
export function percentage1(): string {
    const total: number = 500;
    const obtained: number = 250;
    const result: number = obtained / total * 100;
    return `The Percentage of ${obtained} in ${total} is ${result}%.`;
}


// Default Export
export default function percentage2() {
    const total: number = 1000;
    const obtained: number = 800;
    const result: number = obtained / total * 100;
    return `The Percentage of ${obtained} in ${total} is ${result}%.`;
}


