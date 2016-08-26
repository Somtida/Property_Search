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
  console.log('running');
  const folderName = req.body.folderName;
  console.log('folderName:',folderName);
  const key = req.body.key;
  const value = req.body.value;
  const newObject = {
    [key]: value,
  }
  console.log('newObject:',newObject);

  fs.readFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), 'utf8', function (err, data) {
    if (err) return console.log('err:',err);
  //   // console.log(data);
    let obj = JSON.parse(data);
    console.log('before obj:',obj);
    console.log('before obj:',obj.main[folderName].delimiters);
    console.log(!obj.main[folderName].delimiters.hasOwnProperty(key));
    if(!obj.main[folderName].delimiters.hasOwnProperty(key)) {
      console.log('if');
      obj.main[folderName].delimiters = Object.assign(newObject, obj.main[folderName].delimiters);
    }else{
      console.log('else');
      obj.main[folderName].delimiters[key] = value;
      console.log('after obj:',obj.main[folderName].delimiters);
    }

    console.log('after obj:',obj.main[folderName].delimiters);
    obj = JSON.stringify(obj);
    console.log('after obj:',obj);
    fs.writeFile(path.join(__dirname, `data/main/${folderName}/delimiters.json`), obj , 'utf8', function (err) {
      if(err) return console.log('err in writeFile');
      console.log('writeFile success');
      return res.status(200).send()
    });
  });


})

export default router
