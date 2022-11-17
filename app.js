
//let a;

//for(a=0;a<11;a++){

 //   let b = 5*a;

  //  console.log('5 x',a,'=',b);

//}


const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');



console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));


