class InfosAdapter {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/infos"
    }



    // getInfos() {
    //     fetch(this.baseUrl)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    getInfos() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json["data"].forEach(element => {
                // const e = new Info({id: element.id, ...element.attributes})
                // e.render()
            })
        })
    }

}


