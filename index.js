const labels = document.querySelectorAll(".Menu-Item-Label")
labels.forEach((label)=> {
    label.addEventListener("click", (e) => {
        const label = e.currentTarget
        const itemInner = label.nextElementSibling
        if (label.dataset.isOpen === "false") {
            // const targetContent = e.currentTarget.nextElementSibling;
            // targetContent.classList.toggle("Menu-ItemIsOpen")
            const content = itemInner.children.item(itemInner.children.length-1)
            console.log(content)
            const targetHeight = content.getBoundingClientRect().top
            console.log(targetHeight)
            itemInner.style.height = `${targetHeight}px`
        }

        if (label.dataset.isOpen === "true") {
            itemInner.style.height = "auto"
            label.dataset.isOpen = true
        }
       
    })
})