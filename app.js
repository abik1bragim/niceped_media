const Sidebar = document.querySelector(".sidebar")
const Container = document.querySelector(".container")
const BarsIcon = document.querySelector(".fa-bars")

const OpenFunc = () => {
    Sidebar.classList.add("open")
    BarsIcon.style.display = "none"
    Container.style.display = "block"
}

const CloseFunc = () => {
    Sidebar.classList.remove("open")
    BarsIcon.style.display = "block"
    Container.classList.remove("open")
    Container.style.display = "none"
}