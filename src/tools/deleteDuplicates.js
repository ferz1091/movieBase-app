export function deleteDuplicates(arr) {
    let result = [];
    arr.forEach(item => {
        if (result.every(movie => movie.id !== item.id)) {
            result.push(item)
        }
    })
    return result;
}
