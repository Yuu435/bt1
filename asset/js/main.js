const array = [1, 2, 3, 2, 4, 5, 6, 5, 7, 8, 9, 8];

const removeEle = (arr) => {
    const result = [];

    arr.forEach((element) => {
        if (!result.includes(element)) {  //Kiem tra
            result.push(element);
        }
    });
    return result;
}
const resultArray = removeEle(array);
console.log(resultArray);
