import './App.css'
export default function Singer({Singer}){
    console.log(Singer)
    return (
        <div className='singer'>
            <h3>Name: {Singer.name}</h3>
            <p>ageeee: {Singer.age}</p>
        </div>
    )
}