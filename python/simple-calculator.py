isNotFinished = True

while isNotFinished:

    num1 = int(input("Please enter number 1: "))
    num2 = int(input("Please enter number 2: "))

    operator = input("Please enter the operator: ")

    if operator == "+" :
        num3 = num1 + num2
    elif operator == "-" :
        num3 = num1 - num2
    elif operator == "/" :
        num3 = num1 / num2
    elif operator == "*" :
        num3 = num1 * num2
    else:
        print("You have entered an invalid operator.")
        num3 = "N/A"

    print(num3)

    isFinished = input("Are you finished? y/n ")
    # This if statement ends the loop
    if isFinished != "n":
        isNotFinished = False

    

print(num1)
print(num2)
print(num3)
