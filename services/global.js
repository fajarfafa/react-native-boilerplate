export function objectMerge(values, newValues) {
  if (values.length) {
    values.forEach((value, valueKey) => {
      newValues.forEach((newValue, newValueKey) => {
        if (newValue.id === value.id) {
          for (let newValueKeyObj in newValue) {
            values[valueKey][newValueKeyObj] = newValue[newValueKeyObj]
          }
        }
      })
    })
  }
  return values
}