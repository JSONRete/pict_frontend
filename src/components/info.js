// class Info {
//     constructor(infoJSON) {
//         this.id = infoJSON.id
//         this.name = infoJSON.name
//         this.tempo = infoJSON.tempo
//         this.key = infoJSON.key
//         this.toolId = infoJSON.tool_id
//     }
// }

class Info {
    constructor({id, name, tempo, key, tool_id}) {
        this.id = id
        this.name = name
        this.tempo = tempo
        this.key = key
    
    }
}