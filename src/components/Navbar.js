export default function Navbar() {
    return `
        <header class="nav-section">
            <div class="nav-header">
                <div class="user-profile">
                    <img src="src/assets/IMG-20251124-WA0024.jpg" alt="User Image" class="user-image">
                    <div class="user-info">
                        <h1 class="user-name">Kingsley Peculiar</h1>
                        <p class="user-email">kingsleypeculiar04@gmail.com</p>
                    </div>
                </div>
                
                <div class="todo-task-search-form">
                    <input type="text" class="task-search-field" placeholder="Search">
                    <button><img src="src/assets/search-light.png" alt="Searc Button" class="task-search-btn"></button>
                </div>
            </div>

            <div class="nav-menu">
                <a href="/" class="nav-item">
                    <img src="src/assets/sunshine-lighter-blue.png" alt="My Day">
                    <p>My Day</p>
                </a>
                <a href="/important" class="nav-item">
                    <img src="src/assets/star-purple.png" alt="Important">
                    <p>Important</p>
                </a>
                <a href="/planned" class="nav-item">
                    <img src="src/assets/hamburger-neon-blue-column.png" alt="Planned">
                    <p>Planned</p>
                </a>
                <a href="/assigned" class="nav-item">
                    <img src="src/assets/user-cyan.png" alt="Assigned">
                    <p>Assigned to me</p>
                </a>
                <a href="/tasks" class="nav-item">
                    <img src="src/assets/pic5.png" alt="Tasks">
                    <p>Tasks</p>
                </a>                                                
            </div>
        </header>
    `;
}
