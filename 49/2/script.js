function spacer(){
    let str = '\n'.repeat(10)

            
    console.log(str)
}
    
    
function U1(){
    let str = ' *'.repeat(5)
    
        
    console.log(str)
}
    
    function U2(){
    
    let str = ''
    
    for (let i = 10; i > 0; i -= 1) {
        str += "*".repeat(i)
        str = str + '\n' // Lägg till en radbrytning
    }
    
    console.log(str)    
    
}
    
    
function U3(){
    
    let str = ''
    for (let i = 0; i < 5; i++) {
        str += " *".repeat(5);
        str = str + '\n' // Lägg till en radbrytning
    }
    console.log(str)
}
    function U4(){
    
    let str = ''
    let space = " "
    for (let i = 0; i < 5; i++) {
        str += " *".repeat(5);
        str = str + '\n' // Lägg till en radbrytning
        str += space
        space += " "
    }
    console.log(str)
}
    
U1()
spacer()
U2()
spacer()
U3()
spacer()
U4()