import { writeFile } from "fs";

const targetPath = "./src/environments/environment.prod.ts";

console.log(targetPath);

const envConfigFile = `export const environment = {
   production: true,
   testEnv: '${process.env['TEST']}'
 };`
;
console.log(envConfigFile);

writeFile(targetPath, envConfigFile, "utf8", (err) => {
  if (err) {
    return console.log(err);
  }
});
