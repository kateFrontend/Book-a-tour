const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
    removeFocus();
    item.classList.add('active');
    })

    removeFocus = () => {
        items.forEach(item => {
        item.classList.remove('active');
        })
    }
})


function saleCountdown() {
    const saleDate = new Date ("May 26, 2022 00:00");
    const now = new Date();
    const diff = saleDate - now;

    const msInSecond = 1000; //сколько милисекунд в секунде - 1000
    const msInMinute = 60 * 1000; //сколько милисекунд в минуте - 60 000
    const msInHour = 60 * 60 * 1000; //сколько милисекунд в часе - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000; //сколько милисекунд в сутках - 86 400 000

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        tourSale();

    }

}

let timerID = setInterval(saleCountdown, 1000);

function tourSale() {
    const heading = document.querySelector("h2");
    heading.textContent = "Tours On Sale Available Now";
    heading.classList.add("red");
}


