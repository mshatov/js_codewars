function findMissing(arr1, arr2) {
    return arr1.reduce((sum, item) => (sum + item), 0)
           - arr2.reduce((sum, item) => (sum + item), 0);
}