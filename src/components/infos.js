 class Infos {
     constructor(){
     this.infos = []
     this.adapter = new InfosAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {
        this.adapter.getInfo().then(infos => {
            console.log(infos)
        })
     
    }

//     render() {
//         const infoContainer = document.getElementById('info-container')
//         infoContainer.innerHTML = 'my notes here'
//     }
 }