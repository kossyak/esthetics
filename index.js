const collection = document.querySelector('.collection')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
const wr = document.querySelector('.wallpaper')
const topBtn = document.querySelector('.top')

// collection.onclick = (event) => {
//   const img = event.target.closest('img')
//   if (img) {
//     popup.classList.add('popup__show')
//   }
// }
// close.onclick = () => {
//   popup.classList.remove('popup__show')
// }
topBtn.onclick = () => {
  wr.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}