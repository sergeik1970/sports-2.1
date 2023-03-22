//техподдержка модальное окно

// подарок модальное окно

const modal3 = document.getElementById("myModal3");
const openBtn3 = document.getElementById("myBtn3");
const closeBtn3 = document.getElementById("close3");

//открыть модальное окно

openBtn3.onclick = function () {
    modal3.style.display = "block";
}
//закрыть по кнопке
closeBtn3.onclick = function () {
    modal3.style.display = "none";
}

//закрыть по нажатию на свободное поле
modal3.onclick = function (event) {
    // console.log(event)

    if (event.target === modal3) {
        modal3.style.display = "none"
    }
}


// const travelItem = document.getElementById("travel-items")