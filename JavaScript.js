var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
input = input.replace('\n',' ');
var lines = input.split(' ');

var i = 2;
while(i <= 100)
{
    console.log(i);
    i = i + 2;
}

