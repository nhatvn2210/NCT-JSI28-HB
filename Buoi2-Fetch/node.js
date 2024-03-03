let myArr = [0, 1, 2, 3];
const newArr = myArr.map(function (number){
    return number + 1;
})
console.log(newArr);
async function callAPI() {
    let postListData = await fetch('https://jsonplaceholder.typicode.com/photos');
    
    let postData = await response.json();

    console.log(postData);
}
callAPI();