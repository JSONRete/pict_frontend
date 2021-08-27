 class Infos {
     constructor(){
     this.infos = []
     this.adapter = new InfoAdapter()
     this.fetchInfo()
    }
    
    fetchInfo() {
        this.adapter.getInfo()
    }
 }