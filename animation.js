

   $(function(){
    $(".includedContent").load("menu.html"); 
  });
  
  $(document).ready(() => {
    $('.xIcon').hide();
   
$('burger').on('click', () => {
      $('.xIcon').show();
    })
    });

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
  }

  function myNavFunction1() {
    var x = document.getElementById("myNav1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function myNavFunction2() {
    var x = document.getElementById("myNav2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function navBar() {
        var x = document.getElementById("navBar"); 
    if (x.style.display === "block") {
      x.style.display = "none";
    
    } else {
      x.style.display = "block";
      
    }
  }

 
  function myFunction() {
    document.getElementsByTagName("navBar").style.backgroundColor = "gray";
  }
 
    
    
    
    
    