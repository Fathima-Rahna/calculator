

const displayContent = (content) => {
    event.preventDefault();
    result.value += content;
}

const clearScreen = () => {
    console.log("clearScreen function called");
    result.value = "";
}

const finalOutput = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
        const expression = result.value;
        console.log("Expression to evaluate:", expression);
        result.value = eval(expression);
    } catch (error) {
        console.error("Error during evaluation:", error);
        result.value = "Error";
    }
}


    



// const finalOutput = () =>{
//     try{result.value=eval(result.value)}
//     catch{
//         result.value="Error"
//     }

// }
const removeItem= () =>{
    result.value = result.value.slice(0,-1)
}