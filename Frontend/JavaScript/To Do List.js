let task = [];
let req = prompt("Enter your request:");

while(true){
    if(req == "quit"){
        console.log("You are quitting the app!");
        break;
    }
    if(req == "add"){
        add = prompt("Enter what you want to add:");
        task.push(add);
        console.log("task added!");
    }
    else if(req == "list"){
        console.log("---------------------------------");
        for(let i = 0; i < task.length; i++){
            console.log(i , task[i]);
        }
        console.log("---------------------------------");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index of task you want to delete:");
        task.splice(idx , 1);
        console.log("task deleted!")
    }else{
        console.log("Enter the correct command!");
    }
 req = prompt("Enter your request:");

}