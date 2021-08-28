class InfosAdapter {
    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/infos"
    }



    // getInfo() {
    //     fetch(this.baseUrl)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    getInfo() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

}
