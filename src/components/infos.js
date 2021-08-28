 class Infos {
     constructor(){
     this.infos = []
     this.adapter = new InfosAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {
        this.adapter.getInfo().then(infos => {
            return console.log(infos)
        })
        .then(() => {
            this.render()

        })
    }

    render() {
        const infoContainer = document.getElementById('info-container')
        infoContainer.innerHTML = 'my info here'
    }
 }