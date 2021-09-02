// const app = new App()


const port = 'http://localhost:3000'
const infosApapter =  new InfosAdapter(port)


const infosCardsList = document.getElementById('infos-container')
const form = document.getElementById('info-form')

function handleDivClick(event) {
    event.preventDefault()
}


infosApapter.getInfos()


