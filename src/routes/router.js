import HomeLayout from "../layouts/HomeLayout.js";

const routes = {};

export function registerRoute(path, view) {
    routes[path] = view;
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

export function router() {
    const path = location.pathname;
    const view = routes[path] || routes["/"]; // fallback to default

    const content = view();                  // render page
    const layout = HomeLayout(content);      // wrap in layout

    document.getElementById("root").innerHTML = layout;
}
