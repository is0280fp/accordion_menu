const labels = document.querySelectorAll(".Menu-Item-Label")
labels.forEach((label)=> {
    label.addEventListener("click", (e) => {
        const label = e.currentTarget
        const itemInner = label.nextElementSibling
        if (label.dataset.isOpen === "false") {
            const lastContent = itemInner.children.item(itemInner.children.length-1)
            const firstContent = itemInner.children[0]
            const targetHeight = lastContent.getBoundingClientRect().bottom - firstContent.getBoundingClientRect().top
            console.log(targetHeight)
            itemInner.style.height = `${targetHeight}px`
            label.dataset.isOpen = true
        }

        if (label.dataset.isOpen === "true") {
            // itemInner.style.height = "auto"
            // itemInner.style.height = 0
            label.dataset.isOpen = false
        }
       
    })
})