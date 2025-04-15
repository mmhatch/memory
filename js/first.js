let n = 0;
let color = 0;
document.getElementById("color").addEventListener("click", function() {
    if(color===1){
        color= 0
    }
    else{
        color = 1
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
        console.log("is a match")
        document.getElementById(id1).classList.add("correct");
        document.getElementById(id2).classList.add("correct");
        }
    else{
         console.log("not a match")
         document.getElementById("next_try").classList.add("next");
    }}
    else{
        n=1
    }
    
}
}
)})
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
    console.log("test")
    document.querySelectorAll('.images').forEach((image)=>{
       image.style.display='none'; 
       if(color===1){
       }
    })
    document.querySelectorAll('.blue').forEach((blueimage)=>{
        blueimage.style.display='block'; 
     })
 })




