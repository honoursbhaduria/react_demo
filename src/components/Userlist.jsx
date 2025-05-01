import React from 'react'

const Userlist = () => {
    const users = [
        {
            id : 1 ,
            name : "honours ",
            rollno : 20231232341345,
            branch : "ECE",
            section : "B"
        },
        {
            id : 2 ,
            name : "rishu ",
            rollno : 20231345234251345,
            branch : "AI",
            section : "A"
        },
        {
            id : 3 ,
            name : "ansh ",
            rollno : 202312324541345,
            branch : "AIML",
            section : "D"
        },
        {
            id : 4 ,
            name : "vishal ",
            rollno : 20231232523345,
            branch : "CSE",
            section : "E"
        },
    ]
  return <main>
    {users.map( u =>(


        <div key = {u.id}>
            <h3>Name : {u.name } </h3>
            <h3>Branch : {u.branch}</h3>
            <h3>Section : {u.section } </h3>
        </div>

    ))}


  </main>
}

export default Userlist