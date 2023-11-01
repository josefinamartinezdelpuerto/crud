let url = "https://6542377ff0b8287df1ffb90f.mockapi.io/users"

document.addEventListener("DOMContentLoaded", ()=>{
    let results = document.getElementById("results");
    let inputGetId = document.getElementById("inputGet1Id");
    let btnGetId = document.getElementById("btnGet1");
    let inputPostNombre = document.getElementById("inputPostNombre");
    let inputPostApellido = document.getElementById("inputPostApellido");
    let btnPost = document.getElementById("btnPost");
    
    let inputDelete = document.getElementById("inputDelete");
    let btnDelete = document.getElementById("btnDelete");




 

    btnGetId.addEventListener("click", ()=>{
        fetch(`${url}/${inputGetId.value}`)
        .then(response => response.json())
        .then((data) =>{
            console.log(data)
            if(inputGetId.value != ''){
            results.innerText = `
            ID = ${data.id},
            NAME = ${data.name},
            LASTNAME = ${data.lastname}
            `
            }else{
                results.innerText = ""

                data.forEach(user=>{
                    results.innerText += `
                    ID = ${user.id},
                    NAME = ${user.name},
                    LASTNAME = ${user.lastname}
                    `
                })
            }
        })

    })


    btnPost.addEventListener("click", async ()=>{
        let dataToSend = {
            name: inputPostNombre.value,
            lastname: inputPostApellido.value,
        }

        console.log(dataToSend)
        await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
        .then(response => response.json())
        .then(data =>{
            results.innerText= ""
            console.log(data)
            data.forEach(user=>{
                results.innerText += `
                ID = ${user.id},
                NAME = ${user.name},
                LASTNAME = ${user.lastname}
                `
            
            })
        })

    btnDelete.addEventListener("click", ()=>{
        const idToDelete = inputDelete.value;
        fetch(`${url}/${idToDelete}`, {
                method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                console.log("Elemento eliminado correctamente");
            } else {
                console.log("No se pudo eliminar el elemento.");
            }
             })
           
            .catch(error => {
                console.log("Hubo un error en la solicitud: ", error);
            })
    })

    



