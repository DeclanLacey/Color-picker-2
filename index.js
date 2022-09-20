
// let typePick = document.getElementById("type-pick").value
// let colorPick = document.getElementById("color-pick").value.substring(1)
let colorContainer = document.getElementById("color-container")
let colorCodeContainer = document.getElementById("color-code-container")
let color = []
colorContainer.innerHTML = `
                <div class="color-one"></div>
                
                <div class="color-two"></div>
                
                <div class="color-three"></div>
                
                <div class="color-four"></div>
                
                <div class="color-five"></div>
`
colorCodeContainer.innerHTML = `
                <p class="color-code-one"> #F55A5A</p>
                <p class="color-code-two"> #2B283A</p>
                <p class="color-code-three"> #FBF3AB</p>
                <p class="color-code-four"> #AAD1B6</p>
                <p class="color-code-five"> #A626D3</p>
`




document.getElementById("btn").addEventListener("click", function() {
 
    colorPick = document.getElementById("color-pick").value.substring(1)
    typePick = document.getElementById("type-pick").value
    
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPick}&mode=${typePick}`)
    .then(response => response.json())
    .then(colors => {
     
   
    colors.colors.forEach(items => {
        color.push(items.hex.value)
            console.log(color)
            
    
        })
         colorContainer.innerHTML = `
                <div class="new-color" style="background-color:${color[0]};"> </div>
                
                <div class="new-color" style="background-color:${color[1]};"> </div>
                
                 <div class="new-color" style="background-color:${color[2]};"> </div>
                
                 <div class="new-color" style="background-color:${color[3]};"> </div>
                
                 <div class="new-color" style="background-color:${color[4]};"> </div>
    
            
            `
            
            colorCodeContainer.innerHTML = `
                <p class="color-code-one"> <span> ${color[0]} </span> </p>
                <p class="color-code-two"> <span> ${color[1]} </span> </p>
                <p class="color-code-three"> <span> ${color[2]} </span> </p>
                <p class="color-code-four"> <span> ${color[3]} </span> </p>
                <p class="color-code-five"> <span> ${color[4]} </span></p>
            `
        
    })

    
    color = []
    
})

