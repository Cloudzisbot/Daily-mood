// Get the form elements
const moodForm = document.getElementById('mood-form');
const moodSelect = document.getElementById('mood');
const noteInput = document.getElementById('note');
const entriesList = document.getElementById('entries-list');
const calendarIcon = document.getElementById('calendar-icon');
const calendarContainer = document.getElementById('calendar-container');
const closeCalendarBtn = document.getElementById('close-calendar');
const calendar = document.getElementById('calendar');

// List of Bible verses for negative emotions
const bibleQuotes = [
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "God is our refuge and strength, a very present help in trouble. - Psalm 46:1",
    "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
    "Come to me, all who are weary and burdened, and I will give you rest. - Matthew 11:28",
    "I can do all things through Christ who strengthens me. - Philippians 4:13",
    "The Lord will fight for you; you need only to be still. - Exodus 14:14",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
    "Fear not, for I am with you; be not dismayed, for I am your God. - Isaiah 41:10",
    "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you. - Deuteronomy 31:6",
    "Even though I walk through the darkest valley, I will fear no evil, for you are with me. - Psalm 23:4",
    "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you. - Isaiah 43:2",
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles. - Isaiah 40:31"
];

// List of pet names
const petNames = [
    "M’lady", "Gorgeous", "Darling", "My love", "여보", "자기야", "Angel", "My girl", "Baby", "Babe",
    "My princess", "My dear", "Wifey", "My beloved", "Mi amor", "Sweetheart", "My doll", "Honey",
    "My precious", "Sunshine", "Bunny", "My boo", "My bunbun", "Pookie"
];

// Load saved moods from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadMoods();
    generateCalendar();
});

// Save mood on form submit
moodForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const mood = moodSelect.value;
    const note = noteInput.value;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create mood entry
    const moodEntry = {
        mood,
        note,
        date,
        time
    };

    // Save the mood entry to localStorage
    saveMood(moodEntry);

    // Display the new mood entry
    displayMood(moodEntry);

    // Show an uplifting message if the mood is negative
    if (["Angry", "Frustrated", "Insecure", "Sad", "Anxious"].includes(mood)) {
        showEncouragingQuote(mood);
    } else {
        showLoveMessage();
    }

    // Refresh the calendar to update color-coding
    generateCalendar();

    // Clear form fields
    moodSelect.value = 'Happy';
    noteInput.value = '';
});

// Save mood entry to localStorage
function saveMood(moodEntry) {
    let moods = localStorage.getItem('moods');
    if (!moods) {
        moods = [];
    } else {
        moods = JSON.parse(moods);
    }
    moods.push(moodEntry);
    localStorage.setItem('moods', JSON.stringify(moods));
}

// Load saved moods from localStorage and display them
function loadMoods() {
    let moods = localStorage.getItem('moods');
    if (moods) {
        moods = JSON.parse(moods);
        moods.forEach(moodEntry => displayMood(moodEntry));
    }
}

// Display a mood entry in the list with color coding and time
function displayMood(moodEntry) {
    const li = document.createElement('li');
    li.classList.add(`${moodEntry.mood.toLowerCase()}-entry`);
    li.innerHTML = `<strong>${moodEntry.date} ${moodEntry.time}</strong>: ${moodEntry.mood} - ${moodEntry.note ? moodEntry.note : 'No notes'}`;
    entriesList.appendChild(li);
}

// Show an uplifting quote and love message for negative emotions
function showEncouragingQuote(mood) {
    const randomQuote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];
    const randomPetName = petNames[Math.floor(Math.random() * petNames.length)];
    
    alert(`"${randomQuote}"\n\n${randomPetName}, remember that I love you always, no matter what you feel. 💖`);
}

// Show a love message for positive emotions
function showLoveMessage() {
    const randomPetName = petNames[Math.floor(Math.random() * petNames.length)];
    
    alert(`${randomPetName}, I love you so much, and I'm so happy you're feeling great today! 💖`);
}

// Show or hide the calendar
calendarIcon.addEventListener('click', () => {
    calendarContainer.style.display = 'flex';
});

closeCalendarBtn.addEventListener('click', () => {
    calendarContainer.style.display = 'none';
});

// Generate the calendar with color-coded days
function generateCalendar() {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    calendar.innerHTML = ''; // Clear previous calendar

    let moods = localStorage.getItem('moods');
    if (!moods) return;
    moods = JSON.parse(moods);

    // Create a div for each day in the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        const formattedDay = `${new Date().getMonth() + 1}/${day}/${new Date().getFullYear()}`;

        dayDiv.textContent = day;
        dayDiv.classList.add('calendar-day');

        // Check if there's a mood logged for this day
        const moodForDay = moods.find(mood => mood.date === formattedDay);
        if (moodForDay) {
            dayDiv.classList.add(`${moodForDay.mood.toLowerCase()}-day`);
        }

        calendar.appendChild(dayDiv);
    }
}
