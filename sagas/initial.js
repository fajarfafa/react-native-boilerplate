export function* initialWorker(action) {
  try {
    console.log(action,'wokrer')
  } catch (e) {
    console.error(e)
  }
}