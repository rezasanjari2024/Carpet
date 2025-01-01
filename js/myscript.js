// let slideIndex = 0;

// function moveSlide(step) {
//     const slides = document.querySelectorAll('.slide');
//     slideIndex += step;

//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     }
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }

//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${slideIndex * 100}%)`;

//     updateDots();
// }

// // تغییر وضعیت دات‌ها
// function updateDots() {
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === slideIndex) {
//             dot.classList.add('active');
//         }
//     });
// }

// // نمایش اسلاید خاص با دات‌ها
// function currentSlide(index) {
//     slideIndex = index;
//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${slideIndex * 100}%)`;

//     updateDots();
// }

// // Auto-slide every 3 seconds
// setInterval(() => {
//     moveSlide(1);
// }, 3000);

// window.onload = updateDots;


document.addEventListener("DOMContentLoaded", function() {

    // ذخیره مقدار در LocalStorage
const hiddenInput = document.getElementById('Language');

if(hiddenInput !=null)
  localStorage.setItem('Language', hiddenInput.value);


    console.log("برنامه لود شد!");
  const url = window.location.href; // آدرس کامل
        const fileName = url.substring(url.lastIndexOf("/") + 1); // استخراج نام فایل
        console.log("نام فایل HTML جاری:", fileName);
        const titleElement = document.getElementById("address-title");
        const mapElement = document.getElementById("address-map");
        const detailesItem = document.getElementsByClassName('detailes');
        const btnBack= document.getElementById('btn-back');
        const title2= document.getElementById('title2');

        // گرفتن تگ h1
      
        
        // اضافه کردن متن بعد از تگ h1
        
        if("FA" ===  localStorage.getItem('Language')) {
            titleElement.textContent = "برای خرید و سفارس فرش مورد علاقه خودتان با ما در تماس باشید";
            mapElement.textContent = "نقشه";
          Array.from(detailesItem).forEach(element => {
                const h1 = element.querySelector('h5');
                 h1.textContent = "حاج خلیلی";
            h1.insertAdjacentText('afterend', ' فرش');
            });
           
btnBack.innerText = "بازگشت";
title2.innerText = "محصولات ما";

        }  
         
        else if("EN" ===  localStorage.getItem('Language')){
    titleElement.textContent = "To order your favorite carpet, feel free to contact us!";
    mapElement.textContent = "Map";
    Array.from(detailesItem).forEach(element => {
        const h1 = element.querySelector('h5');
        if (h1) { // بررسی وجود h5 در عنصر
            h1.textContent = "Haj Khalili";
            h1.insertAdjacentText('afterend', ' Carpet');
        }
    });
    
btnBack.innerText = "Back";
title2.innerText = "Our Products";
        }
       
        else if("AB" ===  localStorage.getItem('Language')){
            titleElement.textContent = "اتصل بنا لشراء وطلب السجاد المفضل لديك";
            mapElement.textContent = "خريطة";
           Array.from(detailesItem).forEach(element => {
                const h1 = element.querySelector('h5');
                h1.textContent = "حاج خلیلی";
                h1.insertAdjacentText('afterend', ' سجاد');
            });
          
            btnBack.innerText = "العودة إلى الصفحة السابقة";
            title2.innerText = "منتجاتنا";
                }

});
