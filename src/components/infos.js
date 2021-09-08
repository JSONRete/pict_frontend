class Infos {

  static all = []
  static infosContainer = document.getElementById('infos-container')


  constructor({id, name, tempo, key, tool_id}) {

      this.id = id
      this.name = name
      this.tempo = tempo
      this.key = key
      this.toolId = tool_id

     
      this.adapter = new InfosAdapter()
  
      this.element = document.createElement('div')
      this.element.dataset["id"] = id
      this.element.id = `infos-${id}`
      
      this.element.addEventListener('click', this.handleDivClick)

      Infos.all.push(this)
  }
  
  render(){
    this.element.classList.add('card-info')
    this.element.classList.add('col', 's3', 'info-card');
    this.element.innerHTML = `
    <div data-id="${this.id}">
    TITLE: <span class="name">${this.name}<br></span>
    BPM: <span class="tempo">${this.tempo}<br></span>
    KEY: <span class="key">${this.key}</span>
    </div>
    <button class="edit" data-id="${this.id}">Edit</button>
    <button class="delete" data-id="${this.id}">Delete</button>
    `
    return this.element
  }

  deleteDiv = (e) => {
    this.element.remove()
    infosAdapter.deleteDiv(this.id)
  }


  handleDivClick = (e) =>{
    if (e.target.innerText === 'Edit'){
        this.createEditFields(e.target)
        e.target.innerText = 'Save' 
    } else if (e.target.innerText === 'Delete'){
        this.deleteDiv(e)
    } else if (e.target.innerText === 'Save'){
        this.saveUpdatedDiv(e.target)
        e.target.innerText = 'Edit'
    }
  }

  saveUpdatedDiv = () => {
    // const div = savedBtn.parentElement
    // const id = div.dataset.id
    this.name = this.element.querySelector('.edit-name').value
    this.tempo = this.element.querySelector('.edit-tempo').value
    this.key = this.element.querySelector('.edit-key').value

    infosAdapter.patchInfo(this)
  }


  createEditFields = (editBtn) =>{

        const divData = this.element
        const div = this.element.querySelector('div')

        const name = divData.querySelector('.name').innerText
        const tempo = divData.querySelector('.tempo').innerText
        const key = divData.querySelector('.key').innerText
        
      
        div.innerHTML = `
        <input type="text" name="name" class="edit-name" value="${name}">
        <input type="text" step="0.1" name="tempo" class="edit-tempo" value="${tempo}">
        <input type="text" name="key" class="edit-key" value="${key}">
        `
}

static filterByTool(filteredTool) {
  if(filteredTool) {
    const filteredInfos = Infos.all.filter((info) => {
      return info.toolId === parseInt(filteredTool.id)
    })
      Infos.infosContainer.innerHTML = ''
      for(const info of filteredInfos) {
        info.appendToDom()
    }
    } else {

      Infos.infosContainer.innerHTML = ''
      for(const info of Infos.all) {
        info.appendToDom()
      
    }
  }
}
  
  appendToDom(){
      this.render()
      infoCardsDiv.appendChild(this.element)
  }
}  