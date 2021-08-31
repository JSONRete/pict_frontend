class InfosAdapter {
    constructor(port) {
        this.baseUrl = `${port}/infos`
    }
        
    getInfos() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json["data"].forEach(element => {
                const e = new Infos({id: element.id, ...element.attributes})
                e.putOnDom()
            })
        })
    }
    
}
