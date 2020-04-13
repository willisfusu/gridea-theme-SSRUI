// up-to-top
window.onscroll = function() {
   var btn = document.getElementsByClassName("turn-up")[0];
   var scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
   if (scroll >= window.innerHeight / 2) {
      btn.classList.add("active");
   } else {
      btn.classList.remove("active");
   }
};
//    highlight code
Prism.highlightAll()
    // toc setting
var mainNavLinks=document.querySelectorAll(".markdownIt-TOC a");
var toccard=document.getElementById('toc-card');
var tagcard=document.getElementById('tag-card');
if (tagcard){
   var y=tagcard.offsetHeight;
}
window.addEventListener("scroll", event => {

   var h=tagcard.offsetHeight;
   var fromTop = window.scrollY;
   mainNavLinks.forEach((link, index) => {
      var section = document.getElementById(decodeURI(link.hash).substring(1));
      var nextSection = null;
      if (mainNavLinks[index + 1]) {
            nextSection = document.getElementById(decodeURI(mainNavLinks[index + 1].hash).substring(1));
        }
      if (section.offsetTop <= fromTop) {
         if (nextSection) {
            if (nextSection.offsetTop > fromTop) {
               link.classList.add("current");
            } else {
               link.classList.remove("current");
            }
         } else {
            link.classList.add("current");
         }
      } else {
         link.classList.remove("current");
      }
   });
   if (toccard.offsetTop<= fromTop){
      toccard.classList.add('toc-fixed');
      toccard.style.top=y+60+'px';
   }else{
      toccard.classList.remove('toc-fixed');
      toccard.style.top='';
   }
//    there will be bug, when scroll down, the toc will dispear and appear at the position as defined in css.
//            but, if the position defined in css is larger than the div actual positon, the new div will disappear again.
//            another bug is the div size changed when scroll down.
});
// website operation time recoder at bottom
function show_date_time() {
   window.setTimeout("show_date_time()", 1e3);
   var BirthDay = new Date("2020-01-01"),
       today = new Date,
       timeold = today.getTime() - BirthDay.getTime(),
       msPerDay = 864e5,
       e_daysold = timeold / msPerDay,
       daysold = Math.floor(e_daysold),
       e_hrsold = 24 * (e_daysold - daysold),
       hrsold = Math.floor(e_hrsold),
       e_minsold = 60 * (e_hrsold - hrsold),
       minsold = Math.floor(60 * (e_hrsold - hrsold)),
       seconds = Math.floor(60 * (e_minsold - minsold));
      span_dt_dt.innerHTML = "博客已悄悄运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
show_date_time();
// read-progress
let readprogress=document.getElementById('read-progress')
readprogress.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100+'%';
window.addEventListener("scroll", function(){
   readprogress.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100+'%';
});
// dark-mode
document.addEventListener('DOMContentLoaded', () => {
   let themeToggle = document.getElementById("dark-mode");
   let themebody = document.body;
   let themedark=localStorage.getItem('dark');
      if (themedark=="on") {
         themebody.setAttribute("dark", "on");
      } else {
         themebody.removeAttribute("dark", "on");
      }
   themeToggle.addEventListener('click', function () {
      let themedark=localStorage.getItem('dark');
      if (themedark=="on") {
         themebody.removeAttribute("dark");
         localStorage.removeItem("dark")
      } else {
         themebody.setAttribute("dark", "on");
         localStorage.setItem("dark","on")
      }
   });
});