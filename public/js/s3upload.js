// s3Upload.js
AWS.config.update({
    accessKeyId: '', // Replace with your actual access key
    secretAccessKey: '', // Replace with your actual secret key
    region: 'ap-south-1' // Replace with your AWS region
});

var s3 = new AWS.S3();

function uploadFile() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    if (!file) {
        alert("Please choose a file to upload first.");
        return;
    }

    var params = {
        Bucket: 'agri-03', // Replace with your actual bucket name
        Key: file.name,
        Body: file,
        ACL: 'public-read' // or private based on your requirements
    };

    s3.upload(params, function(err, data) {
        if (err) {
            console.error('There was an error uploading your file: ', err);
            alert('There was an error uploading your file.');
            return;
        }
        console.log('Successfully uploaded file.', data);
        alert('File successfully uploaded.');
    });
}
