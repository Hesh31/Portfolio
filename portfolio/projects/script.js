// Funkcja do obliczania proporcji i wyświetlania wyników
function updateProportions() {
	const flourInput = document.getElementById("flour-input");
	const yeastInput = document.getElementById("yeast-input");
	const waterInput = document.getElementById("water-input");
	const yeastFlourRatio = 7 / 500; // Stosunek suchych drożdży do mąki (ustalony wcześniej)
	const waterFlourRatio = 325 / 500; // Stosunek ciepłej wody do mąki (ustalony wcześniej)

	const flour = flourInput.value;
	const yeast = (flour * yeastFlourRatio).toFixed(2); // Obliczanie ilości suchych drożdży
	const water = (flour * waterFlourRatio).toFixed(2); // Obliczanie ilości ciepłej wody

	const resultElement = document.getElementById("proportions-result");
	const yeastOutput = document.getElementById("yeast-output");
	const waterOutput = document.getElementById("water-output");
	const flourOutput = document.getElementById("flour-output");

	resultElement.innerText = `Proporcje: ${flour}g mąki : ${yeast}g suchych drożdży : ${water}ml ciepłej wody`;
	resultElement.innerText += `\nStosunek drożdży do mąki: 1:${(
		yeast / flour
	).toFixed(2)}`;
	resultElement.innerText += `\nStosunek wody do mąki: 1:${(
		water / flour
	).toFixed(2)}`;

	yeastInput.value = yeast;
	waterInput.value = water;

	yeastOutput.innerText = `${yeast}g`;
	waterOutput.innerText = `${water}ml`;
	flourOutput.innerText = `${flour}g`;
}

// Nasłuchuj zmian w suwakach dla mąki, suchych drożdży i ciepłej wody
const flourInput = document.getElementById("flour-input");
const yeastInput = document.getElementById("yeast-input");
const waterInput = document.getElementById("water-input");

flourInput.addEventListener("input", updateProportions);
yeastInput.addEventListener("input", () => updateProportions());
waterInput.addEventListener("input", () => updateProportions());

// Wywołanie funkcji raz na początku, aby obliczyć proporcje na podstawie domyślnych wartości mąki
updateProportions();

// Funkcja do obsługi przewijania sekcji
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	section.scrollIntoView({ behavior: "smooth" });
}

// Nasłuchuj kliknięć na linkach nawigacyjnych
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const sectionId = link.getAttribute("href").substring(1);
		scrollToSection(sectionId);
	});
});

// przycisk darkMode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
	body.classList.toggle("dark-mode");
});