function changeMode() {
    var bodyContainer = document.body;
    bodyContainer.classList.toggle("dark-mode-body");
    var waveContainer = document.getElementById("wave");
    waveContainer.classList.toggle("dark-mode-wave");
    var navbarContainer = document.getElementById("navbarContainer");
    navbarContainer.classList.toggle("dark-mode-navbar");
    var card = document.getElementById("product-card");
    card.classList.toggle("dark-product-card");
    var card2 = document.getElementById("product-card2");
    card2.classList.toggle("dark-product-card");
    var card3 = document.getElementById("product-card3");
    card3.classList.toggle("dark-product-card");
    var cardDesc = document.getElementById("card-desc2");
    cardDesc.classList.toggle("dark-product-desc");
    var activitiesContainer = document.getElementById("activities-container");
    activitiesContainer.classList.toggle("dark-product-card");
    var titleContainer = document.getElementById("titleContainer");
    titleContainer.classList.toggle("dark-product-desc");
    var titleContainer2 = document.getElementById("titleContainer2");
    titleContainer2.classList.toggle("dark-product-desc");
    var activitiesContainer2 = document.getElementById("activities-container2");
    activitiesContainer2.classList.toggle("dark-product-card");
    var titleContainer3 = document.getElementById("titleContainer3");
    titleContainer3.classList.toggle("dark-product-desc");
}

function changeHeaderTheme (){
    var gradient = document.getElementById("header");
    var num1 = generateRandomHex();
    var num2 = generateRandomHex();
    // console.log(num1, num2);
    document.documentElement.style.setProperty(`--gradient1`, `#${num1}`);
    document.documentElement.style.setProperty(`--gradient2`, `#${num2}`);
    gradient.classList.toggle("change-gradient-header");
}

generateRandomHex = () => {
    let number = '';
    for (let i = 0; i < 6; ++i) {
        number += (Math.floor(Math.random() * 16)).toString(16);
    }
    return number;
}

function menuBar() {
    document.getElementById().innerHTML;

}


/* Sina */ 

// let circle = document.querySelector(".color-option");

// circle.addEventListener("click", (e) => {
//   let target = e.target;
//   if (target.classList.contains("circle")) {
//     circle.querySelector(".active").classList.remove("active");
//     target.classList.add("active");
//     document.querySelector(".main-images .active").classList.remove("active");
//     document
//       .querySelector(`.main-images .${target.id}`)
//       .classList.add("active");
//   }
// });


var itemsId;
var radianSectionDeg;
var radiusLength;

document.addEventListener("DOMContentLoaded", function(event) {
    
  var htmlCollection = document.getElementsByClassName("item");
  //getting elements by class name into an HTMLCollection
  
     itemsId = Array.from(htmlCollection);
    console.log(itemsId);
  //turning the HTMLcollection into an array for easier manipulation of the elements
  
  
  
  
    var sectionDeg = 360/itemsId.length;
  //sectioning the (imaginary) circle into a number of section equalling the number of items
  //it can be used on more elements
  
     radianSectionDeg = sectionDeg*Math.PI*2/360;
  //transforming from degrees into radians
  
     radiusLength = 250;
  //the distance between the center of the circle to the element
  //edit this number to increase/decrease that distance
  
    for(var i=0; i<itemsId.length; i++){
      itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
      itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
    }
  //setting the top and left positions of each elemenent based on the following formula:
  //(x, y) = (r * cos(θ), r * sin(θ)) like this:
  //x = (r * cos(θ) => left
  //y = r * sin(θ) => top
  //1.5708 is a radian used put the first element on top - basically 90deg
  
 
  //function used to set the new position of the elements
  //we're moving the elements by changing their position in the array
  
  console.log("jjjjj");
});

 
 var lastID = 1;
 var id = lastID;
function turnRight(){
  var holder = itemsId.pop();
  id = holder.className[9];
  if(lastID == holder.className[9]) {
    if(id<5) {
      id = +holder.className[9] + 1;
    } else {
      id = 1;
    }
  }
  lastID = id;
  var activitiesText = document.getElementById("activities-text");
  activitiesText.innerHTML = 'Activity ' + id;
  var activitiesDescriptor = document.getElementById("activities-descriptor");
  activitiesDescriptor.innerHTML = 'Description ' + id;
  if(id == 1) {
    activitiesDescriptor.innerHTML = 'Description ' + id + " " + "ایران با نام رسمی جمهوری اسلامی ایران، کشوری در آسیای غربی است. این کشور با ۱٬۶۴۸٬۱۹۵ کیلومتر مربع پهناوری، دومین کشور بزرگ خاورمیانه است. ایران از شمال غرب با ارمنستان و آذربایجان، از شمال با دریای خزر، از شمال شرق با ترکمنستان، از شرق با افغانستان و پاکستان، از جنوب با خلیج فارس و دریای عمان و در غرب با عراق و ترکیه هم‌مرز است. این کشور خاورمیانه‌ای، جایگاه استراتژیکی در منطقهٔ خلیج فارس دارد و تنگهٔ هرمز در جنوب آن، مسیری حیاتی برای انتقال نفت خام است. جمعیت کل استان‌های ایران از ۸۳٫۵ میلیون تن می‌گذرد و تهران، پایتخت و پرجمعیت‌ترین شهر این کشور است. ایران، جامعه‌ای با قومیت و فرهنگ‌های گوناگون دارد و گروه قومی و فرهنگی غالب این کشور، برآمده از فارسی‌زبانان آن است. در کنار آنان، قومیت‌های دیگری، همانند اقوام پرجمعیت آذری و کُرد وجود دارند. قانون اساسی جمهوری اسلامی ایران، اسلام شیعه را دین رسمی ایران اعلام کرده‌است و اکثریت مردم این کشور، پیروان همین مذهب هستند. زبان رسمی این کشور نیز فارسی است.. ایران با نام رسمی جمهوری اسلامی ایران، کشوری در آسیای غربی است. این کشور با ۱٬۶۴۸٬۱۹۵ کیلومتر مربع پهناوری، دومین کشور بزرگ خاورمیانه است. ایران از شمال غرب با ارمنستان و آذربایجان، از شمال با دریای خزر، از شمال شرق با ترکمنستان، از شرق با افغانستان و پاکستان، از جنوب با خلیج فارس و دریای عمان و در غرب با عراق و ترکیه هم‌مرز است. این کشور خاورمیانه‌ای، جایگاه استراتژیکی در منطقهٔ خلیج فارس دارد و تنگهٔ هرمز در جنوب آن، مسیری حیاتی برای انتقال نفت خام است. جمعیت کل استان‌های ایران از ۸۳٫۵ میلیون تن می‌گذرد و تهران، پایتخت و پرجمعیت‌ترین شهر این کشور است. ایران، جامعه‌ای با قومیت و فرهنگ‌های گوناگون دارد و گروه قومی و فرهنگی غالب این کشور، برآمده از فارسی‌زبانان آن است. در کنار آنان، قومیت‌های دیگری، همانند اقوام پرجمعیت آذری و کُرد وجود دارند. قانون اساسی جمهوری اسلامی ایران، اسلام شیعه را دین رسمی ایران اعلام کرده‌است و اکثریت مردم این کشور، پیروان همین مذهب هستند. زبان رسمی این کشور نیز فارسی است.";
    
  }
  // console.log(holder.className[9]);
  itemsId.unshift(holder);
  makeATurn();
}

function turnLeft(){
  var holder = itemsId.shift();
  id = holder.className[9];
  if(lastID == holder.className[9]) {
    if(id>1) {
      id = +holder.className[9] - 1;
    } else {
      id = 5;
    }
  }
  lastID = id;
  var activitiesText = document.getElementById("activities-text");
  activitiesText.innerHTML = 'Activity ' + id;
  var activitiesDescriptor = document.getElementById("activities-descriptor");
  activitiesDescriptor.innerHTML = 'Description ' + id;
  if(id == 1) {
    activitiesDescriptor.innerHTML = 'Description ' + id + " " + "ایران با نام رسمی جمهوری اسلامی ایران، کشوری در آسیای غربی است. این کشور با ۱٬۶۴۸٬۱۹۵ کیلومتر مربع پهناوری، دومین کشور بزرگ خاورمیانه است. ایران از شمال غرب با ارمنستان و آذربایجان، از شمال با دریای خزر، از شمال شرق با ترکمنستان، از شرق با افغانستان و پاکستان، از جنوب با خلیج فارس و دریای عمان و در غرب با عراق و ترکیه هم‌مرز است. این کشور خاورمیانه‌ای، جایگاه استراتژیکی در منطقهٔ خلیج فارس دارد و تنگهٔ هرمز در جنوب آن، مسیری حیاتی برای انتقال نفت خام است. جمعیت کل استان‌های ایران از ۸۳٫۵ میلیون تن می‌گذرد و تهران، پایتخت و پرجمعیت‌ترین شهر این کشور است. ایران، جامعه‌ای با قومیت و فرهنگ‌های گوناگون دارد و گروه قومی و فرهنگی غالب این کشور، برآمده از فارسی‌زبانان آن است. در کنار آنان، قومیت‌های دیگری، همانند اقوام پرجمعیت آذری و کُرد وجود دارند. قانون اساسی جمهوری اسلامی ایران، اسلام شیعه را دین رسمی ایران اعلام کرده‌است و اکثریت مردم این کشور، پیروان همین مذهب هستند. زبان رسمی این کشور نیز فارسی است.. ایران با نام رسمی جمهوری اسلامی ایران، کشوری در آسیای غربی است. این کشور با ۱٬۶۴۸٬۱۹۵ کیلومتر مربع پهناوری، دومین کشور بزرگ خاورمیانه است. ایران از شمال غرب با ارمنستان و آذربایجان، از شمال با دریای خزر، از شمال شرق با ترکمنستان، از شرق با افغانستان و پاکستان، از جنوب با خلیج فارس و دریای عمان و در غرب با عراق و ترکیه هم‌مرز است. این کشور خاورمیانه‌ای، جایگاه استراتژیکی در منطقهٔ خلیج فارس دارد و تنگهٔ هرمز در جنوب آن، مسیری حیاتی برای انتقال نفت خام است. جمعیت کل استان‌های ایران از ۸۳٫۵ میلیون تن می‌گذرد و تهران، پایتخت و پرجمعیت‌ترین شهر این کشور است. ایران، جامعه‌ای با قومیت و فرهنگ‌های گوناگون دارد و گروه قومی و فرهنگی غالب این کشور، برآمده از فارسی‌زبانان آن است. در کنار آنان، قومیت‌های دیگری، همانند اقوام پرجمعیت آذری و کُرد وجود دارند. قانون اساسی جمهوری اسلامی ایران، اسلام شیعه را دین رسمی ایران اعلام کرده‌است و اکثریت مردم این کشور، پیروان همین مذهب هستند. زبان رسمی این کشور نیز فارسی است.";
    
  }
  itemsId.push(holder);
  makeATurn();
}

function makeATurn(){
  for(var i=0; i<itemsId.length; i++){
    itemsId[i].style.top = radiusLength*Math.sin(radianSectionDeg*i-1.5708)+'px';
    itemsId[i].style.left = radiusLength*Math.cos(radianSectionDeg*i-1.5708)+'px';
    }
}


// $('.carousel').on('slide',function(e){
//     var slideFrom = $(this).find('.active').index();
//     var slideTo = $(e.relatedTarget).index();
//     console.log(slideFrom+' => '+slideTo);
// });

document.getElementsByClassName('carousel').on('slide',function(e){
    var slideFrom = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
    console.log(slideFrom+' => '+slideTo);
});
