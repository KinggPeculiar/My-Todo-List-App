import { registerRoute, navigateTo, router } from "./src/routes/router.js";
import MyDay from "./src/pages/Home.js";

registerRoute("/", MyDay);

document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

window.addEventListener("popstate", router);

router();