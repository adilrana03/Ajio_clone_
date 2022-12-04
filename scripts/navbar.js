let steone = setTimeout(() => {
        // to display the flying container on webpage and make background mask
        let mask = document.getElementById("layer_mask");
        let flycontainer = document.getElementById("flying_container");
        function displayNavContainer() {
          mask.style.visibility = "visible";
          flycontainer.style.visibility = "visible";
          mask.style.animationName = "animate1";
          mask.style.animationDuration = "0.6s";
        }
        function hideNavContainer() {
          mask.style.visibility = "hidden";
          flycontainer.style.visibility = "hidden";
          mask.style.animationName = "";
          mask.style.animationDuration = "";
        }
        let menu_options = document.getElementsByClassName("one");
        for (let i = 0; i < menu_options.length; i++) {
          menu_options[i].addEventListener("mouseenter", displayNavContainer);
          menu_options[i].addEventListener("mouseleave", hideNavContainer);
        }
        flycontainer.addEventListener("mouseenter", displayNavContainer);
        flycontainer.addEventListener("mouseleave", hideNavContainer);
      
        // to display the search results by default static
        let search_list = document.getElementById("search_list");
        let search = document.getElementById("search_box");
      
        function display_searchList() {
          search_list.style.visibility = "visible";
        }
        function hide_searchList() {
          search_list.style.visibility = "hidden";
        }
        search.addEventListener("click", display_searchList);
        search_list.addEventListener("mouseleave", hide_searchList);
      }, 100);