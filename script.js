const secondHand = document.querySelector('#sec')
const minuteHand = document.querySelector('#min')
const hourHand = document.querySelector('#hour')

getTime = () => {
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    
    secondHand.style.transform = `rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `rotate(${minutes * 6 + seconds / 10 }deg)`
    hourHand.style.transform = `rotate(${hours * 30 + minutes / 2 }deg)`
    console.log(date)
}

setInterval(getTime, 100)
