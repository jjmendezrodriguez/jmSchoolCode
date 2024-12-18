import random  # Import the whole random module

employees = ["John", "Jane", "Jack", "Janice"]

# for numbers
print(
    random.randint(1, 10)
)  # randint means random integer used to print random number between 1 and 10
print(
    random.uniform(1, 10)
)  # uniform means random float used to print random number between 1 and 10
print(random.random())  # random number between 0 and 1 will be printed
print(
    random.random() * 100
)  # random number between 0 and 100 will be printed using * 100 to multiply the random number up to 100.
print(
    random.randrange(1, 10, 2)
)  # randrange means random number with step used to print random number between 1 and 10 with step 2


# for use list
print(
    random.choice(employees)
)  # only one (1) employee will be printed with random.choice
print(
    random.choices(employees, k=2)
)  # two employees will be printed with random.choices and k=2 is used to print two employees
print(
    random.sample(employees, 2)
)  # two employees will be printed with random.sample and 2 is used to print two employees
random.shuffle(employees)  # shuffle es para mezclar los elementos de la lista
employees_2 = employees  # save the employees list shuffled in employees_2
print(employees_2)  # employees will be printed with random.shuffle


employees = ["John", "Jane", "Jack", "Janice", "Jill"]

shifts = ["Morning", "Afternoon", "Evening"]

schedule = {}

# Días de la semana
days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

# Generar horarios semanales
weekly_schedule = {day: {} for day in days}

for day in days:
    random.shuffle(shifts)  # Mezclar turnos para el día
    for i, employee in enumerate(employees):
        weekly_schedule[day][employee] = shifts[i % len(shifts)]

# Mostrar el horario semanal
for day, schedule in weekly_schedule.items():
    print(f"\n{day}:")
    for employee, shift in schedule.items():
        print(f"  {employee}: {shift}")
