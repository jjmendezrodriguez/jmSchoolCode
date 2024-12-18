"""Variables are used to store data values ans assign a name to it.
the value of a variable can be changed later on.
Type of variables:
1. String = letters, numbers, and special characters need to be in quotes('' or "")
2. Integer = whole numbers, positive or negative, without decimals, and without quotes(123)
3. Float = decimal numbers, positive or negative, with decimals, and without quotes(123.4)
4. List = grup of items is it mutable puedes cambiar los elementos de la lista
5. Tuple = grup of items is it immutable no puedes cambiar los elementos de la tupla
6. Dictionary = grup of items in key:value pairs
7. Set = grup of unique items no puedes tener elementos duplicados
8. Boolean = True or False need to be capitalized and without quotes
9. None"""

string = "Hello, World!"
# string is declarate with single or double quotes

integer = 123
# integer is declarate without quotes

float_number = 123.4
# float is declarate with decimal numbers

list_ = ["apple", "banana", "cherry", 76, 89.4]
# list is mutable declarate with brackets []

tuple_ = ("apple", "banana", "cherry", 76, 89.4)
# tuple is immutable declarate with parentheses ()

dictionary = {"name": "John", "age": 36}
"""dictionary is declarate with curly brackets {}.Having key:value pairs,
the value can be of any type, but the key must be a string, integer, or float, list, tuple, or another dictionary."""
dictionary_list = {"name": "John", "age": 36, "children": ["Ann", "Billy"]}
dictionary_tuple = {"name": "John", "age": 36, "children": ("Ann", "Billy")}
dictionary_dic = {
    "name": "John",
    "age": 36,
    "children": {"daughter": "Ann", "son": "Billy"},
}


set_ = {"apple", "banana", "cherry"}
# set is declarate with curly brackets {}

boolean = True
# we use True or False to declare a boolean variable

none = None
# none is used to define a null value or no value at all

# The use use of variables is to store data values and assign a name to it:

x = 5  # x is a variable that stores the value 5
y = "John"  # y is a variable that stores the value John

print(x + y)  # this will raise an error because you can't add a number to a string
# to fix this you can convert the number to a string
print(str(x) + y)  # this will print 5John

# To join two or more variables you can use the + operator
x = "Python is "
y = "awesome"
z = x + y
print(z)  # this will print Python is awesome or
print(x + y)  # this will print Python is awesome

# for different data types you can use the format() method
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))  # this will print My name is John, and I am 36

# f strings are another way to format strings
age = 36
txt = f"My name is John, and I am {age}"
print(txt)  # this will print My name is John, and I am 36

# You can also assign multiple values to multiple variables in one line
x, y, z = (
    "Orange",
    "Banana",
    "Cherry",
)  # order matters, will be same order as the variables


"""For asigning space in the variables name you can use _ or camelCase
_ is used to separate words in the variable name (in python _ is standar)"""
myVariable = "John"
my_variable = "John"

# for use simbols in the string you can use \ before the simbol:
txt = 'We are the so-called "Vikings" from the north.'

"""using triple quotes you can use multiple lines in a string"""
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."""
print(a)
