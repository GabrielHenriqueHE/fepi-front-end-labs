const links = document.querySelectorAll("a")

links.forEach(a => {
    const link = a.attributes.getNamedItem("href").nodeValue

    if (String(link).startsWith("http")) {
        a.addEventListener("click", (e) => {
            positiveConfirmation = confirm("Você será redirecionado para uma página externa. Deseja continuar?")

            if (!positiveConfirmation) {
                e.preventDefault()
            }
        })
    }
})