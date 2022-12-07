// part1 = document.querySelector('#part1')

// part1.addEventListener('click', function(){
//     console.log("hi my name is addie")
// })

// will be on exam 

window.addEventListener("load", function() {
    console.log("hi my name is addie")
});

 
// Part One - use the checkbox to show/hide Part Two.  In the real exam there will be a deduction if you don't take advantage of our css.


part1Checkbox = document.querySelector('#part1Checkbox')

part1Checkbox.addEventListener('click', function(){
    console.log("here")
    document.querySelector("#part2").classList.toggle=("closed")
    document.querySelector("#part2").style.display="block"
})

// Part Two - When  the checkbox is checked, copy the value typed into the first section into the second section.  The text should be displayed in all uppercase letters. When the checkbox is unchecked the second section should be cleared and any new content should not automatically convert to uppercase.

// part2Checkbox = document.querySelector('#part2')

document.querySelector('#repeat').addEventListener('click', function(){
    console.log("Now on part 2 ")
    message1 = document.querySelector("#message1")
    message2 = document.querySelector("#message2")

    if (this.checked){
        console.log("checked")
        message2.value = document.querySelector("#message1").value;
        message2.style.textTransform = 'uppercase'
    }
    else {
        console.log("unchecked")
        message2.value = ''
        message2.style.textTransform = "none"}
})


// Part Three - When the mouse is over the broken image, display the same image  as the first  image.  (I may change the first image so do not hardcode it.)
// Something to think about, can you have it display the 2nd image instead?


document.querySelector("img:nth-child(5)").addEventListener("mouseover", function(){
    console.log(this.src)
    console.log(document.querySelector("img:nth-child(1)").src)
    this.src = document.querySelector("img:nth-child(1)").src
})

document.querySelector("img:nth-child(5)").addEventListener("mouseleave", function(){
    console.log(this.src)
    console.log(document.querySelector("img:nth-child(2)").src)
    this.src = document.querySelector("img:nth-child(2)").src
})


// Part Four - Do the same process as Part three, but using the keyboard. 
// If you are having trouble, you can try starting by changing your html file.

images = document.querySelectorAll('img')

for (let i=0; i < images.length; i+1) {
    images[i].tabIndex = 0;
}

// document.querySelector("part1").addEventListener("keydown", function(){
//     console.log('trying to tab')
// })

document.querySelector("img:nth-child(5)").addEventListener("keyup", function(){
    console.log('Part Four')
    this.src = document.querySelector("img").src
    this.addEventListener('keydown', function(){
        this.src = 'none'
    })
})