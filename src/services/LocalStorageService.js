function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

function load(key) {
  const savedValue = localStorage.getItem(key)

  try {
    return JSON.parse(savedValue)
  } catch (error) {
    console.error(error)
    return null
  }
}

function remove(key) {
  return localStorage.removeItem(key)
}

function clear() {
  return localStorage.clear()
}

export { save, load, remove, clear }
