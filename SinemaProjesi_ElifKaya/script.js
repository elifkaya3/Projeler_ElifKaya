// let slideIndex=0;
// let allSlides=$(".slide").toArray();
// let allDots=$(".dot").toArray();
// console.log(allSlides);

// $(".nextSlide").click(function(){
//     if(allSlides.length==slideIndex+1){
//         slideIndex=-1;
//     }
//     showSlide(++slideIndex);
// })
// $(".prevSlide").click(function(){
//     if(slideIndex==0){
//         slideIndex=allSlides.length;
//     }
//     showSlide(--slideIndex);
// })

// function prevSlide(){
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }
// function showSlide(n){
//     for(let i=0;i<allSlides.length;i++){
//         allSlides[i].style.display="none";
//         allDots[i].classList.remove("active");
//         // $(".slide").eq("i").hide();
//     }
//      allSlides[n].style.display="block";
//      allDots[n].classList.add("active");

//     // $(".slide").eq(n).fadeTo(2000,0.8);
// }
// $(".dot").click(function(){
//     slideIndex=$(this).slideIndex();
//     showSlide(slideIndex);
//     // $(".dot").eq(i).css("background-color","blue");

//     // $(".dot").add("background-color","blue");
// })
// showSlide(slideIndex);