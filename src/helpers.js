const child_process = require("child_process");
const fs = require("fs");
const homeDirectory = require('os').homedir();

async function execCmd(command, path){
    let opts = {};
    if (path) opts.cwd = untildify(path);
    return new Promise((resolve, reject) => {
        child_process.exec(command, opts, (error, stdout, stderr) => {
            if (error) {
                return reject(`openlegacy cli error: ${error}`);
            }
            if (stderr) {
                console.log(`openlegacy cli stderr: ${stderr}`);
            }
            if (stdout.includes("Error: ") || stdout.includes("Error - ")){
                return reject(stdout);
            }
            return resolve(stdout);
        });
    });
}

function existOrCreate(path){
    if (fs.existsSync(path)) return;
    fs.mkdirSync(path, { recursive: true });
}


function untildify(path){
    return homeDirectory ? path.replace(/^~(?=$|\/|\\)/, homeDirectory) : path;
}

module.exports = {
    execCmd,
    existOrCreate
};
