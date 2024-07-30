window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function goToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }