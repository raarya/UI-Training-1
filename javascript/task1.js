Task1:
Remove particular charactre and keep rest same.
exp newyork => remove "y" 
and output = nework
SOLUTION : 
var exp = "newyork";
exp = exp.slice(0,3) + exp.slice(4);