function getSystemTheme() {
	return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function getCurrentTheme() {
	return localStorage.getItem('theme') || getSystemTheme();
}

function applyTheme(theme) {
	const root = document.documentElement;

	if (theme === 'dark') {
		root.style.setProperty('--bg-primary', '#1a1d23');
		root.style.setProperty('--bg-secondary', '#252a33');
		root.style.setProperty('--bg-tertiary', '#2d3440');
		root.style.setProperty('--text-primary', '#e9ecef');
		root.style.setProperty('--text-secondary', '#adb5bd');
		root.style.setProperty('--border-color', '#495057');
		root.style.setProperty('--hover-color', '#4dabf7');
		root.style.setProperty('--link-color', '#4dabf7');
		root.style.setProperty('--link-hover', '#3b8dd6');
		root.style.setProperty('--link-visited', '#748ffc');
	} else {
		root.style.setProperty('--bg-primary', '#f8f9fa');
		root.style.setProperty('--bg-secondary', '#e9ecef');
		root.style.setProperty('--bg-tertiary', '#dee2e6');
		root.style.setProperty('--text-primary', '#212529');
		root.style.setProperty('--text-secondary', '#6c757d');
		root.style.setProperty('--border-color', '#ced4da');
		root.style.setProperty('--hover-color', '#0d6efd');
		root.style.setProperty('--link-color', '#0d6efd');
		root.style.setProperty('--link-hover', '#0b5ed7');
		root.style.setProperty('--link-visited', '#5c7cfa');
	}
}

function updatePositionToTheme() {
	let theme = getCurrentTheme();
	applyTheme(theme);

	let themeSelector = document.getElementById('themeSelector');
	themeSelector.style.transform = (theme == 'dark') ? 'translateX(0px)' : 'translateX(50px)';
}

function switchTheme() {
	localStorage.setItem('theme', (getCurrentTheme() == 'dark') ? 'light' : 'dark');
	updatePositionToTheme();
}
updatePositionToTheme();

const themeBox = document.getElementsByClassName('themeBox')[0];
themeBox.style.visibility = 'visible';