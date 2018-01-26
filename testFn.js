export function Division(a,b) {
  if(typeof(a) !== 'number' && typeof(b) !== 'number') return -1
  return a%b===0
}

export function RemoveZeroes(a) {
  return a.filter(x=>x!==0)
}
