def switch_case_function(num1, num2, op):

  switcher = {
    "+": num1 + num2,
    "-": num1 - num2,
    "/": num1 / num2,
    "*": num1 * num2
  }
  
  print (switcher.get(op, "invalid operator"))

def calc():
    num1 = int(input("Please define number 1: "))
    num2 = int(input("Please define number 2: "))
    operator = str(input("Please define the operator: "))
    
    switch_case_function(num1,num2,operator)

switch_case_function("+")
switch_case_function("-")
switch_case_function("/")

calc()
