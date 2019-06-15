    function openExample(evt, languageInit, languageStore) {
        var i, examples, tablinks;
        examples = document.getElementsByClassName("examples");
        for (i = 0; i < examples.length; i++) {
            examples[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(languageInit).style.display = "block";
        document.getElementById(languageStore).style.display = "block";
        evt.currentTarget.className += " active";
    }