"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const pandoc = require('node-pandoc');
const fs = require('fs');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3002);
    console.log('Starting Nest at : http://localhost:3002');
    const xx = pandocapi().then((res) => {
        console.log(res);
    });
}
bootstrap();
async function pandocapi() {
    let promiseResolver;
    const promise = new Promise((resolve) => {
        promiseResolver = resolve;
    });
    var src = './src/template.html';
    var args = '-f html -t docx+styles --reference-doc=./src/ref.docx -o doc.docx';
    var callback = function (err, result) {
        let returnedStatus;
        if (err) {
            console.error('Oh Nos: ', err);
            returnedStatus = false;
        }
        else {
            returnedStatus = true;
            promiseResolver(result);
        }
        return returnedStatus;
    };
    pandoc(src, args, callback);
    return promise;
}
//# sourceMappingURL=main.js.map