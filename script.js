const access_key = "gvQVJC2sQZzoUONRpLbVmNCX36V1cMKNcjBnM64LinQ";
const form = document.querySelector("form");
const input = document.querySelector("#input");
const moreBtn = document.querySelector(".search-images-btn");
const imageContainer = document.querySelector(".search-images");
const SearchImage = async(e)=>{
    imageContainer.innerHTML = '';
    e.preventDefault();
    const imgData = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${access_key}&per_page=12`)
    const imgObj = await imgData.json();
    console.log(imgObj);
    const arr = imgObj.results;
    arr.forEach((el,index) => {
        imageContainer.innerHTML += `<img class="h-60 m-2" src="${imgObj.results[index].urls.full}"/>`
    });
    input.value = '';
    // moreBtn.innerHTML += (`<button class="bg-red-400 p-2 w-32">More</button>`);
}
form.addEventListener("submit",SearchImage);
