const func = (str, f) => f(str);

const e1 = func('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, "*c").split('*'));

console.log(e1);

const e2Lam = str => ({
    originalString: str,
    modifiedString: str.replace(/a/g, "A"),
    numberReplaced: (str.match(/a/g)).length,
    length: (str.replace(/a/g, "A")).length
});

const e2 = func('supercalifragilisticexpialidocious',
    e2Lam);

console.log(e2);
