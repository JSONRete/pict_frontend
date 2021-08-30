 class Infos {

    static infos = []
     constructor(){
    //  this.infos = []
     this.adapter = new InfosAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {
        this.adapter
        .getInfos()
        .then(infos => {
            infos.forEach(info => this.infos.push(new Info(info)))
        })
        .then(() => {
            this.render()
        })
    }
    
      render() {
        //   this.infosContainer.innerHTML = this.infos.map(action => action.renderLi()).join('')
        li.innerHTML = `div-data=`


      }

 }  


// render() {
//     const infosContainer = document.getElementById("infos-container")
//     infosContainer.innerHTML = 'this is a test'
// }