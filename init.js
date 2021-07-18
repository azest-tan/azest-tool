const cwd = process.cwd()
const fs = require('fs')
const path = require('path')
const readline = require("readline");
const renameFiles = {
  _gitignore: '.gitignore'
}

module.exports = function(){

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("-プロジェクト名を入力してください(デフォルト名:vite-project/中止:n):", answer => {
        if(answer.trim().toLocaleLowerCase() == 'n'){
            console.log('終了しました。');
        }
        else{
            copyvite();
        }

        rl.close();
    });
};

function copyvite(){
  const templateDir = path.join(__dirname, 'template-vite')

  var targetDir = ".";

  const root = path.join(cwd, targetDir)

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  // const pkg = require(path.join(templateDir, `package.json`))

  // pkg.name = packageName || targetDir

  // write('package.json', JSON.stringify(pkg, null, 2))

  // const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm'

  // console.log(`\nDone. Now run:\n`)
  // if (root !== cwd) {
  //   console.log(`  cd ${path.relative(cwd, root)}`)
  // }
  // console.log(`  ${pkgManager === 'yarn' ? `yarn` : `npm install`}`)
  // console.log(`  ${pkgManager === 'yarn' ? `yarn dev` : `npm run dev`}`)
  console.log('Over')
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}