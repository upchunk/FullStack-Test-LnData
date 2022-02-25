interface Array<T> {
    equals(arr2: Array<string>): boolean;
}

Array.prototype.equals = function (arr2) {
    arr2 = arr2.sort();
    return (
        this.length === arr2.length &&
        this.every((value: string, index: number) => value === arr2[index])
    );
};

const checkAnswer1 = (output: Array<string>, answer: Array<string>) => {
    const compare = output.equals(answer)
    if (compare !== true) {
        throw new Error(`Answer is incorrect: ${output} with ${answer}`);
    }
}
module.exports = {
    checkAnswer1
}