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
  
      this.li = document.createElement('li')
      this.li.dataset["id"] = id
      this.li.id = `infos-${id}`
      

      Infos.all.push(this)
  }

    render(){
      this.li.innerHTML = `
        <div data-id="${this.id}">
        SONG TITLE: <strong class="name">${this.name}</strong><br>
        BPM: <span class="tempo">${this.tempo}</span><br>
        KEY: <span class="key">${this.key}</span>
        </div>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
      `
      return this.li
  }

  putOnDom(){
      this.render()
      infosList.appendChild(this.li)

  }

}  

