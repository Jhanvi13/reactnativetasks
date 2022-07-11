var count = 0;
export function createNotesStore() {
    return {
        notes: [],
        addNote(nametext, langtext,id) {
           if(id){
               console.log("bab");
            const selected = this.notes.find((note) => note.id == id)
            if(selected) {
              selected.nametext = nametext
              selected.langtext = langtext
            }

           }else{ 
            console.log("Paras", nametext, langtext, this.notes)
               this.notes.push({ nametext, langtext, id: count++})
            }
           
           
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },

        updateNote(id, newnametext, newlangtext) {
            const selected = this.notes.find(note => note.id == id)

            while (selected) {
                this.addNote(newnametext,newlangtext,id =selected)
            }

            console.log('No',id,newlangtext,newnametext,this.notes);
        },


    }
}
