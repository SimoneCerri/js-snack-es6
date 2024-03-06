function reverseString(str)
{
    const reversedString =
        str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}

reverseString("Ciao");

//broh i just google it...