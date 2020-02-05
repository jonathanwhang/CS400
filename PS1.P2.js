const evaluate = expr => {
    let op = expr.charAt(1);
    switch (op)
    {
        case '+':
            return (expr) => parseInt(expr[0]) + parseInt(expr[2]);

        case '-':
            return (expr) => parseInt(expr[0]) - parseInt(expr[2]);

        case '*':
            return (expr) => parseInt(expr[0]) * parseInt(expr[2]);

        case '/':
            return (expr) => parseInt(expr[0]) / parseInt(expr[2]);

        case '%':
            return (expr) => parseInt(expr[0]) % parseInt(expr[2]);

        default:
            return;
    }
}

for (var expr of ['4+2', '5*7', '6-1', '9/2'])
{
    let operator = evaluate(expr);
    console.log(`${expr} = ${operator(expr)}`);
}

// const expression = '8%3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator(expression)}`);
