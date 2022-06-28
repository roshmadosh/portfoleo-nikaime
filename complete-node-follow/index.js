const superagent = require('superagent');
const fs = require('fs');
const { resolve } = require('path');

const readFilePro = (file) => {
  // Promise constructor takes in an executor function that executes when the promise is created. Returns a promise
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject({ message: 'I could not find that file' }); // This is the error that will be available in the catch method.
      resolve(data); // resolve establishes what the promise returns
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject({ message: 'Could not write file' });
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dogs.txt`);
    console.log(data);

    const dog1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const dog2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const dog3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const dogString = (await Promise.all([dog1, dog2, dog3])).join('\n');

    await writeFilePro('dog-images.txt', dogString);
    console.log('dog images added to file');
  } catch (err) {
    console.log(`holy sht something went wrong 💥`);
    throw err;
  }
  return `end of getDogPic 🐼`;
};

// --- An async function always returns a promise, so you can chain it with a then() function.

(async () =>{
  try{
    await getDogPic();
    console.log(`completed`);
  } catch (err) {
    console.log(err.message);
  }
})();
// (async () => {
//   try {
//     const x = await getDogPic();
//   } catch (err) {
//     console.log(err.message);
//   }
// })();
/*
readFilePro('./dogs.txt')
    // .then is a way to CONSUME promises by passing a callback function to it. The argument this callback function takes
    // is the "resolve" that the Promise function returns upon a fulfilled promise.
    .then(data => {
        console.log('fetching image');
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    })
    .then(res => {
        console.log('writing image to file');
        return writeFilePro(__dirname+'/dog-images.txt', res.body.message);
    })
    .then(() => {
        console.log('Random dog image saved to file');
    })
    .catch(err => console.log(err.message));
*/
