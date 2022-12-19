# fitness-calc

Function library for calculating fitness related values

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install fitness-calc
```

### Usage

ES6 import for typical API call signing use case:

```javascript
const fitness = require('fitness-calc');

const weight = 100;
const reps = 5;

const oneRepMax = fitness.oneRepMaxEpley(weight, reps);
console.log(oneRepMax);
```


### List of functions

#### One Repetition Maximum (1RM)

- `oneRepMaxEpley(weight, reps)` - Epley formula
- `oneRepMaxBrzycki(weight, reps)` - Brzycki formula
- `oneRepMaxMcGlothin(weight, reps)` - McGlothin formula
- `oneRepMaxLombardi(weight, reps)` - Lombardi formula
- `oneRepMaxMayhew(weight, reps)` - Mayhew formula
- `oneRepMaxOConner(weight, reps)` - O'Conner formula
- `oneRepMaxWathan(weight, reps)` - Wathan formula

#### Basal Metabolism Rate (BMR)

- `BMR_men(weight, height, age)` - BMR for men
- `BMR_women(weight, height, age)` - BMR for women

#### Ideal Body Weight (IBW)

- `IBW_women(height, age)` - IBW for men
- `IBW_women(height, age)` - IBW for women

## Release notes

### 1.0.0
Initial release.