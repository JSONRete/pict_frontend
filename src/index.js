// const app = new App()


const port = 'http://localhost:3000'
const infosAdapter =  new InfosAdapter(port)
const toolsAdapter =  new ToolsAdapter(port)


const nameInput = document.getElementById('info-name')
const tempoInput = document.getElementById('tempo-name')
const keyInput = document.getElementById('key-name')


const infoCardsDiv = document.getElementById('infos-container')
const form = document.getElementById('info-form')



form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    infosAdapter.createInfo()
    form.reset()
}

infosAdapter.getInfos()
toolsAdapter.getTools()



