// alert("Hello world!")

/*var name = "Lu"
var lastname = "Khamlaeng"
console.log(name)
console.log(lastname)
var age = " age = " + 23
console.log(age)


{
    var x = 2
    let y = 2
    console.log(typeof y)
    
}


var x = 20
{
    var x = 200
    let y = 2
}
console.log(x)*/


//let sname = prompt("กรอกชื่อมาหน่อยสิ!!")
//console.log( "Hello " + sname)


//let num = prompt("Enter your number!")
//console.log(num)
//console.log(Math.floor(Math.random() * 100)) 
//document.getElementById("number").innerHTML = (num)
//document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)

/*console.log( 3 == 3)
console.log( 1 == 2)
console.log( 4 == "4")
console.log( 4 == 5)

console.log( "4" === "4")
console.log( "Hello" === "Hello")
 
console.log( 4 != 1)
console.log( "hello" == "Hello")

console.log( "He" != "he")
console.log( "4" != 4)
console.log( "4" !== 4)

console.log(10 > 2)
console.log( 10 >= 4)*/

/*let age = prompt("กรุณากรอกอายุคุณ !")
if( age > 13){
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jVMpdSv8IDM\"\
    frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}*/


let yournumber = prompt("กรุณากรอกเลขที่เลือกซื้อเข้ามาได้เลย!")
let random = Math.floor(Math.random() * 10)
document.getElementById("yournumber").innerHTML = (yournumber)
document.getElementById("randoms").innerHTML = (random)

if(yournumber == random){
    document.getElementById("result").innerHTML = "ยินดีด้วย ! คุณถูกรางวัล 2 ตัวท้าย"
}else{
    document.getElementById("result").innerHTML = "เสียใจด้วย ! คุณไม่ถูกรางวัล 2 ตัวท้าย" 
}



