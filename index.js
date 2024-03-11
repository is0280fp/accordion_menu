const labels = document.querySelectorAll(".Menu-Item-Label")
labels.forEach((label)=> {
    label.addEventListener("click", (e) => {
        const label = e.currentTarget
        const itemInner = label.nextElementSibling
        const isOpen = label.dataset.isOpen === "true"

        if (!isOpen) {
            const lastContent = itemInner.children.item(itemInner.children.length-1)
            const firstContent = itemInner.children[0]
            const targetHeight = lastContent.getBoundingClientRect().bottom - firstContent.getBoundingClientRect().top
            itemInner.style.height = `${targetHeight}px`
            label.dataset.isOpen = true
        } else {
            itemInner.style.height = 0;
            label.dataset.isOpen = false;
        }
    })
})