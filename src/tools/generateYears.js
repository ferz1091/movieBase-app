export function generateYears() {
    let arrayOfYears = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 75; i++) {
        arrayOfYears.push(currentYear - i);
    }
    return arrayOfYears;
}
