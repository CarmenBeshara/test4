const countries = ['jlan', 'deenen',  'Jenmark', 'nelly'];


  for (let i=0; i<countries.length; i++) {
    if ( countries[i].startsWith("J") ||countries[i].startsWith("j")) {
    
    console.log("Goodbye " + countries[i]);
    document.write("Goodbye " + countries[i] + "<br/> ");
    }
    else
    {
      console.log("hello " + countries[i]);
      document.write("hello " + countries[i] + "<br/> ");
    }
  }
  