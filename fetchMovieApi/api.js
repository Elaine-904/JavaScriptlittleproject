function searchMovie(){
    const year = getInput();
    const url = `https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`
    getApi(url);

}

async function getApi(url){
    let arr =[];
    const res = await fetch(url);
    const result = await res.json();
    const final = result.data;
    
    const content = final.map(a=>{
        return `<tr>
                    <td>${a.Title}</td>
                </tr>`
    })
    
    document.getElementById("myTable").innerHTML=content;
}

function searchMovieTitle(){
    const substr = getInput();
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    getApi(url);
}


//sort 
function sortMovie(){
    let table, tr,td,i,txtValue,content;
    let arr=[];
    table = document.getElementById('myTable');
    tr = document.getElementsByTagName('tr');
    for(i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName('td')[0];
        txtValue=td.textContent;
        arr.push(txtValue);
        arr.sort();
    }
    content = arr.map(a=>{
        return `<tr>
                    <td>${a}</td>
                </tr>`
    })
    document.getElementById('myTable').innerHTML=content;
    
}


//filter
function filterMovie(){
    let input,filter,table,tr,td,i,txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

function getInput() {
    const s = document.getElementById(
        "search").value;
    document.getElementById(
        "test").innerHTML =`<h2> ${s} </h2>`
    return s;
}


function clear(){
    document.getElementById("search").value="";
}



