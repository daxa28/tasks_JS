// const delay = ms => {
//     return new Promise (r => setTimeout(() => r(), ms))
// }

// // delay(2000).then(() => console.log('dasha'))

// const url = 'https://jsonplaceholder.typicode.com/todos'


// function fetchTodos() {
//     console.log('Fetch todo started..')
//     return delay(2000)
//         .then (() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e))


// async function fetchAsyncTodos() {
//     try {
//         console.log('Fetch todo started..')
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch (e) {
//         console.error(e)
//     } finally {
//         console.log('Hello')
//     }

// }
// fetchAsyncTodos();
