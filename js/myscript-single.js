
document.addEventListener("DOMContentLoaded", function() {



   
    const titleSite= document.getElementsByTagName('title')[0];
    const mainTitle= document.getElementById('main-title');
    const mainContent= document.getElementById('main-content');
    const mapElement = document.getElementById("address-map");
    const btnBack= document.getElementById('btn-Back');


        
        if("FA" ===  localStorage.getItem('Language')) {
            titleSite.textContent = "فرش حاج خلیلی";
            mainTitle.innerText = "فرش حاج خلیلی";
            mainContent.textContent = "برای خرید و سفارس فرش مورد علاقه خودتان با ما در تماس باشید";
            mapElement.textContent = "نقشه";       
            btnBack.innerText = "بازگشت";

        }  
         
        else if("EN" ===  localStorage.getItem('Language')){
            titleSite.textContent = "Haj Khalili Carpet";
            mainTitle.innerText = "Haj Khalili Carpet";
            mainContent.textContent = "To order your favorite carpet, feel free to contact us!";
            mapElement.textContent = "Map";
            btnBack.innerText = "Back";

        }
       
        else if("AB" ===  localStorage.getItem('Language')){
            titleSite.textContent = "سجاد حاج خلیلی";
            mainTitle.innerText = "سجاد حاج خلیلی";
            mainContent.textContent = "اتصل بنا لشراء وطلب السجاد المفضل لديك";
            mapElement.textContent = "خريطة";
            btnBack.innerText = "العودة إلى الصفحة السابقة";

                }

});
function Redirection(Language) {
  debugger
    localStorage.setItem('Language', langues);
      let langues= localStorage.getItem('Language')


  if(langues !=null){
     if ("AB" ===  langues) {
            window.location.href = "index-AB.html";
        } else if ("EN" ===  langues) {
            window.location.href = "index-en.html";
        } else {
            window.location.href = "index.html";
        }
  }else{ window.location.href = "index.html";}
       
   
}
var redirectAB = document.getElementById('AB');
redirectAB.addEventListener('click', () => Redirection('AB'));

var redirectEN = document.getElementById('EN');
redirectEN.addEventListener('click', () => Redirection('EN'));

var redirectFA = document.getElementById('FA');
redirectFA.addEventListener('click', () => Redirection('FA'));


