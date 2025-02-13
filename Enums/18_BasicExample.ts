// enum Roles{
//   Admin,
//   user
// }
enum Roles1{
  admin="Admin",
  user="User"
}

type loginDetails={
  name?:string;
  email:string;
  password:string;
  // roles:string;        
  roles:Roles1        //enum used for roles is Admin or User
}
 const User1:loginDetails={
  name:"Sagar",
  email:"sagar389@gmail.com",
  password:"456",
  // roles:Roles[0]  
  roles:Roles1.admin  // enum used
 }

 const User2:loginDetails={
  // name:"Gautam",
  email:"gautam389@gmail.com",
  password:"678",
  // roles:Roles[1]
  roles:Roles1.user  //enum used
 }

 const isAdmin=(user:loginDetails):string=>{
  const{email,roles}=user;
    return roles === "Admin"? `${email} allowed to Edit Website` : `${email} not allowed to Edit Website`;
 }

 console.log(isAdmin(User1));
 console.log(isAdmin(User2));