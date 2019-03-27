
let users = [];  
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    users = data;
    const todoRequests = data.map(user => {
      const todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
      return todosURL;
    //console.log(user)
      
    });
    return todoRequests;
  })
  //.then(todoRequests => Promise.all(todoRequests))
  .then(todos => {
    users.forEach((user, i) => {
      user.todos = todos[i];
    });
    console.log(users)
  });
  

  
/* // create an empty array to use to join requests later
let users = [];

getAjaxData('https://jsonplaceholder.typicode.com/users')
.then(function main(data){
  users = data;

  const todoRequests = users
  .map(user => {
    // console.log(user);

    let todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
    
    // return todo loading promises
    return getAjaxData(todosURL);  
  });

  // return as single promise so the same catch can handle either error
  return Promise.all(todoRequests); // wait for all promises to resolve
}).then(todoRequests => Promise.all(todoRequests))
.then(function(todos){
  // console.log(todos);

  users.forEach((user, i) => {
    user.todos = todos[i];
  });

  // once everything is finished
  console.log(users);
})
.catch(console.log);
 */