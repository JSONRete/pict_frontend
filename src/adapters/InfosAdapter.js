class InfosAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/infos'
    }



    getInfos() {
        return fetch(this.baseUrl).then(response => response.json())
    
    }

    // getInfos() {
    //     return fetch(this.baseUrl)
    //     .then(res => res.json())
    //     .then(json => {
    //         json["data"].forEach(element => {
    //             const e = new Info({id: element.id, ...element.attributes})
    //             e.fetchInfo()
    //         })
    //     })
    // }

}
