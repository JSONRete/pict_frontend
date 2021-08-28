 class Infos {
     constructor(){
     this.infos = []
     this.adapter = new InfosAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {

        this.adapter.getInfos().then(infos => {
        //    infos.forEach(info => this.infos.push(info))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const infoContainer = document.getElementById("infos-container")
        infoContainer.innerHTML = 'this is a test'
        console.log('this is the info.info', this.infos)

    }

 }  