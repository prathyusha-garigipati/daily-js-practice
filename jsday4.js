console.log("Day-4: if else conditions & switches");

// if else conditions
let age = 18;
if (age < 18) 
{
    console.log("You are a minor.");
}
else
{
    console.log("You are an adult.");
}
//else if
if(age == 18)
{
    console.log("You are exactly 18 years old.");
}
else if(age > 18)
{
    console.log("You are older than 18.");
}
else
{
    console.log("You are younger than 18.");
}
//to check a variable exists or not
let user;
if(typeof user !== 'undefined')
{
    console.log("User is defined.");
}
else
{
    console.log("User is not defined.");
}
//boolean conditions
let isLoggedIn = true;
if(isLoggedIn)
{
    console.log("User is logged in.");
}
else
{
    console.log("User is not logged in.");
}

//switch case
let day = 3;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day.");
}       