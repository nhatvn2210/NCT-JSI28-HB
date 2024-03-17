// DOM
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
// Function
let handlesGetData = () => {
    fetch('https://65ed29950ddee626c9b132e7.mockapi.io/api/v1/food')
    .then(data => {
        return data.json();
    })
    .then(food => {
        renderCards(food);
    })
    .catch(error => {
        console.error(error);
    })
}
let renderCards = foodList => {
    if(foodList){
        let htmls = foodList.map(foodItem => {
            return `
            <li class="card w-1/3 p-[12px] text-center">
                <h3 class="title font-bold text-xl">${foodItem.name}</h3>
                <p class="description">${foodItem.description}</p>
                <img src="${foodItem.image_path}" class="w-full">
            </li>
            `
        });
        cardContainer.innerHTML = htmls;
    }
}
// Main script
handlesGetData();