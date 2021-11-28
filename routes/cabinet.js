const express = require('express');
const router = express.Router();
const axios = require('axios');
const urlDog = 'https://dog.ceo/api/breeds/list/all';
const selectDog = [`<option>Choose a breed >>>>>>></option>`];

const selectDogBreeds = (res, imgStr) => {
  axios
  .get(urlDog)
  .then((r) => {
    const nameDog = r.data.message;
    for (item in nameDog){
      if (nameDog[item].length) {
        nameDog[item].forEach(element => {
          selectDog.push(`<option value="${item}&q2=${element}"> ${element} ${item} </option>\n`);
        });
      } else {
        selectDog.push(`<option value="${item}"> ${item} </option>\n`);
      }
    }
    // console.log('TEST 2>>>>>>>',selectDog); 
    res.render('cabinet', {selectDog: selectDog, img: imgStr});
  })  
}

router.get('/', (req, res) => {

  console.log('TEST 1>>>>>>>',req.query);  
  if (req.query.q1) {
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        selectDogBreeds(res, str);
      })
  } else if (req.query.q2)  { 
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/${req.query.q2}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        selectDogBreeds(res, str);
      })    
  } else {
    selectDogBreeds(res);
    // .catch((err) => {console.log(err)}) 
  }
 
  
});

module.exports = router;