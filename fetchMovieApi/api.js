function searchMovie(){
    const year = getInput();
    const url = `https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`
    console.log(year)
    getApi(url);

}

async function getApi(url){
    const res = await fetch(url);
    const result = await res.json();
    const final = result.data;
    const content=final.map(c=>{
        return `<li class="movie">book   title: ${c.Title}<br></li>
                <li class="movie">publish year: ${c.Year}</li>`
    })
    return document.getElementById("title").innerHTML=content;
}

function searchMovieTitle(){
    const substr = getInput();
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    console.log(substr);
    getApi(url);
}

function getInput() {
    const s = document.getElementById(
        "search").value ;
   
    document.getElementById(
        "test").innerHTML =`<h2> ${s} </h2>`
      
    return s;
}

function clear(){
    document.getElementById("search").value="";
}


