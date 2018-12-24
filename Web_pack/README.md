//Typescript

yarn add typescript awesome-typescript-loader
tsconfig.json
{
  "compilerOptions":{
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es5",
    "lib": ["es5","es6","dom"],
    "sourceMap": true,
    "experimentalDecorators": true,
    "allowJs": true,
    "experimentalDecorators": true
  },
  "atom":{
    "rewriteTsconfig": false
  }
}

    "allowJs": true -- didn't work so i remove it
