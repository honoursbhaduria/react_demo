import React from 'react'

const List = () => {
    const users  = [
        {
            name : "laptop1" ,
            price : "49000",
            company :  "HP",
            availability : "In stock ",
            
    
        },
        {
            name : "laptop2" ,
            price : "47000",
            company :  "acer",
            availability : "In stock ",
            
    
        },
        {
            name : "laptop3" ,
            price : "45000",
            company :  "DELL",
            availability : "In stock ",
            
    
        }


    ]
  return <main>

  {users.map(({ name, company, price }, index) => (

    <ul key={index}>

      <li>{name}</li>

      <li>{price}</li>
      
      <li>{company}</li>
    </ul>


  ))}
</main>



//  this way it can also be done 

// -----------------------------------
//   <main>

//   {users.map(users => (
//       <ul key = {Math.random()}>

//           <li>{users.name}</li>
//           <li>{users.price}</li>
//           <li>{users.company}</li>

//       </ul>
//   ))}
// </main>
}

export default List




//  rendering list of data in react 
