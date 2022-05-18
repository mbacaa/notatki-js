// Shared state
const a = {
  value: 7,
  state: 1
};

const f1 = () => a.state += 1;
const f2 = () => a.state *= 2;

f2();
f1();
f2();

// Avoid shared state
console.log(a.state);

const inc = x => ({...x, state: x.state + 1});
const double = x => ({...x, state: x.state * 2});

inc(a);
double(a);
inc(a);
inc(a);
inc(a);
inc(a);

// Prefer pure function
console.log(a.state);

// Function composition
const newState =  inc(double(inc(a)));
console.log(newState.state);

