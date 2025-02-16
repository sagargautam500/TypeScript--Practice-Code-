console.log("this is first website using typescript:");
const btn = document.querySelector(".clickMe");
// const body=document.body as HTMLElement;
const bodyEle = document.body;
let isWhite = true;
let color = [
    "red",
    "yellow",
    "orange",
    "blue",
    "pink",
    "brown"
];
// let ranNum:number=Math.floor(Math.random() * 7);
btn.addEventListener("click", ()=>{
    // console.log(" i am click")
    if (isWhite) bodyEle.style.backgroundColor = color[Math.floor(Math.random() * 7)];
    else bodyEle.style.backgroundColor = "";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
