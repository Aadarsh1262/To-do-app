let input = document.getElementById("input");
let list = document.getElementById("list");

function add(){
    if(input.value===""){
        alert("Please add a text or URL");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        save()

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        save()

    }
    input.value="";
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        save()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save()
    }
})

function save(){
    localStorage.setItem("data",list.innerHTML);
}
function display(){
    list.innerHTML=localStorage.getItem("data");
}
display();