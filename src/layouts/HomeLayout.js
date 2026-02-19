import Navbar from "../components/Navbar.js";

export default function HomeLayout(content) {
    return `
    <div>
        ${Navbar()}
        <main class="main-content">
            ${content}
        </main>
    </div>
    `;
}