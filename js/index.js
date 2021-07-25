const input = document.querySelectorAll('input')
const at = '@'

input.forEach((item) => {
  item.addEventListener('focusout', (event) => {
    if (!event.target.value) {
      item.classList.add('icon-error')
      const errorText = document.createElement('span')
      item.parentNode.insertBefore(errorText, item.nextSibling)
      errorText.innerText = `${item.placeholder} cannot be empty`
      errorText.classList.add('error-message')
      return
    }
    item.classList.remove('icon-error')
  })
})
