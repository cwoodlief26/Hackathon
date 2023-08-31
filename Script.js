document.addEventListener('DOMContentLoaded', () => {
    
    // const teststr = "for (let i = 0; i < snakeGame.length; i ++) { class Board {"

    // turn string into arr

    let snippets = ["function snakeGame () {", "let counter = 0", "let cache = {}",]
    const snippetLength = 15;
    // for (let i = 0; i < teststr.length - snippetLength; i += snippetLength) {
    //     snippets.push(teststr.slice(i, i + snippetLength))
    // }

    // declare counter for moving through snippet array
    let counter = 0;
    // listener waiting for keydown

    document.addEventListener('keydown', () => {
        // add snippets to DOM
        let pText = document.createElement("pre");
        pText.innerText = "                         hello"
        
        // let newNode = document.createTextNode(snippets[counter])
        // pText.appendChild(newNode)
        document.body.appendChild(pText);
        

        // increment counter
        counter++
        
    } )

});
