/**
 * 
 * 1. Api : url: https://jsonplaceholder.typicode.com/users
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data));

// const loadData = async() => {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }

export default function users(){
    return(
        <div className="card">
            <h3>Users: </h3>
        </div>
    )
}