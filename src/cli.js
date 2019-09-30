/* eslint-disable no-console */
// #!/usr/bin/env node
import { mdLinks } from './md-links.js';
import { stats, statsValidate } from './stats.js';

// const [,, ...args] = process.argv;
// console.log(`${args[0]}`);
const rout = process.argv[2];
const val = process.argv[3];
const valStat = process.argv[4];

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';


// const cli = (path, valid, valStatus) => {
//   if (path === undefined) {
//     console.log('ingrese ruta del archivo');
//   } else if (valid === '--validate') {
//     console.log(path);
//     mdLinks(path, { validate: true })
//       .then((res) => res.forEach((element) => {
//         console.log(`${element.href} ${element.text} ${element.file} ${element.status} ${element.statusText}`);
//       }));
//   } else if (valid === '--stat' && valStatus === '--validate') {
//     mdLinks(path, { validate: true })
//       .then((res) => {
//         console.log(statsValidate(res));
//       });
//   } else if (valid === '--stat') {
//     mdLinks(path, { validate: false })
//       .then((res) => {
//         console.log(stats(res));
//       });
//   } else {
//     mdLinks(path, { validate: false })
//       .then((res) => res.forEach((element) => {
//         console.log(`${element.file}// ${element.href}/ ${element.text}`);
//       }));
//   }
// };
// cli(rout, val, valStat);

const cli = (path, valid, valStatus) => {
  if (path !== undefined && valid === undefined && valStatus === undefined) {
    return mdLinks(path, { validate: false })
      .then((res) => res.map((element) => `${element.file}// ${element.href}/ ${element.text}`));
  } if (path !== undefined && valid === '--stat') {
    return mdLinks(path, { validate: false })
      .then((res) => {
        stats(res);
      });
  } if (path !== undefined && valid === '--validate') {
    return mdLinks(path, { validate: true })
      .then((res) => res.map((element) => `${element.href} ${element.text} ${element.file} ${element.status} ${element.statusText}`));
  } if (path !== undefined && valid === '--validate' && valStatus === '--stat') {
    return mdLinks(path, { validate: true })
      .then((res) => {
        statsValidate(res);
      });
  }
  return 'ingrese ruta';
};
cli(rout, val, valStat);
// cli(ruta, '--validate', '--stat').then((resul) => {
//   console.log(resul);
// });
