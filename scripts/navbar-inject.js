
    import {navbar} from "../components/navbar.js";
    let navbar_division = document.getElementById("navbar_division");
    navbar_division.innerHTML = navbar();
    import footer from "../components/footer.js";
    let footer_division = document.getElementById("footer_division");
    footer_division.innerHTML = footer();
    var user=document.getElementById("user-info");
    user.innerHTML=localStorage.getItem("user") || "SignUp / Login";
