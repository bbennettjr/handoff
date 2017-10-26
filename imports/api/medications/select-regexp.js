export default function filter(input, phrase) {
  const regex = new RegExp(input.split("").join(".*"), "gi")
  return regex.test(phrase)
}
