const labels = document.querySelectorAll(".Menu-Item-Label")
labels.forEach((label)=> {
    label.addEventListener("click", (e) => {
        const targetContent = e.currentTarget.nextElementSibling;
        targetContent.classList.toggle("Menu-ItemIsOpen")
    })
})