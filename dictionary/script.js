const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let paraset=document.getElementById("paraset");
let button=document.getElementById("btn");
let speaker=document.getElementById("speaker");

button.addEventListener("click",()=>{
    let inbtn=document.getElementById("inbtn").value;

    fetch(`${url}${inbtn}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        paraset.innerHTML=` <div class="para">
            <h2>${inbtn}</h2>
            <button>
            <i class="fa-solid fa-volume-high"id="speaker"></i>
            </button>
        </div>
        <div class="state">
            <p>${data[0].meanings[0].partsOfSpeech}</p> 
            <p>/${data[0].phonetic}/</p>
            
        </div>
        <div class="statement">
            <p>${data[0].meanings[0].definitions[0].definition}</p>
                <p id="set">${data[0].meanings[0].definitions[0].example||""} </p>
        </div>`
    });
    
        

    
    });
//async fnction

//button.addEventListener("click",async()=>{
  //  let inbtn=document.getElementById("inbtn").value;
//let response= await fetch(`${url}${inbtn}`);
//let data=responsejson();
//console.log(data);
//});