// const app = new App()


const port = 'http://localhost:3000'
const infosApapter =  new InfosAdapter(port)


const infosList = document.getElementById('infos-container')
const form = document.getElementById('info-form')




infosApapter.getInfos()


