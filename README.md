# MathExercise

## Configuration files

configuration of groups

```json
[
    {"id": "08_01_terme", "name":"Könnensbeweis 1", "class": 8, "level": 1, "logo": "08_01_terme.jpg",
        "descr":"Das sind einige Aufgaben für das Üben von Termumformungen und Gleichungen." },
    {"id": "exercise_class_8_1", "name":"Aufgaben Klasse 8 Nr. 1", "class": 8, "level": 1, 
        "descr":"Das sind einige Aufgaben für das Üben von Termumformungen und Gleichungen." }, 
]
```

configuration of exercises for a group

```json
[
    {"topic": "Vereinfache", "text":"$x + 6a + 5x + 8a$", "choice":[ "$5x^2 + 14a$", "$6x - 2a$", "$6x + 14a$" ], "solution":2 },
    {"topic": "Vereinfache", "text":"$7x + 6a - 2b - 8a - 7x$", "choice":[ "$- 2a - 2b$", "$- 2a - 9x$", "$- 2a - 2b - 7x$" ], "solution":0 },
    {"topic": "Vereinfache", "text":"$3x + 6a - 2x - 8a$", "choice":[ "$x - 2a$", "$5x - 2a$", "$x + 2a$" ], "solution":0 },
    {"topic": "Vereinfache", "text":"$14y + 6a - 0.5x - 5a + 0.2x$", "choice":[ "$14y + a - 0.25x$", "$14y + a - 0.3x$", "$14y + 5.5a - 0.3x$" ], "solution":1 },
    {"topic": "Vereinfache", "text":"$\\frac{3}{4} x + \\frac{2}{3} a - 2x - \\frac{1}{3} a$", "choice":[ 
        "$\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + \\frac{1}{3} a$" ], "solution":2 },
    {"topic": "Vereinfache", "text":"$10a + 3b - 7a - 2b$", "choice":[ "$3a + 5b$", "$3a + b$", "$17a + 5b$" ], "solution":1 },
    {"topic": "Löse die Gleichung und gib den Wert von x an.", "text":"$15x + 3 = 7x - 5$", "solution":-1 },
    {"topic": "Löse die Gleichung und gib den Wert von x an.", "text":"$4x - 2x = 18 - 12$", "solution":3 },
    {"topic": "Löse die Gleichung und gib den Wert von x an.", "text":"$5(3 - x) = -10$", "solution":5 },
    {"topic": "Löse die Gleichung und gib den Wert von x an.", "text":"$6x + 2 = 4x - 10$", "solution":-6 },
    {"topic": "Löse die Gleichung und gib den Wert von x an.", "text":"$5(x + 11) = 10(x - 3)$", "solution":5 }
  ]
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
