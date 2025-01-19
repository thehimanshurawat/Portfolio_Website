/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //service ID - template ID - #form - public key
    emailjs.sendForm('service_gngk07s', 'template_99j69bb', '#contact-form', '00u7V_PNmaMs2d5Jg')

    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, ()=>{
        //show error message
        contactMessage.textContent = 'Message not sent Kindly direct mail to:- himanshurwt003@gmail.com ❌'

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay:300,
    //reset: true, // Animation repeat
})
sr.reveal(`.profile, .contact__form`)
sr.reveal(`.info`,{origin:'left', delay:800})
sr.reveal(`.skills`,{origin:'left', delay:800})
sr.reveal(`.about`,{origin:'right', delay:800})
sr.reveal(`.projects__card, .services__card, .experience__card`,{interval: 10})