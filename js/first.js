let n = 0;
let  match = 0;
let  turns = 0;
let color = 0;
let i =0
document.getElementById("in").style.display='none';
document.getElementById("rules").addEventListener("click",function(){
    if(i===1){
        i= 0
        document.getElementById("in").style.display='none';
    }
    else{
        i = 1
        document.getElementById("in").style.display='block';
    }
})
document.getElementById("won").style.display = "none";
document.getElementById("score").innerHTML = "Matches: "+match+"/16"
document.getElementById("turns").innerHTML = "Attempts: "+turns
document.getElementById("color").addEventListener("click", function() {
    if(color===1){
        color= 0
        document.getElementById("color").classList.remove("checked")
    }
    else{
        color = 1
        document.getElementById("color").classList.add("checked")
    }
})
document.querySelectorAll('.photos').forEach((images)=>{
images.addEventListener("click", function() {
    n+=1
let ids = [];
let children = images.children; 
for (let i = 0, len = children.length ; i < len; i++) {
    ids.push(children[i].id); 
    // https://stackoverflow.com/questions/27629122/how-to-get-all-ids-inside-of-a-div-using-pure-javascript
}
if(n===1){
id1 = ids[0]
document.getElementById("match").classList.add("hidden");
cl1 = document.getElementById(id1).getAttribute("class")
document.getElementById(id1).style.display='block';
document.getElementById(id1+"b").style.display='none';
if(color===1){
document.getElementById(id1+"d").style.display = "block";
}
}
else if (n ===2){
    id2 = ids[0]
    if (id1 !== id2){
cl2 = document.getElementById(id2).getAttribute("class")
document.getElementById(id2).style.display='block';
document.getElementById(id2+"b").style.display='none';
if(color===1){
    document.getElementById(id2+"d").style.display = "block";
    }
     if (cl1 === cl2){
        n=0;
        match += 1;
        turns += 1;
        document.getElementById("turns").innerHTML = "Attempts: "+turns;
        document.getElementById("score").innerHTML = "Matches: "+match+"/16";
        document.getElementById(id1).classList.add("correct");
        document.getElementById(id2).classList.add("correct");
        document.getElementById("match").classList.remove("hidden");
        console.log(match)
        if(match===16){
            document.getElementById("final").innerHTML = "It took you "+turns+" turns to win";
            document.getElementById("won").style.display = "block";
        }
        }
    else{
        turns += 1;
        document.getElementById("turns").innerHTML = "Attempts: "+turns;
         console.log("not a match")
         document.getElementById("next_try").classList.add("next");
    }}
    else{
        n=1
    }
    
}
else if (n ===3){   
  document.getElementById("next_try").classList.remove("next");
  document.getElementById(id1).style.display='none';
  document.getElementById(id2).style.display='none';
  document.getElementById(id1+"b").style.display='block';
  document.getElementById(id2+"b").style.display='block';
  document.getElementById(id1+"d").style.display = "none";
  document.getElementById(id2+"d").style.display = "none";
  n=0;
}
}
)
}
)

 document.getElementById("next_try").addEventListener("click",function(){
  document.getElementById("next_try").classList.remove("next");
  document.getElementById(id1).style.display='none';
  document.getElementById(id2).style.display='none';
  document.getElementById(id1+"b").style.display='block';
  document.getElementById(id2+"b").style.display='block';
  document.getElementById(id1+"d").style.display = "none";
  document.getElementById(id2+"d").style.display = "none";
  n=0;
 })
 document.getElementById("reset").addEventListener("click",function(){
    match = 0;
    turns = 0;
    document.getElementById("won").style.display = "none";
    document.getElementById("score").innerHTML = "Matches: "+match+"/16"
document.getElementById("turns").innerHTML = "Attempts: "+turns
    document.querySelectorAll('.images').forEach((image)=>{
       image.style.display='none'; 
       if(color===1){
       }
    })
    document.querySelectorAll('.blue').forEach((blueimage)=>{
        blueimage.style.display='block'; 
     })
 })
 document.getElementById("reset1").addEventListener("click",function(){
    match = 0;
    turns = 0;
    document.getElementById("won").style.display = "none";
    document.getElementById("score").innerHTML = "Matches: "+match+"/16"
document.getElementById("turns").innerHTML = "Attempts: "+turns
    document.querySelectorAll('.images').forEach((image)=>{
       image.style.display='none'; 
       if(color===1){
       }
    })
    document.querySelectorAll('.blue').forEach((blueimage)=>{
        blueimage.style.display='block'; 
     })
 })




