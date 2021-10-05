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
                e.appendToDom()
                const allCaps = e.name.toUpperCase()
                e.name = allCaps
            })
        })
    }

    createInfo() {

        const infoValues = {
            name: nameInput.value,
            tempo: tempoInput.value,
            key: keyInput.value,
            tool_id: select.value
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
                d.appendToDom()
        })
    }
 
    deleteDiv = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }

        fetch(`${this.baseUrl}/${id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message))
    }

    patchInfo = (info) => {
        let {name, tempo, key} = info
        const infoValues = {
            name,
            tempo,
            key
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(infoValues)
        }
        
        fetch(`${this.baseUrl}/${info.id}`, configObj)
            .then(res => res.json())
            .then(json => { 
                info.render()
            })
    }
}