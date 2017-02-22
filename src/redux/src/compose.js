// compose 函数返回一个函数

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function fun1(num) {
  console.log('fun1获得参数' + num);
  return num + 1;
}

function fun2(num) {
  console.log('fun2获得参数' + num);
  return num + 2;
}

function fun3(num) {
  console.log('fun3获得参数' + num);
  return num + 3;
}

const re1 = fun3(fun2(fun1(0)));
console.log('re1:' + re1);
console.log("==========");

const re2 = compose(fun3, fun2, fun1)(0);
console.log('re2:' + re2);