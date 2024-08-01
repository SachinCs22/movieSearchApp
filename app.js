
let input=document.querySelector('input');
let button=document.querySelector('button');
let list=document.querySelector('#list');

button.addEventListener('click',function(){
    let searchText=input.value;
    let data=fetchData(searchText);
    input.value='';
})

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      .then(function(response){
        // console.log(response);
        manipulateDom(response.data);
      })
}

function manipulateDom(datas){

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }


    for(let data of datas){
        let figure=document.createElement('figure');
        if(data.show.image){
            figure.innerHTML=`
            <img src=${data.show.image.original} />
            <h2>${data.show.name}</h2>
            `
            // <p>${data.show.summary}</p>
            list.appendChild(figure);
        }
    }
}









