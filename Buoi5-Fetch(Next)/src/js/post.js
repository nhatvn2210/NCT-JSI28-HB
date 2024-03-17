// DOM
const postsContainer = document.querySelector('.posts-container');
// Function
const renderPostList = postList => {
    if(postList){
        let htmls = postList.map(postItem  => {
            return `
            <div class = "post-item m-[12px] rounded-lg w-full">
                <div class = "w-2/3">
                    <h3 class = "post-title">${postItem.title}</h3>
                    <p>${postItem.content}</p>
                </div>
                <img src = '${postItem.image_path}'>;
            </div>
            `
        })
        postsContainer.innerHTML = htmls.join('');
    }
}

const handleGetPostList = () => {
    fetch('https://65ed29950ddee626c9b132e7.mockapi.io/api/v1/posts')
    .then(data => {
        return data.json();
    })
    .then(posts => {
         renderPostList(posts);
    })
    .catch(error => {
        console.error(error);
    })
}
// Main script
handleGetPostList();