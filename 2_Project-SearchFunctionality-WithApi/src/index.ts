// const formSubmit:HTMLFormElement |null =document.querySelector("#form");
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const getUserName = document.querySelector("#user") as HTMLInputElement;
const mainContainer = document.querySelector(".main_container") as HTMLElement;

// const responseData = async (): Promise<any[]> => {
//   const data: Response = await fetch("https://api.github.com/users");
//   const response: any[] = await data.json();
//   return  response;
// };

// // Fetching data
// responseData()
// .then((fetchData)=>console.log(fetchData))

const fetchingData = async (): Promise<any> => {
  try {
    const response = await fetch("https://api.github.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json(); // Returning JSON data directly
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null if there's an error
  }
};
// Fetch data
fetchingData()
  .then((data) => {
    data.map((singleUser: any) => {
      showResultUi(singleUser)
    });
  });

function showResultUi(singleUser: any) {
  const { avatar_url, login, url } = singleUser;
  mainContainer.insertAdjacentHTML("beforeend",
    `
     <div class="card">
        <div class="card-img">
           <img src=${avatar_url} alt=${login}></img>
        <div>
        <div class="card-footer">
           <img src=${avatar_url} alt=${login} />
           <p>${login}</p>
           <a href=${url}>Github</a>
        </div>
      </div>
    `)
}


//let's search functionality
formSubmit.addEventListener("input",async(e)=>{  //"submit" used then click or press then work done.
  e.preventDefault();
  const searchName=getUserName.value.toLowerCase();

  // Fetch data
const allUserData=await fetchingData();
const matchingUser=allUserData.filter((user: { login: string; })=>{
return user.login.toLowerCase().includes(searchName)
})
mainContainer.innerHTML=""
if(matchingUser.length===0){
  mainContainer.insertAdjacentHTML("beforeend",
    `<p>No matching user data?</p>`
  )
  }else{
    matchingUser.map((signalUser: any)=>showResultUi(signalUser))
  }
});
