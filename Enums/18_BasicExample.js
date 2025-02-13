"use strict";
// enum Roles{
//   Admin,
//   user
// }
var Roles1;
(function (Roles1) {
    Roles1["admin"] = "Admin";
    Roles1["user"] = "User";
})(Roles1 || (Roles1 = {}));
const User1 = {
    name: "Sagar",
    email: "sagar389@gmail.com",
    password: "456",
    // roles:Roles[0]  
    roles: Roles1.admin // enum used
};
const User2 = {
    // name:"Gautam",
    email: "gautam389@gmail.com",
    password: "678",
    // roles:Roles[1]
    roles: Roles1.user //enum used
};
const isAdmin = (user) => {
    const { email, roles } = user;
    return roles === "Admin" ? `${email} allowed to Edit Website` : `${email} not allowed to Edit Website`;
};
console.log(isAdmin(User1));
console.log(isAdmin(User2));
