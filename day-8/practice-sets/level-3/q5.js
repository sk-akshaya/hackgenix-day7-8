/*Write a memoize function using a closure and an object cache. Test it with a slow Fibonacci
function.*/
function memoize(fn){
    let cache={};
    return function(n){
        if(n in cache){
            return cache[n];
        }
        cache[n]=fn(n);
        return cache[n];
    };
}
function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
let fastFibonacci=memoize(function(n){
    return fibonacci(n);
});
console.log(fastFibonacci(10));
console.log(fastFibonacci(20));
console.log(fastFibonacci(30));