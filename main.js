let a = document.getElementById("download")
let add = document.getElementById("tp")

let b = Number(a.innerText)

let wait = document.createElement("h2")
wait.innerText = "Please Wait..."
add.appendChild(wait)



setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 2000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 3000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 4000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 5000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 6000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 7000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 8000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 9000)

setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 10000)


setTimeout(() => {

  b--
  a.innerText = "0" + b
}, 11000)



setTimeout(() => {

  if (b == 0) {
    a.remove()
    let btn = document.createElement("a")
    btn.innerText = "Download File"
    btn.href = "https://www.google.com"
    add.className = "container"
    wait.remove()
    add.appendChild(btn)



  }
  else {
    console.log("sorry 🙏 ")
  }


}, 12000)