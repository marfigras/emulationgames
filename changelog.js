var data = [
    
        {
          "version": "1.0.0",
          "date": "Tuesday, October 18, 2022",
          "changes": [
            {"type": "New", "desc": "description"}
          ]
        }
    ]
    const changesdiv = (change) => {
      const main = document.createElement("div");
      const version = document.createElement("div");
      version.innerHTML = change.version
      const date = document.createElement("div");
      date.innerHTML = change.date  
      main.appendChild(version, date)          
        console.log(change.version, change.date)
        for (let i = 0; i < change.changes.length; i++) {
            let changes =  changestext(change.changes[i]);
            main.appendChild(allchanges)
        }
        return main
    }
    const changestext = (text) => {
        const allchanges = document.createElement("div");
      const type = document.createElement("div");
      type.innerHTML = text.type
      const desc = document.createElement("div");
      desc.innerHTML = text.desc
      allchanges.appendChild(type, desc)  
      return allchanges
    }
    for (let i = 0; i < data.length; i++) {
       let changes =  changesdiv(data[i]);
  }
 // $.each(data, function(i, field){
   // console.log(data.date[i]);
  //  console.log(data.version[i]);
   // $.each(data.changes[i], function (change) { 
   //      console.log(change.type[i])
  //       console.log(change.desc[i])
  //  });
  //  const main = document.createElement('div');
   // $('changelog').appendTo(main);