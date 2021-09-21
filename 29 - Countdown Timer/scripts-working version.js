let countdown;
const timeDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const button = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    setEndTime(then)

    countdown = setInterval(() => {
        const secondsleft = Math.round((then - Date.now()) / 1000)
        if (secondsleft < 0) {
            clearInterval(countdown)
            return
        }
        displayTimeLeft(secondsleft)

    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const time = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    timeDisplay.textContent = time
    document.title = time

}

function setEndTime(time) {
    const end = new Date(time)
    const hour = end.getHours()
    const min = end.getMinutes()
    console.log(end)
    endTime.textContent = `be back at ${hour}:${min < 10 ? '0' : ''}${min}`
}

function setTime(timestamp) {

    const time = parseInt(this.dataset.time)
    console.log(time)
    timer(time)
}

button.forEach(e => e.addEventListener('click', setTime))
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault()
    timer(this.minutes.value * 60)
})