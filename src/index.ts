export function oneRepMaxEpley(weight: number, reps: number): number {
  return Number((weight * (1 + reps / 30)).toFixed(2));
}

export function oneRepMaxBrzycki(weight: number, reps: number): number {
  return Number((weight * 36 / (37 - reps)).toFixed(2));
}

export function oneRepMaxMcGlothin(weight: number, reps: number): number {
  return Number((100 * weight / (101.3 - 2.67123 * reps)).toFixed(2));
}

export function oneRepMaxLombardi(weight: number, reps: number): number {
  return Number((weight * Math.pow(reps, 0.1)).toFixed(2));
}

export function oneRepMaxMayhew(weight: number, reps: number): number {
  return Number((100 * weight / (52.2 + 41.9 * Math.exp(-0.055 * reps))).toFixed(2));
}

export function oneRepMaxOConner(weight: number, reps: number): number {
  return Number((weight * (1 + reps / 40)).toFixed(2));
}

export function oneRepMaxWathan(weight: number, reps: number): number {
  return Number((100 * weight / (48.8 + 53.8 * Math.exp(-0.075 * reps))).toFixed(2));
}

export function BMR_men(weight: number, height: number, age: number): number {
  return Number((10 * weight + 6.25 * height - 5 * age + 5).toFixed(2));
}

export function BMR_women(weight: number, height: number, age: number): number {
  return Number((10 * weight + 6.25 * height - 5 * age - 161).toFixed(2));
}

export function IBW_men(height: number, age: number): number {
  return Number((50 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
}

export function IBW_women(height: number, age: number): number {
  return Number((45.5 + 2.3 * ((height - 60) / 2.54)).toFixed(2));
}
