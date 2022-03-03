interface Array<T> {
    equals(arr2: Array<string>): boolean;
    sortString(): Array<string>
}
Array.prototype.sortString = function () {
    return this.sort((n1: string, n2: string) => {
        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        }

        return 0;
    });
}

Array.prototype.equals = function (arr2) {
    return (
        this.length === arr2.length &&
        this.sortString().every((value: string, index: number) => value === arr2.sortString()[index])
    );
};
