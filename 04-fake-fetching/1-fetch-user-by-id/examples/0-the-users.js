import { users } from '../../../lib/fetch-user-by-id/users.js';

/* the Users

  for the rest of /isolate you will be working with this array of users
  take some time now to look through the array of objects
  everything will be easier if you're familiar with the data

  these users are from https://jsonplaceholder.typicode.com/users

*/
/*
console.log(users);

console.log(`======== my study ========

`);


const getUser = async(id) =>{
  try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user =  res.json()
      return user;
  }catch(err){console.error(err);}

} 

// getUser(2).then((val) => console.log(val))
const logUser = async ()=>{
  const user = await getUser(2)
  console.log(user);
}

logUser()
*/


// const getUser = async() =>{
//   try{
//       const res1 = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
//       const user1 = await res1.json()
//       console.log(user1);

//       const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/2`)
//       const user2 = await res2.json()
//       console.log(user2);
//   }catch(err){console.error(err);}
// } 

// getUser()




const getUser = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user = await res.json()
      return user;

    } catch (err) {
      console.error(err);
    }

}

const logUser = async () => {
  
  const user = await Promise.all([getUser(1), getUser(2), getUser(3), getUser(4)])
  console.log(user);
}

logUser()