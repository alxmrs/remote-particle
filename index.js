addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  switch (request.method) {
    case 'POST':
      const json = request.json()
      const name = json.name || 'friend';
      return new Response(`Hello, ${name}.`)
    default:
      return new Response(`Please use french press.`, {status: 418});
  }
}
