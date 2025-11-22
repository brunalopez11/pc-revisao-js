        let botao = document.getElementById("btn")
        botao.onclick = () => {
            let num = prompt("Digite um número!")
            alert(num + "bazinga!")
        }


        let btn = document.getElementById("btn")

        btn.addEventListener("click", () => {
            alert("Botão foi clonado!")
        })

        document.documentElementById("form").addEventListener("submit", (event) => { event.preventDefault()
            console.log("Test")
        })
