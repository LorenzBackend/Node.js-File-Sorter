let os = require('os');
let fs = require('fs');
let path = require('path');

let username = os.userInfo().username;
let filePath = `C:/Users/${username}/Downloads/`; // The FilePath to sort the fiels as example the downlaod path

fs.readdir(filePath, (err, files) => {

    if (err){
        console.log(err);
    }else{
        files.forEach(SortFile);
    }
});


function SortFile(file){
let ext = path.extname(file);

fs.mkdir(filePath + ext, () => {

    fs.rename(`${filePath}${file}`, `${filePath}${ext}/${file}`, () => {      
     console.log(`File: ${file} copied to ${filePath}`);
    });

});
}
