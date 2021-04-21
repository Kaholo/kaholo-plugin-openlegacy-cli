const { execCmd, existOrCreate } = require("./helpers");

async function generateCode(action, settings) {
    const exePath = settings.exePath ? `"${settings.exePath}"` : "ol";
    const path = (action.params.path || "").trim();
    const project = (action.params.project || "").trim();
    const solution = (action.params.solution || "").trim();
    if (!path || !project || !solution){
        throw "Wasn't given a required param!";
    }
    // log-in if specified
    if (action.params.login && action.params.login !== "false"){
        const apiKey = action.params.apiKey || settings.apiKey;
        if (!apiKey) throw("requested login but wasn't given API key");
        await execCmd(`${exePath} login --api-key ${apiKey}`);
    }
    // create path if doesn't exist
    existOrCreate(path);
    // generate code
    const cmd = `${exePath} generate-service --project ${project} --solution ${solution}`;
    return execCmd(cmd, path);
}
async function logout(action, settings) {
    const exePath = settings.exePath ? `"${settings.exePath}"` : "ol";
    return execCmd(`${exePath} logout`);
}

module.exports = {
    generateCode,
    logout
};
