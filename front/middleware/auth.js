export default function ({ app, store, redirect }) {
  const cookieValue = app.$cookiz.get('jwt')
  if (cookieValue !== undefined) {
    return true
  } else {
    redirect('/')
  }
}
