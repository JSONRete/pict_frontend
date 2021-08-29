 class Infos {
     constructor(){
     this.infos = []
     this.adapter = new InfosAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {
        this.adapter
        .getInfos()
        .then(infos => {
           infos.forEach(info => this.infos.push(new Info(info)))
           console.log(this.infos)
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const infosContainer = document.getElementById("infos-container")
        infosContainer.innerHTML = 'this is a test'
    }

 }  