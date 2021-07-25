const inputs = document.querySelectorAll('input')
const errorText = document.createElement('span')

inputs.forEach((item) => {
  item.addEventListener('focusout', (event) => {
    if (!event.target.value) {
      item.classList.add('icon-error')
      item.parentNode.insertBefore(errorText, item.nextSibling)
      errorText.innerText = `${item.placeholder} cannot be empty`
      errorText.classList.add('error-message')
      return
    } else {
      item.classList.remove('icon-error')
      errorText.remove()
    }
  })
})
