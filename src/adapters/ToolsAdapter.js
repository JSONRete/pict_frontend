class ToolsAdapter {
    constructor(port) {
        this.baseUrl = `${port}/tools`
    }
        
    getTools() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json["data"].forEach(data => {
                const t = new Tools({id: data.id, ...data.attributes})
                t.attToDom()
            })
        })
    }
}