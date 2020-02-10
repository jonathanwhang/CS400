function* wordByWord(sentence)
{
    const words = sentence.split(' ');
    for (word of words)
    {
        yield word;
    }
}

const gen = wordByWord("All I know is something like a bird within her sang");
for (word of gen)
{
    console.log(word);
}