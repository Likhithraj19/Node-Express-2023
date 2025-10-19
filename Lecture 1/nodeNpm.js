const fs = require('fs')

//WriteFile
// fs.writeFile("Hey.txt","Hello this is a backend tutorial",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("No Errors")
//     }
// })

//AppendFile
// fs.appendFile("Hey.txt"," Its really good",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Appended successfully");
//     }
// });

//Rename
// fs.rename("Hey.txt","Hello.txt",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File Name changed successfully");
//     }
// });

//CopyFile
// fs.copyFile("Hello.txt","./destination/Copy.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('File has been copied to destination')
//     }
// })

//DeleteFile

// fs.unlink("Hello.txt",function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("File Removed")
//     }
// })

// fs.rm("./destination",{recursive:true},function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Removed Folder")
//     }
// })

fs.readFile("Hey.txt",function(err,data){
    if(err){
        console.log(data)
    }else{
        console.log("File read successfully")
        console.log(data.toString());
    }
})
