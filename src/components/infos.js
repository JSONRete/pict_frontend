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
        e.target.innerText = 'Save' 
        this.createEditFields(e.target)
    } else if (e.target.innerText === 'Delete'){
        this.deleteDiv(e)
    } else if (e.target.innerText === 'Save'){
      e.target.innerText = 'Edit'
        this.saveUpdatedDiv(e.target)
    }
  }

  saveUpdatedDiv = (savedBtn) => {
    const div = savedBtn.parentElement
    const id = div.dataset.id
    const nameInput = div.querySelector('.edit-name')
    const tempoInput = div.querySelector('.edit-tempo')
    const keyInput = div.querySelector('.edit-key')
  }

  createEditFields = (editBtn) =>{
    const div = editBtn.parentElement
    const queryDiv = editBtn.parentElement.querySelector('div')
    
    for (const e of queryDiv.children){
      let inputValue = e.innerText
      let name = e.classList[0]
      e.outerHTML = `<input type="text" id="edit-${name}" value="${inputValue}">`
    }
  }
  
  putOnDom(){
      this.render()
      infoCardsDiv.appendChild(this.element)
  }
} 