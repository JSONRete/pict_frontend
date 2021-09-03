class InfosAdapter {
    constructor(port) {
        this.baseUrl = `${port}/infos`
    }
        
    getInfos() {
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json["data"].forEach(data => {
                const e = new Infos({id: data.id, ...data.attributes})
                e.putOnDom()
            })
        })
    }

    createInfo() {

        const infoValues = {
            name: nameInput.value,
            tempo: tempoInput.value,
            key: keyName.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(infoValues)
        }
        
        fetch(this.baseUrl, configObj)
            .then(res => res.json())
            .then(json => {
                const d = new Infos({id: json.data.id, ...json.data.attributes})
                d.putOnDom()
        })
    }
}
