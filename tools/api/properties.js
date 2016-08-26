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
        // console.log('obj:',obj.hasOwnProperty(name));
          if(obj.hasOwnProperty(name)){
            let eachObj = {
              id: index,
              name: stat,
              key: name,
              value: obj[name],
            }
            // console.log(eachObj);
            allObj.push(eachObj);
          }
        if(index == stats.length-1){
          // console.log('allObj:',allObj);
          return res.status(err ? 400: 200).send(err || allObj);

        }
      });
    })
  })
})

export default router
