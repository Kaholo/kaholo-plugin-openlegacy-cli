# kaholo-plugin-openlegacy-cli
Kaholo Plugin for OpenLegacy CLI.

## Settings:
1. OpenLegacy CLI Executable Path (String) **Optional** - The path to the OpenLegacy CLI executable file to run commands with. Default is *ol*.
2. OpenLegacy API Key (Vault) **Optional** - The default OpenLegacy API Key to login with. Only used in case login was requested.

## Method: Generate OL Code
Generate project code using OpenLegacy CLI. The method uses the command "ol generate-service". Also log-in to OpenLegacy if specified.


### Parameters:
1. New Project Path (String) **Required** - The path to create the directory of the project in. If the path specified doesn't exist it will be created. 
2. Project Name (String) **Required** - The name of the OpenLegacy project to generate.
3. Solution Name (String) **Required** - The name of the OpenLegacy solution to use to generate the code.
4. Should Log In? (Boolean) **Optional** - If specified, try to login using the API Key specified in the action or settings. API Key is required for log in. The method will fail in case the login fails.
5. OpenLegacy API Key (Vault) **Optional** - The OpenLegacy API Key to login with. Only used in case login was requested.

## Method: Logout
Logout from OpenLegacy. Recomnded after all actions in OpenLegacy end(in case login was performed from Kaholo), but not necessary.

### Parameters: None