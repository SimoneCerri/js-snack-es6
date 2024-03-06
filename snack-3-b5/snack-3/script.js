function reverseString(str)
{
    const reversedString =
        str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}

reverseString("ciao")

//broh i just google it...