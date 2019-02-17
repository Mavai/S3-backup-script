let AWS = require("aws-sdk");
let fs = require("fs");
var path = require("path");

AWS.config.update({ region: "eu-north-1" });

s3 = new AWS.S3({ apiVersion: "2006-03-01" });

let uploadParams = { Bucket: process.argv[2], Key: "", Body: "" };
let folder = process.argv[3];
let uploadInterval = process.argv[4] || 60;

setInterval(() => {
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      let fileStream = fs.createReadStream(folder + "/" + file);
      fileStream.on("error", err => {
        console.log("File Error", err);
      });
      uploadParams.Body = fileStream;
      uploadParams.Key = path.basename(file);

      s3.upload(uploadParams, (err, data) => {
        if (err) {
          console.log("Error", err);
        }
        if (data) {
          console.log("Upload Success", data.Location);
        }
      });
    });
  });
}, 1000 * 60 * uploadInterval);
