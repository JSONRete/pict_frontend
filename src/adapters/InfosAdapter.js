class InfosAdapter {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/infos"
    }



    // getInfo() {
    //     fetch(this.baseUrl)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    getInfos() {
        return fetch(this.baseUrl).then(res => res.json()
        // .then(json => {
        //     json["data"].forEach(element => {
        //         const e = new Infos({id: element.id, ...element.attributes})
            
        //     })
        // })
        )
    }

}

