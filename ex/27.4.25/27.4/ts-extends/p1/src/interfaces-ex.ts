interface User {
    username:string,
    email:string
    login():boolean
}

const user: User = {
    username: "coolcat99",
    email: "coolcat@example.com",
    login() {
      return true; // Just a dummy implementation
    },
  };
  console.log(user)