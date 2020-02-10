function* fib()
{
    let [val1, val2, result] = [0, 1, 0];
    while(true)
    {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenFib()
{
    const myFibs = fib();
    let count = 0;
    while(count < 6)
    {
        const curFib = myFibs.next();
        if (curFib.value % 2 == 0)
        {
            yield curFib.value;
            count++;
        }
    }
}

const evens = evenFib();
console.log(...evens);