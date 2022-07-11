
export function createNamesStore() {
  return {
    names: "",
   
    addName(name) {
      this.names = name;
      console.log("name--------",this.names);
    },
  };
}

