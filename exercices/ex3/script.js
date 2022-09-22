let users = [ 'Peter' , 'Marks' , 'John' , 'James' , 'Mary' , 'James' , 'Mary' , 'James' , 'Mary' ] ;

function addUsers (usernames) {
    let template = usernames.map(user =>  `<li>${user}</li>` ).join ('\n') ; 
    document.querySelector ('ul') . innerHTML= template; } ;

addUsers (users) ;

let btnGet = document.querySelector ('button') ;
btnGet.addEventListener ('click', () => {
    let usernames= users.filter ((user,index) => users.indexOf (user) != index );
    let set = new Set(usernames);
    usernames = Array.from(set);
    addUsers(usernames);
});