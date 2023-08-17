function addFive (val){
    return val+5;
}
function helper(){
    console.log('helllo')
}

module.exports =addFive

// jest --version to check if you have the framework or not
// 1- npm init --y 
// npm install --save-dev jest 
// channge script to jest like this
//   "scripts": {
//     "test": "jest"
// },
// to run .... npm run test
// add --coverage to test 'jest --coverage' in package.json to see how much of your code had been tested