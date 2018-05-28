var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "thpa0007",                   // NOTE that this was username in 1.x 
    password: "pass",           // optional, prompted if none given
    host: "webbkurs.ei.hv.se",
    port: 22,
    localRoot: __dirname + '/~thpa0007/public_html/Angular',
    remoteRoot: '/~thpa0007/public_html/Angular',
    include: ['*', '**/*'],      // this would upload everything except dot files
    // include: ['*.php', 'dist/*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRoot: true                // delete existing files at destination before uploading
}
 
// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))
    
// use with callback
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});

ftpDeploy.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename;             // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data);         // same data as uploading event
});