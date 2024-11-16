let sidebar_two = document.getElementById('sidebar_two');
let box = document.getElementById('box');
let sidebar = document.getElementById('sidebar');
let fashion = document.getElementById('two');
let setting = document.getElementById('three');
let second_box=document.getElementById('another_box');

fashion.addEventListener('click', () => {
   sidebar.style.cursor = "pointer";
   sidebar.style.visibility = 'visible';
   sidebar_two.style.visibility = 'hidden';
   const screenWidth = window.innerWidth;
   if (sidebar.style.transform == "translateX(-28rem)") {
      sidebar.style.transform = "translateX(-80rem)";
      box.classList.remove('clicked');
      sidebar.classList.remove('clicked');
      if(screenWidth>=200 && screenWidth<=640){
         second_box.style.height='100%';
         second_box.style.display='flex';
         second_box.style.flexDirection='column';
         second_box.style.flexWrap='no-wrap';
         second_box.style.width='50svw';
         second_box.style.justifyContent='center';
         second_box.style.alignItems='center';
      }
   } else {
      sidebar.style.transform = "translateX(-28rem)";
      box.classList.add('clicked');
      sidebar.classList.add('clicked');
      if(screenWidth>=200 && screenWidth<=640){
         second_box.style.display='flex';
         second_box.style.flexDirection='row';
         second_box.style.flexWrap='wrap';
         second_box.style.width='100svw';
         second_box.style.height='50%';
         second_box.style.transition='display 1s';
      }
   }
})
setting.addEventListener('click', () => {
   sidebar_two.style.cursor = "pointer";
   sidebar.style.visibility = 'hidden';
   sidebar_two.style.visibility = 'visible';
   const screenWidth = window.innerWidth;
   if (sidebar_two.style.transform == "translateX(-28rem)") {
      sidebar_two.style.transform = "translateX(-80rem)";
      box.classList.remove('clicked');
      sidebar_two.classList.remove('clicked');
      if(screenWidth>=200 && screenWidth<=640){
         second_box.style.height='100%';
         second_box.style.display='flex';
         second_box.style.flexDirection='column';
         second_box.style.flexWrap='no-wrap';
         second_box.style.width='50svw';
         second_box.style.justifyContent='center';
         second_box.style.alignItems='center';
      }
   }
   else {
      sidebar_two.style.transform = "translateX(-28rem)";
      box.classList.add('clicked');
      sidebar_two.classList.add('clicked');
      if(screenWidth>=200 && screenWidth<=640){
         second_box.style.display='flex';
         second_box.style.flexDirection='row';
         second_box.style.flexWrap='wrap';
         second_box.style.width='100svw';
         second_box.style.height='50%';
         second_box.style.transition='display 1s';
      }
   }
})
