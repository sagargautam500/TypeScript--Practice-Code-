// console.log("this is first website using typescript:");
const btn=document.querySelector(".clickMe") as HTMLButtonElement;
// const body=document.body as HTMLElement;
const bodyEle:HTMLElement=document.body ;
let isWhite:boolean=true;
let color:string[]=["red","yellow","orange","blue","pink","brown"]
// let ranNum:number=Math.floor(Math.random() * 7);

btn.addEventListener("click",()=>{
  // console.log(" i am click")
  if(isWhite){
    bodyEle.style.backgroundColor=color[Math.floor(Math.random() * 7)];
  }else{
    bodyEle.style.backgroundColor="";
  }
  isWhite=!isWhite;
})