const input=document.getElementById("textbox");
const tofarenheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("myh2");
let unit;

function convert()
{
    unit=Number(input.value);
if(tofarenheit.checked)    
{
result.textContent=unit*(9/5)+32+"F";
}
else if(tocelsius.checked)
{
    result.textContent=(unit-32)*(5/9)+"C";
}
else{
    result.textContent=(`You Have to select a Unit`);
}
}