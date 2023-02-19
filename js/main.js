
document.querySelector('.scroller').addEventListener('scroll',(e)=> {
  document.querySelector('.head').classList.add('headShadow')

  if(e.target.scrollTop === 0) {
    document.querySelector('.head').classList.remove('headShadow')
  }

})


document.querySelector('.btn').addEventListener('click',()=> {
  document.documentElement.classList.toggle('dark')
})