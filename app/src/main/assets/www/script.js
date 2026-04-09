// 1. Elements Selection
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const mobileView = document.getElementById('mobile-view');
const holidayMsg = document.getElementById('holiday-msg');
const sectionSelect = document.getElementById('section-select');

// ==============================================================
//  FULL ROUTINE DATA (EXACTLY MATCHING THE PDF TIMES)
// ==============================================================
const mobileData = {
    "A": {
        "Sunday": [
            { "time": "10:00 AM", "subject": "EEE 1232 (Lab)", "room": "127 EEL", "teacher": "Ipshita Tasnim Raha, Mehedi Hasan Shakil" },
            { "time": "11:00 AM", "subject": "EEE 1231", "room": "313", "teacher": "Ipshita Tasnim Raha" },
            { "time": "12:00 PM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { "time": "01:30 PM", "subject": "CSE 1201", "room": "408", "teacher": "Md. Muktar Hossain" }
        ],
        "Tuesday": [
            { "time": "11:00 AM", "subject": "EEE 1231", "room": "1011", "teacher": "Ipshita Tasnim Raha" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "311", "teacher": "Sanjoy Kumar Chakravarty" }
        ],
        "Wednesday": [
            { "time": "11:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "01:30 PM", "subject": "CSE 1201", "room": "812", "teacher": "Md. Muktar Hossain" },
            { "time": "02:30 PM", "subject": "MAT 1241", "room": "411", "teacher": "Md. Mizanur Rahman" }
        ],
        "Thursday": [
            { "time": "10:00 AM - 12:00 PM", "subject": "CSE 1202 (Lab)", "room": "106 DSAL", "teacher": "A.S.M Delwar Hossain, Md. Muktar Hossain" },
            { "time": "12:00 PM", "subject": "MAT 1241", "room": "414", "teacher": "Md. Mizanur Rahman" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "414", "teacher": "Sanjoy Kumar Chakravarty" }
        ]
    },
    "B": {
        "Sunday": [
            { "time": "10:00 AM", "subject": "CSE 1201", "room": "313", "teacher": "Md. Muktar Hossain" },
            { "time": "12:00 PM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "01:30 PM", "subject": "EEE 1231", "room": "1013", "teacher": "Dr. Sinthia Shabnam Mou" }
        ],
        "Monday": [
            { "time": "01:30 PM", "subject": "MAT 1241", "room": "511", "teacher": "Md. Mizanur Rahman" }
        ],
        "Tuesday": [
            { "time": "10:00 AM - 12:00 PM", "subject": "CSE 1202 (Lab)", "room": "129 SEL", "teacher": "Md. Muktar Hossain, Tanver Ahmed" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "414", "teacher": "Mehedi Hasan Shakil" }
        ],
        "Wednesday": [
            { "time": "10:00 AM", "subject": "MAT 1241", "room": "814", "teacher": "Md. Mizanur Rahman" },
            { "time": "11:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "01:30 PM", "subject": "EEE 1231", "room": "511", "teacher": "Dr. Sinthia Shabnam Mou" }
        ],
        "Thursday": [
            { "time": "09:00 AM", "subject": "EEE 1232 (Lab)", "room": "130 DSCAL", "teacher": "Md. Adnan Sami, Md. Alamin Hossain Pappu" },
            { "time": "10:00 AM", "subject": "CSE 1203", "room": "812", "teacher": "Mehedi Hasan Shakil" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "311", "teacher": "Md. Muktar Hossain" }
        ]
    },
    "C": {
        "Sunday": [
            { "time": "09:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { "time": "11:00 AM - 01:30 PM", "subject": "CSE 1202 (Lab)", "room": "129 SEL", "teacher": "Mohammad Kasedullah, Md. Muktar Hossain" },
            { "time": "02:30 PM", "subject": "EEE 1231", "room": "413", "teacher": "Ipshita Tasnim Raha" }
        ],
        "Tuesday": [
            { "time": "10:00 AM", "subject": "EEE 1232 (Lab)", "room": "130 DSCAL", "teacher": "Ipshita Tasnim Raha, Md. Alamin Hossain Pappu" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "314", "teacher": "Md. Muktar Hossain" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "509", "teacher": "Umme Rumman" }
        ],
        "Wednesday": [
            { "time": "09:00 AM", "subject": "CSE 1203", "room": "514", "teacher": "Umme Rumman" },
            { "time": "10:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "514", "teacher": "Md. Muktar Hossain" },
            { "time": "01:30 PM", "subject": "MAT 1241", "room": "408", "teacher": "Md. Mizanur Rahman" }
        ],
        "Thursday": [
            { "time": "11:00 AM", "subject": "MAT 1241", "room": "402", "teacher": "Md. Mizanur Rahman" },
            { "time": "01:30 PM", "subject": "EEE 1231", "room": "1012", "teacher": "Ipshita Tasnim Raha" }
        ]
    },
    "D": {
        "Sunday": [
            { "time": "09:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "10:00 AM", "subject": "MAT 1241", "room": "411", "teacher": "Md. Mizanur Rahman" },
            { "time": "12:00 PM - 02:30 PM", "subject": "CSE 1202 (Lab)", "room": "129 SEL", "teacher": "Md. Muktar Hossain, Tanver Ahmed" }
        ],
        "Monday": [
            { "time": "11:00 AM", "subject": "MAT 1241", "room": "414", "teacher": "Md. Mizanur Rahman" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "311", "teacher": "Tanver Ahmed" },
            { "time": "01:30 PM", "subject": "EEE 1231", "room": "411", "teacher": "Ipshita Tasnim Raha" }
        ],
        "Tuesday": [],
        "Wednesday": [
            { "time": "10:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "512", "teacher": "Tanver Ahmed" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "514", "teacher": "Umme Rumman" }
        ],
        "Thursday": [
            { "time": "11:00 AM", "subject": "EEE 1232 (Lab)", "room": "130 DSCAL", "teacher": "Ipshita Tasnim Raha, Md. Alamin Hossain Pappu" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "512", "teacher": "Umme Rumman" },
            { "time": "02:30 PM", "subject": "EEE 1231", "room": "408", "teacher": "Ipshita Tasnim Raha" }
        ]
    },
    "E": {
        "Sunday": [
            { "time": "10:00 AM", "subject": "EEE 1231", "room": "408", "teacher": "Md. Adnan Sami" },
            { "time": "12:00 PM", "subject": "EEE 1232 (Lab)", "room": "130 DSCAL", "teacher": "Shorav Paul, Md. Adnan Sami" }
        ],
        "Monday": [
            { "time": "09:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "11:00 AM", "subject": "MAT 1241", "room": "814", "teacher": "Anupoma Barman Shetu" }
        ],
        "Tuesday": [
            { "time": "11:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "408", "teacher": "Tanver Ahmed" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "413", "teacher": "Mst. Jannatul Ferdous" }
        ],
        "Wednesday": [
            { "time": "09:00 AM", "subject": "EEE 1231", "room": "513", "teacher": "Md. Adnan Sami" },
            { "time": "10:00 AM", "subject": "CSE 1201", "room": "408", "teacher": "Tanver Ahmed" },
            { "time": "12:00 PM", "subject": "CSE 1203", "room": "1012", "teacher": "Mst. Jannatul Ferdous" }
        ],
        "Thursday": [
            { "time": "11:00 AM - 01:30 PM", "subject": "CSE 1202 (Lab)", "room": "128 BCL", "teacher": "Mohammad Kasedullah, Tanver Ahmed" },
            { "time": "01:30 PM", "subject": "MAT 1241", "room": "509", "teacher": "Anupoma Barman Shetu" }
        ]
    },
    "F": {
        "Sunday": [
            { "time": "09:00 AM - 11:00 AM", "subject": "CSE 1202 (Lab)", "room": "106 DSAL", "teacher": "Tanver Ahmed, Mohammad Kasedullah" },
            { "time": "12:00 PM", "subject": "CSE 1201", "room": "1012", "teacher": "D. M. Asadujjaman" }
        ],
        "Monday": [
            { "time": "09:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "11:00 AM", "subject": "CSE 1203", "room": "408", "teacher": "Mst. Jannatul Ferdous" }
        ],
        "Tuesday": [
            { "time": "09:00 AM", "subject": "EEE 1231", "room": "509", "teacher": "Md. Adnan Sami" },
            { "time": "11:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" }
        ],
        "Wednesday": [
            { "time": "11:00 AM", "subject": "EEE 1231", "room": "513", "teacher": "Md. Adnan Sami" },
            { "time": "12:00 PM", "subject": "MAT 1241", "room": "314", "teacher": "Anupoma Barman Shetu" },
            { "time": "01:30 PM", "subject": "CSE 1203", "room": "1011", "teacher": "Mst. Jannatul Ferdous" }
        ],
        "Thursday": [
            { "time": "10:00 AM", "subject": "MAT 1241", "room": "311", "teacher": "Anupoma Barman Shetu" },
            { "time": "11:00 AM", "subject": "EEE 1232 (Lab)", "room": "127 EEL", "teacher": "Shorav Paul, Md. Adnan Sami" },
            { "time": "01:30 PM", "subject": "CSE 1201", "room": "412", "teacher": "D. M. Asadujjaman" }
        ]
    },
    "G": {
        "Sunday": [
            { "time": "11:00 AM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" },
            { "time": "01:30 PM", "subject": "CSE 1201", "room": "911", "teacher": "MST. NAFIA ISLAM SHISHIR" },
            { "time": "02:30 PM", "subject": "MAT 1241", "room": "413", "teacher": "Anupoma Barman Shetu" }
        ],
        "Monday": [
            { "time": "09:00 AM", "subject": "EEE 1231", "room": "812", "teacher": "Zannatul Mifta" },
            { "time": "11:00 AM", "subject": "EEE 1232 (Lab)", "room": "127 EEL", "teacher": "Zannatul Mifta, Md. Adnan Sami" }
        ],
        "Tuesday": [
            { "time": "09:00 AM", "subject": "CSE 1201", "room": "812", "teacher": "MST. NAFIA ISLAM SHISHIR" },
            { "time": "10:00 AM", "subject": "CSE 1203", "room": "814", "teacher": "Mst. Jannatul Ferdous" },
            { "time": "12:00 PM", "subject": "MAT 1241", "room": "814", "teacher": "Anupoma Barman Shetu" }
        ],
        "Wednesday": [
            { "time": "11:00 AM", "subject": "CSE 1203", "room": "514", "teacher": "Mst. Jannatul Ferdous" },
            { "time": "12:00 PM", "subject": "BAN 0001", "room": "106", "teacher": "Most. Afshara Tasnim Ritu" }
        ],
        "Thursday": [
            { "time": "11:00 AM", "subject": "EEE 1231", "room": "513", "teacher": "Zannatul Mifta" },
            { "time": "12:00 PM - 02:30 PM", "subject": "CSE 1202 (Lab)", "room": "129 SEL", "teacher": "Md. Nour Nabi, MST. NAFIA ISLAM SHISHIR" }
        ]
    }
};

// ==============================================================
//  MOBILE RENDERING LOGIC
// ==============================================================

function renderMobileRoutine(section, dayName) {
    if (!mobileView) return;

    mobileView.innerHTML = '';
    const sectionData = mobileData[section];

    // Check if Weekend or No Data available
    if (dayName === 'Friday' || dayName === 'Saturday' || !sectionData || !sectionData[dayName] || sectionData[dayName].length === 0) {
        mobileView.style.display = 'none';
        if (holidayMsg) holidayMsg.style.display = 'block';
        return;
    }

    if (holidayMsg) holidayMsg.style.display = 'none';
    mobileView.style.display = 'flex';

    const classes = sectionData[dayName];

    classes.forEach(item => {
        const card = document.createElement('div');

        // Determine Theme Color
        let colorClass = 'type-cse';
        const subject = item.subject.toUpperCase();
        if(subject.includes("LAB")) colorClass = 'type-lab';
        else if(subject.includes("EEE")) colorClass = 'type-eee';
        else if(subject.includes("MAT")) colorClass = 'type-mat';
        else if(subject.includes("BAN")) colorClass = 'type-ban';

        card.className = `class-card ${colorClass}`;
        const roomStr = item.room.replace('Room: ', '').replace('ROOM_', '');

        card.innerHTML = `
            <div class="card-content">
                <span class="card-time">🕒 ${item.time}</span>
                <div class="card-subject">${item.subject}</div>
                <div class="card-room">📍 ROOM_${roomStr}</div>
                <div class="mobile-teacher">👨‍💻 ${item.teacher}</div>
            </div>
        `;
        mobileView.appendChild(card);
    });
}

function checkRoutine() {
    if (!dateInput || !dateInput.value) return;

    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];

    const currentSec = sectionSelect ? sectionSelect.value : 'A';

    if(dayDisplay) dayDisplay.textContent = dayName;

    // Render Mobile Cards
    renderMobileRoutine(currentSec, dayName);
}

// Events
if(sectionSelect) sectionSelect.addEventListener('change', checkRoutine);
if(dateInput) dateInput.addEventListener('change', checkRoutine);

if(teacherBtn) {
    teacherBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-teachers');
    });
}

// Initial Load
window.onload = () => {
    const today = new Date();
    // Local Timezone Fix
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    if(dateInput) dateInput.value = `${year}-${month}-${day}`;

    checkRoutine();
};