/**
 * IT NEXUS - Frontend Client Logic & Dummy Authentication System
 * Enables gating of full articles for registered/logged-in users.
 */

// Key constants for localStorage
const STORAGE_KEY_USER = "itNexusUser";
const STORAGE_KEY_AUTH = "itNexusIsLoggedIn";

// Default Demo User for Instant One-Click Testing
const DEMO_USER = {
    username: "Alex_TechExplorer",
    email: "alex@futureit.org",
    password: "password123",
    role: "Tech Enthusiast",
    joinedDate: "Today",
    interest: "Future of IT & Society"
};

// ==========================================================================
// 1. AUTHENTICATION & USER HELPERS
// ==========================================================================

function getCurrentUser() {
    try {
        const data = localStorage.getItem(STORAGE_KEY_USER);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error("Error reading user data", e);
        return null;
    }
}

function isUserLoggedIn() {
    return localStorage.getItem(STORAGE_KEY_AUTH) === "true" && getCurrentUser() !== null;
}

function saveUser(user) {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    localStorage.setItem(STORAGE_KEY_AUTH, "true");
}

function performLogin(email, password) {
    const user = getCurrentUser();
    
    // Support registered user credentials OR default demo credentials
    if (user && user.email.toLowerCase() === email.toLowerCase() && user.password === password) {
        localStorage.setItem(STORAGE_KEY_AUTH, "true");
        return { success: true, user };
    } else if (email.toLowerCase() === DEMO_USER.email.toLowerCase() && password === DEMO_USER.password) {
        saveUser(DEMO_USER);
        return { success: true, user: DEMO_USER };
    }
    
    // If no user exists yet in localStorage, give friendly error
    if (!user) {
        return { success: false, message: "No account found with this email. Please register first or use 1-Click Demo Login!" };
    }
    
    return { success: false, message: "Invalid email or password. Please try again." };
}

function performLogout() {
    localStorage.setItem(STORAGE_KEY_AUTH, "false");
    window.location.reload();
}

function quickDemoRegister() {
    saveUser(DEMO_USER);
    // Reload or unlock content smoothly
    if (document.getElementById("lockedArticleGate")) {
        unlockArticleContent();
    } else {
        window.location.href = "article.html";
    }
}

// ==========================================================================
// 2. NAVBAR DYNAMIC UI UPDATE
// ==========================================================================

function updateNavbarUI() {
    const navAuthContainer = document.getElementById("navAuthContainer");
    if (!navAuthContainer) return;

    const loggedIn = isUserLoggedIn();
    const user = getCurrentUser();

    if (loggedIn && user) {
        const initials = user.username ? user.username.substring(0, 2).toUpperCase() : "U";
        navAuthContainer.innerHTML = `
            <div class="user-status-pill">
                <div class="user-avatar">${initials}</div>
                <a href="profile.html" style="font-weight: 600; color: #fff;">${user.username}</a>
                <button class="btn-logout" id="navLogoutBtn" title="Logout">Logout</button>
            </div>
        `;

        const logoutBtn = document.getElementById("navLogoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                performLogout();
            });
        }
    } else {
        navAuthContainer.innerHTML = `
            <a href="register.html" class="nav-btn" style="border: 1px solid var(--border-subtle); color: var(--text-primary);">Register</a>
            <a href="login.html" class="btn btn-sm btn-primary">Login</a>
        `;
    }
}

// ==========================================================================
// 3. ARTICLE GATING (MAIN CONTENT LOCK/UNLOCK)
// ==========================================================================

function setupArticleGating() {
    const lockedGate = document.getElementById("lockedArticleGate");
    const protectedContent = document.getElementById("protectedArticleContent");

    if (!lockedGate || !protectedContent) return;

    if (isUserLoggedIn()) {
        unlockArticleContent();
    } else {
        lockArticleContent();
    }
}

function lockArticleContent() {
    const lockedGate = document.getElementById("lockedArticleGate");
    const protectedContent = document.getElementById("protectedArticleContent");

    if (lockedGate) lockedGate.style.display = "block";
    if (protectedContent) {
        protectedContent.classList.add("locked-blur-preview");
    }
}

function unlockArticleContent() {
    const lockedGate = document.getElementById("lockedArticleGate");
    const protectedContent = document.getElementById("protectedArticleContent");

    if (lockedGate) lockedGate.style.display = "none";
    if (protectedContent) {
        protectedContent.classList.remove("locked-blur-preview");
    }

    // Refresh navbar to reflect logged-in status
    updateNavbarUI();
}

// ==========================================================================
// 4. READING PROGRESS BAR
// ==========================================================================

function setupReadingProgressBar() {
    const progressBar = document.getElementById("readingProgressBar");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = progress + "%";
        }
    });
}

// ==========================================================================
// 5. REGISTRATION FORM LOGIC
// ==========================================================================

function setupRegisterForm() {
    const registerForm = document.getElementById("registerForm");
    const quickRegisterBtn = document.getElementById("quickDemoRegisterBtn");
    const messageEl = document.getElementById("registerMessage");

    if (quickRegisterBtn) {
        quickRegisterBtn.addEventListener("click", function () {
            saveUser(DEMO_USER);
            if (messageEl) {
                messageEl.className = "form-message success";
                messageEl.textContent = "✅ Demo account created! Redirecting to full articles...";
            }
            setTimeout(() => {
                window.location.href = "article.html";
            }, 800);
        });
    }

    if (!registerForm) return;

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password.length < 4) {
            if (messageEl) {
                messageEl.className = "form-message error";
                messageEl.textContent = "❌ Password must be at least 4 characters.";
            }
            return;
        }

        if (password !== confirmPassword) {
            if (messageEl) {
                messageEl.className = "form-message error";
                messageEl.textContent = "❌ Passwords do not match.";
            }
            return;
        }

        const newUser = {
            username: username,
            email: email,
            password: password,
            role: "Reader & Member",
            joinedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            interest: "Technology, AI & Society"
        };

        saveUser(newUser);

        if (messageEl) {
            messageEl.className = "form-message success";
            messageEl.textContent = "🎉 Registration successful! Unlocking articles now...";
        }

        setTimeout(() => {
            window.location.href = "article.html";
        }, 1000);
    });
}

// ==========================================================================
// 6. LOGIN FORM LOGIC
// ==========================================================================

function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const quickLoginBtn = document.getElementById("quickDemoLoginBtn");
    const messageEl = document.getElementById("loginMessage");

    if (quickLoginBtn) {
        quickLoginBtn.addEventListener("click", function () {
            saveUser(DEMO_USER);
            if (messageEl) {
                messageEl.className = "form-message success";
                messageEl.textContent = "✅ Demo Login successful! Redirecting to articles...";
            }
            setTimeout(() => {
                window.location.href = "article.html";
            }, 800);
        });
    }

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const result = performLogin(email, password);

        if (result.success) {
            if (messageEl) {
                messageEl.className = "form-message success";
                messageEl.textContent = "✅ Login successful! Redirecting to full content...";
            }
            setTimeout(() => {
                window.location.href = "article.html";
            }, 900);
        } else {
            if (messageEl) {
                messageEl.className = "form-message error";
                messageEl.textContent = result.message;
            }
        }
    });
}

// ==========================================================================
// 7. PROFILE PAGE LOGIC
// ==========================================================================

function setupProfilePage() {
    const profileUsernameEl = document.getElementById("profileUsername");
    if (!profileUsernameEl) return;

    const user = getCurrentUser();

    if (!user || !isUserLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    const setField = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val || "-";
    };

    setField("profileUsername", user.username);
    setField("profileWelcomeName", user.username);
    setField("profileEmail", user.email);
    setField("profileRole", user.role || "Member");
    setField("profileJoined", user.joinedDate || "Active");
    setField("profileInterest", user.interest || "Future Tech & Social Impact");

    const avatarEl = document.getElementById("profileBigAvatar");
    if (avatarEl && user.username) {
        avatarEl.textContent = user.username.substring(0, 2).toUpperCase();
    }

    const logoutBtn = document.getElementById("profileLogoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            performLogout();
        });
    }
}

// ==========================================================================
// 8. HOME PAGE BUTTONS & GATING AWARENESS
// ==========================================================================

function setupHomePage() {
    const getStartedBtn = document.getElementById("homeGetStartedBtn");
    const readArticlesBtn = document.getElementById("homeReadArticlesBtn");

    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (isUserLoggedIn()) {
                window.location.href = "article.html";
            } else {
                window.location.href = "register.html";
            }
        });
    }

    if (readArticlesBtn) {
        readArticlesBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "article.html";
        });
    }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    updateNavbarUI();
    setupArticleGating();
    setupReadingProgressBar();
    setupRegisterForm();
    setupLoginForm();
    setupProfilePage();
    setupHomePage();

    // Listen for click on any inline quick unlock buttons
    const inlineQuickUnlockBtn = document.getElementById("gateQuickUnlockBtn");
    if (inlineQuickUnlockBtn) {
        inlineQuickUnlockBtn.addEventListener("click", function () {
            quickDemoRegister();
        });
    }
});