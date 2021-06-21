nums = int(input("Please enter a number: "))


if (nums)%4 == 0 and (nums)%2 == 0:
    print("You have entered an even number that is also divisible by 4")
elif (nums)%2 == 0:
    print("You have entered an even number")
else:
    print("You have entered an odd number")
