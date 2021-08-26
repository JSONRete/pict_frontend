// const app = new App()
// fetch("http://127.0.0.1:3000/infos")
// .then(res => res.json())
// .then(data => console.log(data))

const list =  document.getElementById("info-container")

fetch("http://127.0.0.1:3000/infos")
.then(res => res.json())
.then(renderInfos)

function renderInfos(tet){
    const infos = tet.data
    const liElements = infos.map(function(info) {
        const li = document.createElement('li')
        li.innerText = `Song: ${info.attributes.name} - BPM: ${info.attributes.tempo} - KEY: ${info.attributes.key}`
        return li
    })

    liElements.forEach(element => {
        list.appendChild(element)
    });
}  