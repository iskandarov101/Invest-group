// HEADER

const elOpenBtn = document.querySelector('.burger-menu')
const elCloseBtn = document.querySelector('.navbar__btn')
const elNavbar = document.querySelectorAll('.navbar')
const elHeader = document.querySelector('.header')

elOpenBtn.addEventListener('click', () => {
    elNavbar.forEach(item => item.classList.add('visible'))
})

elCloseBtn.addEventListener('click', () => {
    elNavbar.forEach(item => item.classList.remove('visible'))
})


const headerScroll = () => {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight * 0.8) {
    elHeader.classList.add('header-scroll');
  }
  if (window.pageYOffset == 0) {
    elHeader.classList.remove('header-scroll')
  }
}
window.addEventListener('scroll', headerScroll)


// MODAL


// const btnModalOpen = document.querySelectorAll('[data-modal]');
// const btnModalClose = document.querySelector('[data-close]');
// const elModal = document.querySelector('.modal');
// const elModalBody = document.querySelector('.modal__dialog')


// function closeModal() {
//   elModal.classList.add('hide');
//   elModal.classList.remove('show');
//   elModalBody.classList.remove('fade-modal')
//   document.body.style.overflow = '';
// }

// function openModal() {
//   elModal.classList.add('show');
//   elModalBody.classList.add('fade-modal')
//   elModal.classList.remove('hide');
//   document.body.style.overflow = 'hidden';
//   clearTimeout(modalTimer)
// }

// const modalTimer = setTimeout(openModal, 5000)


// btnModalOpen.forEach(btn => {
//   btn.addEventListener('click', openModal)
// });

// btnModalClose.addEventListener('click', closeModal)



// elModal.addEventListener('click', (evt) => {
//   if (evt.target === elModal) {
//     closeModal()
//   }
// })


// document.addEventListener('keydown', (evt) => {
//   if (evt.code === 'Escape' && elModal.classList.contains('show')) {
//     closeModal()
//   }
// })

// function showModal() {
//   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight * 0.99) {
//     openModal()
//     window.removeEventListener('scroll', showModal)
//   }
// }

// window.addEventListener('scroll', showModal)




// PROGRESS


const elProgress = document.querySelector('.order__progress')
const elPrev = document.getElementById('order-prev')
const elNext = document.getElementById('order-next')
const circles = document.querySelectorAll('.order__circle')
const elOrderText = document.querySelector('.order__text')


const orderTextArr = ['Предварительная бесплатная консультация по телефону или онлайн', 'Встреча в офисе. Изучение документов, оценка перспективы дела', 'Заключаем договор/соглашение между клиентом и адвокатской конторой', 'Начинаем работу по согласованному делу вместе']
let currentActive = 1

elNext.addEventListener('click', () => {
  currentActive++
  elOrderText.textContent = orderTextArr[currentActive - 1]

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

elPrev.addEventListener('click', () => {
  currentActive--
  elOrderText.textContent = orderTextArr[currentActive - 1]

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('order__circle--active')
    } else {
      circle.classList.remove('order__circle--active')
    }
  })

  const actives = document.querySelectorAll('.order__circle--active')

  elProgress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if (currentActive === 1) {
    elPrev.disabled = true
  } else if (currentActive === circles.length) {
    elNext.disabled = true
  } else {
    elPrev.disabled = false
    elNext.disabled = false
  }
}


// TABS



const elTab = document.querySelectorAll('.tabpanel__item')
const elTabContents = document.querySelectorAll('.tabs__item')
const elTabs = document.querySelector('.tabpanel__list')

const noneTabs = () => {
  elTabContents.forEach(elTabContent => {
    elTabContent.classList.remove('show');
    elTabContent.classList.add('hide')
  })

  elTab.forEach(tab => {
    tab.classList.remove('tabpanel__item--active');
  })
}


const showTabs = (i = 0) => {
  elTabContents[i].classList.add('show', 'fade')
  elTabContents[i].classList.remove('hide')
  elTab[i].classList.add('tabpanel__item--active')
}

noneTabs()
showTabs()

elTabs.addEventListener('click', (evt) => {
  if (evt.target.matches('.tabpanel__item')) {

    elTab.forEach((tab, i) => {
      if (evt.target == tab) {
        noneTabs()
        showTabs(i)
      }
    })
  }
})
