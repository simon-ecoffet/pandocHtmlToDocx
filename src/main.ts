import nodePandoc from 'node-pandoc';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
const pandoc = require('node-pandoc');
const fs = require('fs');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
  console.log('Starting Nest at : http://localhost:3002');


  const xx = pandocapi().then((res) => {
    console.log(res)
  })


}
bootstrap();


async function pandocapi() {

  let promiseResolver;
  const promise = new Promise((resolve) => {
    promiseResolver = resolve;
  })
  
  var src = './src/template.html';
  // Arguments in either a single String or as an Array:
  var args = '-f html -t docx+styles --lua-filter=./src/columns.lua --reference-doc=./src/ref.docx -o doc.docx';

  // Set your callback function
  var callback = function (err, result) {


    let returnedStatus: boolean;
    if (err) {
      console.error('Oh Nos: ', err);
      returnedStatus = false
    } else {
      returnedStatus = true
      promiseResolver(result);
    }
    // Without the -o arg, the converted value will be returned.
    return returnedStatus;
  };
  // Call pandoc
  pandoc(src, args, callback)
  return promise
}

