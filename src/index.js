// const app = new App()
const port = 'http://localhost:3000'
const infosAdapter =  new InfosAdapter(port)
const toolsAdapter =  new ToolsAdapter(port)

const nameInput = document.getElementById('info-name')
const tempoInput = document.getElementById('tempo-name')
const keyInput = document.getElementById('key-name')


const firstInfosIndexLoad = document.getElementById('infos-container')
const form = document.getElementById('info-form')

const select = document.getElementById('tool-select')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    infosAdapter.createInfo()
    form.reset()
}

infosAdapter.getInfos()
toolsAdapter.getTools()



