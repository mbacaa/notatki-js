const inc = x => x + 1;
const double = x => x * 2;

// Algebra:  (f * g)(x)  =  f(g(x))
const res = inc(double(inc(2)));

const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);

const res2 = compose(double, inc)(2);

console.log(res2);

const h = compose(inc, double, double, x => x * x);

console.log(h(3));

// Jak logować, debuggować przy compose
const trace = message => value => {
  console.log(`${message}: ${value}`);
  return value;
};

trace('Hello you ')(2);

const h2 = compose(
    inc,
    trace('Po funkcji double po raz drugi'),
    double,
    trace('Po funkcji double po raz pierwszy'),
    double,
    trace('Po funkcji kwadrat'),
    x => x * x
);

h2(5);

console.log("----------------------")
const pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);

const h2o = pipe(
    inc,
    trace('Po funkcji inc'),
    double,
    trace('Po funkcji double po raz pierwszy'),
    double,
    trace('Po funkcji double po raz drugi'),
    x => x * x
);

console.log(h2o(5));

// Powiedzmy, ze ktos napisał (nie my) taką funkcję typu trace
const myLog = value => message => {
  console.log(`${message}: ${value}`);
  return value;
}

const h2ooo = pipe(
    inc,
    x => myLog(x)('Po funkcji inc'),
    double,
    x => myLog(x)('Po funkcji double po raz pierwszy'),
    double,
    x => myLog(x)('Po funkcji double po raz drugi'),
    x => x * x
);

h2ooo(5);

const flip = fn => a => b => fn(b)(a);

const myLogFlipped = flip(myLog);

// Rozne wersje sum do wykorzystania w pipe nacla
const sum2 = a => b => a + b;
const sum3Curried = a => b => c => a + b + c;
// vs.
const sum3 = (a, b, c) => a + b + c;

const nacl = pipe(
    inc,
    myLogFlipped('Po funkcji inc'),
    double,
    myLogFlipped('Po funkcji double po raz pierwszy'),
    double,
    myLogFlipped('Po funkcji double po raz drugi'),
    sum3(5)(2),
    myLogFlipped('Po funkcji sum'),
    x => x * x
);

nacl(5);

