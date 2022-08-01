const fs = require('fs');
const { isBuffer } = require('util');

const writeFile = fileContent => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('.dist/index.html', fileContent, err => {
            //if theres an error, reject the Promise and send the error to the Promise's `.catch()` method
            if(err){
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidentally execture the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promse and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    fs.copyFile => 
    if(err){
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execture the resolve() function as well
        return;
    }

    //if everything went well, resolve the Promse and send the successful data to the `.then()` method
    resolve({
        ok: true,
        message: 'File copied!'
    })
};

module.exports = {writeFile, copyFile};