class Tools {
    static all = []
    static toolsContainer = document.getElementById('tools-container')

    constructor({id, name}) {
        this.id = id
        this.name = name
        this.active = false

        this.element = document.createElement('button')

        Tools.all.push(this)
    }

    render() {
        this.element.innerText = this.name
        this.element.id = `tools-${this.id}`
        return this.element
    }

    attToDom() {
        Tools.toolsContainer.append(this.render())
        this.addListeners()
    } 

    addListeners() {
        this.element.addEventListener('click', this.setActiveTool)
    }
}


  