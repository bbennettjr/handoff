export default function filter(input, phrase) {
  const regex = new RegExp(`(${input}|${input.split("").join(".*")})`, "gi")
  return regex.test(phrase)
}
