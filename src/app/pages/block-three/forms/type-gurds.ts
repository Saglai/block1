
function isNumber(value: number | string): value is number {
    if (typeof value === 'number') {
        return true;
    } 

    return false;
}