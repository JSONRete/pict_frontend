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
      
      this.element.addEventListener('submit', this.handleDivClick)

      Infos.all.push(this)
  }
  
  render(){
    this.element.classList.add('card-info')
    this.element.classList.add('col', 's3', 'info-card');
    this.element.innerHTML = `
    <div data-id="${this.id}">
    TITLE: <span class="name">${this.name}</span><br>
    BPM: <span class="tempo">${this.tempo}</span><br>
    KEY: <span class="key">${this.key}</span>
    </div>
    <button class="edit" data-id="${this.id}">Edit</button>
    <button class="delete" data-id="${this.id}">Delete</button>
    `
    return this.element
  }
  
  putOnDom(){
      this.render()
      infoCardsDiv.appendChild(this.element)

  }

} 