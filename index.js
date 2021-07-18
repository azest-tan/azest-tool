#!/usr/bin/env node
const _ = require('lodash');
const argvs = process.argv;

const commandlist = {
    init:require('./init'),
    create:require('./create'),
}

const packagejson = require('./package.json');
const azestlogo = `
------------------------------------------------------
       aaaa                                     
      aaaaa                                      tt
     aaa  aa                                     tt
    aaa   aaa      zzzzzz    eeeeee   sssssss  tttttt
   aaaaaaaaaaa       zzz    e     e   s          tt
  aaaaaaaaaaaaa     zzz     eeeeeee   ssssss     tt
 aaa        aaa    zzz       e              s    tt
aaa          aaa  zzzzzzz    eeeeee  sssssss     tttt
------------------------------------------------------
---        フロントエンド開発補佐ツール 　　　　   ---
---            Azest-Tool ver: ${packagejson.version}               ---
---     https://www.npmjs.com/package/azest-tool   ---
------------------------------------------------------
- azest-tool init : Viteベースのプロジェクトを初期化します
- azest-tool create : Page、Layout、VueStoreを作成します
------------------------------------------------------
`;
console.log(azestlogo)

for (const key in commandlist) {
    if(_.indexOf(argvs,key)>0){
        commandlist[key]();
    }
}
