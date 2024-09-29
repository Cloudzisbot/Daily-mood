/* General Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

body {
    background: linear-gradient(135deg, #f9f9f9 30%, #eceff1 100%);
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 30px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
}

h1 {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 700;
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

label {
    font-weight: 500;
    font-size: 1.1rem;
    color: #555;
}

select, textarea {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
}

select:hover, textarea:hover {
    border-color: #5c9eff;
}

button {
    background-color: #5c9eff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #4a8ae6;
}

/* Entries List */
h2 {
    margin-top: 30px;
    color: #333;
    font-weight: 600;
    font-size: 1.8rem;
}

ul {
    list-style: none;
    padding-left: 0;
}

ul li {
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
    transition: background-color 0.3s ease;
}

/* Color Coding for Previous Entries */
.happy-entry { background-color: #ffe57f; }
.excited-entry { background-color: #ffcc66; }
.calm-entry { background-color: #a0e7e5; }
.anxious-entry { background-color: #ffd1dc; }
.sad-entry { background-color: #d3d3d3; }
.tired-entry { background-color: #d1c4e9; }
.angry-entry { background-color: #ff6b6b; }
.frustrated-entry { background-color: #ff8c42; }
.insecure-entry { background-color: #b0bec5; }

/* Calendar Icon */
.calendar-icon {
    font-size: 2.5rem;
    cursor: pointer;
    text-align: right;
    margin-bottom: 20px;
    color: #5c9eff;
    transition: transform 0.3s ease;
}

.calendar-icon:hover {
    transform: scale(1.2);
}

/* Calendar Container */
.calendar-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
}

#calendar {
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    color: black;
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

button#close-calendar {
    background-color: #ff5c5c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

/* Calendar Day Boxes */
.calendar-day {
    width: 40px;
    height: 40px;
    margin: 5px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 1rem;
    background-color: #eceff1;
    transition: background-color 0.3s ease;
}

/* Color Coding for Mood Days in Calendar */
.happy-day { background-color: #ffe57f; }
.excited-day { background-color: #ffcc66; }
.calm-day { background-color: #a0e7e5; }
.anxious-day { background-color: #ffd1dc; }
.sad-day { background-color: #d3d3d3; }
.tired-day { background-color: #d1c4e9; }
.angry-day { background-color: #ff6b6b; }
.frustrated-day { background-color: #ff8c42; }
.insecure-day { background-color: #b0bec5; }
