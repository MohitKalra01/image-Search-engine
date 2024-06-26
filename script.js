let searchForm = document.getElementById("searchForm");
let searchBox = document.getElementById("searchBox");
let searchResult = document.getElementById("searchResult");
let searchMoreBtn = document.getElementById("showMoreBtn");

const accesskey = "8UGPVxbPS5r1R2uR63ijnjyR5QRJFA0n1Y7llXkQWTA";


let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    
    const response = await fetch(url);
    const data = await response.json();
    if (page ===1){
        searchResult.innerHTML="";
    }
    
    
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink)
        
    })
    searchMoreBtn.style.display = "block";
    if (searchBox.value === ""){
        searchMoreBtn.style.display = "none";
    }

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();

})

searchMoreBtn.addEventListener("click", ()=>{
    page= page+1;
    searchImages();
})