async function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

async function load(key) {
  const savedValue = localStorage.getItem(key)

  try {
    return JSON.parse(savedValue)
  } catch (error) {
    console.error(error)
    return null
  }
}

async function remove(key) {
  return localStorage.removeItem(key)
}

async function clear() {
  return localStorage.clear()
}

export { save, load, remove, clear }
