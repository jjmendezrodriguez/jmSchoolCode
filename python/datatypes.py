""" For knowing the type of a variable you can use the type() function.
that will return the type of the variable"""

# Integer
age = 30
print(type(age))  # <class 'int'>
# Example usage: Calculating the number of days lived
days_lived = age * 365
print(f"Days lived: {days_lived}")

# Float
price = 19.99
print(type(price))  # <class 'float'>
# Example usage: Calculating the total price with tax
tax_rate = 0.07
total_price = price + (price * tax_rate)
print(f"Total price with tax: {total_price}")

# String
name = "Alice"
print(type(name))  # <class 'str'>
# Example usage: Greeting a user
greeting = f"Hello, {name}!"
print(greeting)

# List
numbers = [1, 2, 3, 4, 5]
print(type(numbers))  # <class 'list'>
# Example usage: Summing all elements in the list
total_sum = sum(numbers)
print(f"Total sum: {total_sum}")

# Tuple
coordinates = (10.0, 20.0)
print(type(coordinates))  # <class 'tuple'>
# Example usage: Accessing elements in a tuple
x, y = coordinates
print(f"X: {x}, Y: {y}")

# Set
unique_numbers = {1, 2, 3, 3, 4}
print(type(unique_numbers))  # <class 'set'>
# Example usage: Checking membership in a set
is_in_set = 3 in unique_numbers
print(f"Is 3 in set: {is_in_set}")

# Dictionary
person = {"name": "Bob", "age": 25}
print(type(person))  # <class 'dict'>
# Example usage: Accessing dictionary values
person_name = person["name"]
person_age = person["age"]
print(f"Name: {person_name}, Age: {person_age}")

# Boolean
is_student = True
print(type(is_student))  # <class 'bool'>
# Example usage: Conditional statement
if is_student:
    print("The person is a student.")

# NoneType
result = None
print(type(result))  # <class 'NoneType'>
# Example usage: Checking if a variable is None
if result is None:
    print("No result available.")

    # For mixing data types, you can use the appropriate data type conversion functions:
    # Mixing data types

    # Converting integer to string
    age_str = str(age)
    print(f"Age as string: {age_str} (type: {type(age_str)})")

    # Converting float to integer
    price_int = int(price)
    print(f"Price as integer: {price_int} (type: {type(price_int)})")

    # Converting string to list of characters
    name_list = list(name)
    print(f"Name as list: {name_list} (type: {type(name_list)})")

    # Converting list to tuple
    numbers_tuple = tuple(numbers)
    print(f"Numbers as tuple: {numbers_tuple} (type: {type(numbers_tuple)})")

    # Converting tuple to list
    coordinates_list = list(coordinates)
    print(f"Coordinates as list: {coordinates_list} (type: {type(coordinates_list)})")

    # Converting set to list
    unique_numbers_list = list(unique_numbers)
    print(
        f"Unique numbers as list: {unique_numbers_list} (type: {type(unique_numbers_list)})"
    )

    # Converting dictionary keys to list
    person_keys_list = list(person.keys())
    print(f"Person keys as list: {person_keys_list} (type: {type(person_keys_list)})")

    # Converting boolean to integer
    is_student_int = int(is_student)
    print(f"Is student as integer: {is_student_int} (type: {type(is_student_int)})")
