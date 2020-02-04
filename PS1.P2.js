const evaluate = expr => {
    let op = expr.charAt(1);
    switch (op)
    {
        case '+':
            return (x,y) => x+y;

        case '-':
            return (x,y) => x-y;

        case '*':
            return (x,y) => x*y;

        case '/':
            return (x,y) => x/y;

        case '%':
            return (x,y) => x%y;

        default:
            return;
    }
}

const perform = expr => {
    let func = evaluate(expr);
    let op1 = parseInt(expr.charAt(0));
    let op2 = parseInt(expr.charAt(2));

    return func(op1,op2);
}

for (var expr of ['4+2', '5*7', '6-1', '9/2'])
{
    console.log(`${expr} = ${perform(expr)}`);
}

const expression = '8%3';
let operator = evaluate(expression);
// console.log(`${expression} = ${perform(expression)}`);