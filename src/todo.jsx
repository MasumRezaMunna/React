// export default function ToDo ({task, isDone}){
    
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo ({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }

export default function ToDo ({task, isDone, time = 0}){
    if(isDone === true){
        return <li>Done: {task} Duration: {time}</li>
    }
   return <li>To be Done: {task}</li>
}