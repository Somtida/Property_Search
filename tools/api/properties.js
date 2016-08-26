import { Router } from 'express'
import fs from 'fs'
import path from 'path'
const router = Router();

router.get('/:name', (req, res) => {
  const name = req.params.name;

  const allObj = [];

  fs.readdir(path.join(__dirname, 'data/main'), (err, stats) => {
    // console.log('stats',stats);

    stats.forEach((stat,index) => {

      fs.readFile(path.join(__dirname, `data/main/${stat}/delimiters.json`), 'utf8', function (err, data) {
        if (err) return res.status(400).send(err);
        const obj = JSON.parse(data).main[stat].delimiters;

          if(obj.hasOwnProperty(name)){
            let eachObj = {
              id: index,
              name: stat,
              key: name,
              value: obj[name],
            }

            allObj.push(eachObj);
          }
        if(index == stats.length-1){

          return res.status(err ? 400: 200).send(err || allObj);

        }
      });
    })
  })
})

router.get('/:folderName/:key', (req, res) => {
  const folderName = req.params.folderName;
  const key = req.params.key;
  fs.readFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), 'utf8', function (err, data) {
    if (err) return console.log('err:',err);
    let obj = JSON.parse(data);

    delete obj.main[folderName].delimiters[key];

    obj = JSON.stringify(obj);

    fs.writeFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), obj , 'utf8', function (err) {
      if(err) return console.log('err in writeFile');

      return res.status(200).send(folderName)
    });
  });


})

router.post('/', (req, res) => {
  const folderName = req.body.folderName;
  const key = req.body.key;
  const value = req.body.value;
  const newObject = {
    [key]: value,
  }

  fs.readFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), 'utf8', function (err, data) {
    if (err) return res.status(400).send(err);
  //   // console.log(data);
    let obj = JSON.parse(data);

    if(!obj.main[folderName].delimiters.hasOwnProperty(key)) {
      obj.main[folderName].delimiters = Object.assign(newObject, obj.main[folderName].delimiters);
    }else{
      obj.main[folderName].delimiters[key] = value;
    }

    obj = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), obj , 'utf8', function (err) {
      if(err) return res.status(400).send(err);
      return res.status(200).send()
    });
  });


})

export default router
