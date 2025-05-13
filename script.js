// script.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginSection = document.getElementById('login-section');
  const profileSection = document.getElementById('profile-section');
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const loginError = document.getElementById('login-error');
  const profileInfo = document.getElementById('profile-info');
  const categoryList = document.getElementById('category-list');
  const iconArrow = profileInfo.querySelector('.icon-arrow');
  const logoutBtn = document.getElementById('btn-logout');

  // Mock registered user data
  const mockUser = {
    email: 'cliente@domustech.com',
    password: 'senha123',
    name: 'João Silva',
  };

  // Reset error message
  function resetError() {
    loginError.textContent = '';
  }

  // Show error message
  function showError(message) {
    loginError.textContent = message;
  }

  // Show profile with user data
  function showProfile(user) {
    profileName.textContent = user.name;
    profileEmail.textContent = user.email;
    profileSection.classList.remove('hidden');
    loginSection.classList.add('hidden');
    categoryList.classList.add('hidden');
    iconArrow.classList.remove('expanded');
    profileInfo.setAttribute('aria-expanded', 'false');
  }

  // Toggle categories visibility
  function toggleCategories() {
    const isHidden = categoryList.classList.contains('hidden');
    if (isHidden) {
      categoryList.classList.remove('hidden');
      iconArrow.classList.add('expanded');
      profileInfo.setAttribute('aria-expanded', 'true');
    } else {
      categoryList.classList.add('hidden');
      iconArrow.classList.remove('expanded');
      profileInfo.setAttribute('aria-expanded', 'false');
    }
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetError();

    const emailInput = loginForm.email.value.trim();
    const passwordInput = loginForm.password.value;

    // Simple validation and mock authentication
    if (emailInput === '' || passwordInput === '') {
      showError('Por favor, preencha todos os campos.');
      return;
    }

    if (
      emailInput.toLowerCase() === mockUser.email.toLowerCase() &&
      passwordInput === mockUser.password
    ) {
      // Successful login
      showProfile(mockUser);
      loginForm.reset();
    } else {
      showError('Email ou senha incorretos.');
    }
  });

  profileInfo.addEventListener('click', toggleCategories);
  profileInfo.addEventListener('keydown', (e) => {
    // Allow toggle categories on Enter or Space keys
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCategories();
    }
  });

  logoutBtn.addEventListener('click', () => {
    profileSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    loginForm.reset();
    resetError();
  });
});
