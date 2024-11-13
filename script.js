let sidebar_two = document.getElementById('sidebar_two');
let box = document.getElementById('box');
let sidebar = document.getElementById('sidebar');
let fashion = document.getElementById('two');
let setting = document.getElementById('three');

fashion.addEventListener('click', () => {
   sidebar.style.cursor = "pointer";
   sidebar.style.visibility = 'visible';
   sidebar_two.style.visibility = 'hidden';
   if (sidebar.style.transform == "translateX(-28rem)") {
      sidebar.style.transform = "translateX(-80rem)";
      box.classList.remove('clicked');
      sidebar.classList.remove('clicked');
   } else {
      sidebar.style.transform = "translateX(-28rem)";
      box.classList.add('clicked');
      sidebar.classList.add('clicked');
   }
})
setting.addEventListener('click', () => {
   sidebar_two.style.cursor = "pointer";
   sidebar.style.visibility = 'hidden';
   sidebar_two.style.visibility = 'visible';
   if (sidebar_two.style.transform == "translateX(-28rem)") {
      sidebar_two.style.transform = "translateX(-80rem)";
      box.classList.remove('clicked');
      sidebar_two.classList.remove('clicked');
   }
   else {
      sidebar_two.style.transform = "translateX(-28rem)";
      box.classList.add('clicked');
      sidebar_two.classList.add('clicked');
   }
})