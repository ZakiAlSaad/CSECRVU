// 1. Elements Selection
const teacherBtn = document.getElementById('teacher-toggle-btn');
const dateInput = document.getElementById('routine-date');
const dayDisplay = document.querySelector('#day-info span');
const routineWrapper = document.getElementById('routine-wrapper');
const mobileView = document.getElementById('mobile-view');
const holidayMsg = document.getElementById('holiday-msg');
const themeCheckbox = document.getElementById('theme-checkbox');
const sectionSelect = document.getElementById('section-select');
const headerTitle = document.getElementById('header-title');

// ==============================================================
//  FULL ROUTINE DATA (Section A from Text, Others from HTML)
// ==============================================================

const mobileData = {
    "A": {
        "Sunday": [
            { time: "10:25 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Ipshita Tasnim Raha" },
            { time: "11:50 AM", sub: "EEE 1231", room: "313", teacher: "Ipshita Tasnim Raha" },
            { time: "01:45 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { time: "03:10 PM", sub: "CSE 1201", room: "408", teacher: "Md. Muktar Hossain" }
        ],
        "Tuesday": [
            { time: "11:50 AM", sub: "EEE 1231", room: "1011", teacher: "Ipshita Tasnim Raha" },
            { time: "03:10 PM", sub: "CSE 1203", room: "311", teacher: "Sanjoy Kumar Chakravarty" }
        ],
        "Wednesday": [
            { time: "11:50 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:10 PM", sub: "MAT 1241", room: "812", teacher: "Md. Mizanur Rahman" },
            { time: "04:35 PM", sub: "CSE 1201", room: "411", teacher: "Md. Muktar Hossain" }
        ],
        "Thursday": [
            // Lab covers 10:25 AM & 11:50 AM slots
            { time: "10:25 AM - 01:10 PM", sub: "CSE 1202 (Lab)", room: "106 DSAL", teacher: "A.S.M Delwar & Md. Muktar" },
            { time: "01:45 PM", sub: "MAT 1241", room: "414", teacher: "Md. Mizanur Rahman" },
            { time: "03:10 PM", sub: "CSE 1203", room: "414", teacher: "Sanjoy Kumar Chakravarty" }
        ]
    },
    "B": {
        "Sunday": [
            { time: "10:25 AM", sub: "CSE 1201", room: "313", teacher: "Md. Muktar Hossain" },
            { time: "01:45 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:10 PM", sub: "EEE 1231", room: "1013", teacher: "Dr. Sinthia Shabnam Mou" }
        ],
        "Monday": [
            { time: "01:45 PM", sub: "CSE 1203", room: "314", teacher: "Umme Rumman" },
            { time: "03:10 PM", sub: "MAT 1241", room: "511", teacher: "Md. Mizanur Rahman" }
        ],
        "Tuesday": [
            { time: "10:25 AM - 01:10 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Md. Muktar & Tanver Ahmed" }
        ],
        "Wednesday": [
            { time: "10:25 AM", sub: "MAT 1241", room: "814", teacher: "Md. Mizanur Rahman" },
            { time: "11:50 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:10 PM", sub: "EEE 1231", room: "511", teacher: "Dr. Sinthia Shabnam Mou" }
        ],
        "Thursday": [
            { time: "09:00 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Adnan Sami & Alamin Hossain Pappu" },
            { time: "09:00 AM", sub: "CSE 1203", room: "812", teacher: "Umme Rumman" },
            { time: "01:45 PM", sub: "CSE 1201", room: "311", teacher: "Md. Muktar Hossain" }
        ]
    },
    "C": {
        "Sunday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Monday": [
            { time: "11:50 AM - 01:45 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Mohammad Kasedullah & Md. Muktar Hossain" },
            { time: "04:35 PM", sub: "EEE 1231", room: "413", teacher: "Ipshita Tasnim Raha" }
        ],
        "Tuesday": [
            { time: "10:25 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim Raha & Md. Alamin Hossain Pappu" },
            { time: "01:45 PM", sub: "CSE 1201", room: "314", teacher: "Md. Muktar Hossain" },
            { time: "03:10 PM", sub: "CSE 1203", room: "509", teacher: "Umme Rumman" }
        ],
        "Wednesday": [
            { time: "09:00 AM", sub: "CSE 1203", room: "514", teacher: "Umme Rumman" },
            { time: "10:25 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "01:45 PM", sub: "MAT 1241", room: "514", teacher: "Md. Mizanur Rahman" },
            { time: "03:10 PM", sub: "CSE 1201", room: "408", teacher: "Md. Muktar Hossain" }
        ],
        "Thursday": [
            { time: "11:50 AM", sub: "MAT 1241", room: "402", teacher: "Md. Mizanur Rahman" },
            { time: "03:10 PM", sub: "EEE 1231", room: "1012", teacher: "Ipshita Tasnim Raha" }
        ]
    },
    "D": {
        "Sunday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "10:25 AM", sub: "MAT 1241", room: "411", teacher: "Md. Mizanur Rahman" },
            { time: "01:45 PM - 04:35 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Md. Muktar & Tanver Ahmed" }
        ],
        "Monday": [
            { time: "01:45 PM", sub: "CSE 1201", room: "311", teacher: "Tanver Ahmed" },
            { time: "03:10 PM", sub: "EEE 1231", room: "411", teacher: "Ipshita Tasnim Raha" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "MAT 1241", room: "414", teacher: "Md. Mizanur Rahman" }
        ],
        "Wednesday": [
            { time: "10:25 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "01:45 PM", sub: "CSE 1201", room: "512", teacher: "Tanver Ahmed" },
            { time: "03:10 PM", sub: "CSE 1203", room: "514", teacher: "Umme Rumman" }
        ],
        "Thursday": [
            { time: "11:50 PM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim Raha & Alamin Hossain Pappu" },
            { time: "03:10 PM", sub: "CSE 1203", room: "512", teacher: "Umme Rumman" },
            { time: "04:35 PM", sub: "EEE 1231", room: "408", teacher: "Ipshita Tasnim Raha" }
        ]
    },
    "E": {
        "Sunday": [
            { time: "10:25 AM", sub: "EEE 1231", room: "408", teacher: "Md. Adnan Sami" },
            { time: "01:45 PM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Md. Adnan Sami" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "11:50 AM", sub: "MAT 1241", room: "814", teacher: "Anupoma Barman Shetu" }
        ],
        "Tuesday": [
            { time: "11:50 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "01:45 PM", sub: "CSE 1201", room: "408", teacher: "Tanver Ahmed" },
            { time: "03:10 PM", sub: "CSE 1203", room: "413", teacher: "Mst. Jannatul Ferdous" }
        ],
        "Wednesday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "513", teacher: "Md. Adnan Sami" },
            { time: "10:25 AM", sub: "CSE 1201", room: "408", teacher: "Tanver Ahmed" },
            { time: "01:45 PM", sub: "CSE 1203", room: "1012", teacher: "Mst. Jannatul Ferdous" }
        ],
        "Thursday": [
            { time: "11:50 PM", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Mohammad Kasedullah & Tanver Ahmed" },
            { time: "03:10 PM", sub: "MAT 1241", room: "509", teacher: "Anupoma Barman Shetu" }
        ]
    },
    "F": {
        "Sunday": [
            { time: "09:00 AM - 11:50 AM", sub: "CSE 1202 (Lab)", room: "106 DSAL", teacher: "Tanver Ahmed & Mohammad Kasedullah" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "11:50 AM", sub: "CSE 1203", room: "408", teacher: "Mst. Jannatul Ferdous" },
            { time: "01:45 PM", sub: "CSE 1201", room: "131 MIL", teacher: "D. M. Asadijjaman" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "509", teacher: "Md. Adnan Sami" },
            { time: "11:50 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Wednesday": [
            { time: "11:50 AM", sub: "EEE 1231", room: "513", teacher: "Md. Adnan Sami" },
            { time: "01:45 PM", sub: "MAT 1241", room: "314", teacher: "Anupoma Barman Shetu" },
            { time: "03:10 PM", sub: "CSE 1203", room: "1011", teacher: "Mst. Jannatul Ferdous" }
        ],
        "Thursday": [
            { time: "10:25 AM", sub: "MAT 1241", room: "311", teacher: "Anupoma Barman Shetu" },
            { time: "11:50 PM", sub: "EEE 1232", room: "127 EEL", teacher: "Md. Adnan Sami" },
            { time: "03:10 PM", sub: "CSE 1201", room: "412", teacher: "D. M. Asadijjaman" }
        ]
    },
    "G": {
        "Sunday": [
            { time: "11:50 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
            { time: "03:10 PM", sub: "EEE 1231", room: "513", teacher: "Zannatul Mifta" },
            { time: "04:35 PM", sub: "MAT 1241", room: "413", teacher: "Anupoma Barman Shetu" }
        ],
        "Monday": [
            { time: "09:00 AM", sub: "EEE 1231", room: "812", teacher: "Zannatul Mifta" },
            { time: "11:50 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Zannatul Mifta" }
        ],
        "Tuesday": [
            { time: "09:00 AM", sub: "CSE 1201", room: "511", teacher: "MST. NAFIA ISLAM SHISHIR" },
            { time: "10:25 AM", sub: "CSE 1203", room: "814", teacher: "Mst. Jannatul Ferdous" },
            { time: "01:45 PM", sub: "MAT 1241", room: "814", teacher: "Anupoma Barman Shetu" }
        ],
        "Wednesday": [
            { time: "09:00 AM", sub: "CSE 1201", room: "812", teacher: "MST. NAFIA ISLAM SHISHIR" },
            { time: "11:50 AM", sub: "CSE 1203", room: "514", teacher: "Mst. Jannatul Ferdous" },
            { time: "04:35 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
        ],
        "Thursday": [
            { time: "01:45 PM - 04:35 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Nour Nabi & NAFIA ISLAM SHISHIR" }
        ]
    }
};

// ==============================================================
//  LOGIC & RENDERING
// ==============================================================

function getSlotIndex(timeStr) {
    if(timeStr.includes("09:00")) return 0;
    if(timeStr.includes("10:25")) return 1;
    if(timeStr.includes("11:50")) return 2;
    if(timeStr.includes("01:45")) return 3;
    if(timeStr.includes("03:10")) return 4;
    if(timeStr.includes("04:35")) return 5;
    return -1;
}

function getRowSpan(timeStr) {
    if (!timeStr.includes("-")) return 1;
    // ল্যাব ও সেশনাল ক্লাসের জন্য RowSpan লজিক
    if (timeStr.includes("09:00") && timeStr.includes("11:50")) return 2;
    if (timeStr.includes("10:25") && timeStr.includes("01:10")) return 2;
    if (timeStr.includes("11:50") && timeStr.includes("01:45")) return 1;
    if (timeStr.includes("11:50") && timeStr.includes("03:10")) return 2;
    if (timeStr.includes("01:45") && timeStr.includes("04:35")) return 2; // Covers 01:45 & 03:10
    if (timeStr.includes("10:25") && timeStr.includes("01:10")) return 2;
    return 1;
}

function renderDesktopTable(section) {
    const tbody = document.getElementById('routine-body-content');
    tbody.innerHTML = '';

    const timeSlots = ["09:00 AM", "10:25 AM", "11:50 AM", "01:45 PM", "03:10 PM", "04:35 PM"];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const sectionData = mobileData[section];

    timeSlots.forEach((time, slotIndex) => {
        const tr = document.createElement('tr');
        const timeTd = document.createElement('td');
        timeTd.className = 'time-slot';
        timeTd.textContent = time;
        tr.appendChild(timeTd);

        days.forEach(day => {
            const classes = sectionData[day];
            let classInfo = null;

            if (classes) {
                // Find class starting at this slot
                classInfo = classes.find(c => {
                    const startIdx = getSlotIndex(c.time);
                    return startIdx === slotIndex;
                });

                // Check if this slot is covered by a previous merged class
                if (!classInfo) {
                    const coveringClass = classes.find(c => {
                        if (!c.time.includes("-")) return false;
                        const startIdx = getSlotIndex(c.time);
                        const span = getRowSpan(c.time);
                        return slotIndex > startIdx && slotIndex < (startIdx + span);
                    });
                    if (coveringClass) return; // Skip generating td
                }
            }

            const td = document.createElement('td');
            td.setAttribute('data-day', day);

            if (classInfo) {
                const span = getRowSpan(classInfo.time);
                if (span > 1) td.rowSpan = span;

                let colorClass = 'subject-cell';
                if(classInfo.sub.includes("CSE")) colorClass += ' cse';
                if(classInfo.sub.includes("EEE")) colorClass += ' eee';
                if(classInfo.sub.includes("MAT")) colorClass += ' mat';
                if(classInfo.sub.includes("BAN")) colorClass += ' ban';
                if(classInfo.sub.includes("Lab")) colorClass += '-lab';

                td.className = colorClass;
                td.innerHTML = `${classInfo.sub} <br><small>Room: ${classInfo.room}</small><br><small class="teacher-name">${classInfo.teacher}</small>`;
            } else {
                td.textContent = "-";
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function renderMobileRoutine(section, dayName) {
    mobileView.innerHTML = '';
    const sectionData = mobileData[section];
    if (!sectionData) return;

    const classes = sectionData[dayName];
    if (classes && classes.length > 0) {
        classes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'class-card';
            if(item.sub.includes("Lab")) card.style.borderLeftColor = "#8e44ad";

            card.innerHTML = `
                <span class="card-time">Time: ${item.time}</span>
                <div class="card-subject">${item.sub}</div>
                <div class="card-room">Room: ${item.room}</div>
                <div class="mobile-teacher">Teacher: ${item.teacher}</div>
            `;
            mobileView.appendChild(card);
        });
    } else {
        mobileView.innerHTML = '<p style="text-align:center; padding:20px;">No Classes Found for Today!</p>';
    }
}

function checkRoutine() {
    const selectedDate = new Date(dateInput.value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[selectedDate.getDay()];
    const currentSec = sectionSelect.value;

    if(dayDisplay) dayDisplay.textContent = dayName;
    document.querySelectorAll('.active-day').forEach(el => el.classList.remove('active-day'));

    if (dayName === 'Friday' || dayName === 'Saturday') {
        routineWrapper.style.display = 'none';
        mobileView.style.display = 'none';
        holidayMsg.style.display = 'block';
        if(teacherBtn) teacherBtn.style.display = 'none';
    } else {
        holidayMsg.style.display = 'none';
        if(teacherBtn) teacherBtn.style.display = 'block';

        if (window.innerWidth > 576) {
            routineWrapper.style.display = 'block';
            mobileView.style.display = 'none';
            const shortDay = dayName.substring(0, 3);
            const header = document.getElementById(shortDay);
            if (header) {
                header.classList.add('active-day');
                const visibleBody = document.getElementById('routine-body-content');
                if(visibleBody) {
                    visibleBody.querySelectorAll(`td[data-day="${dayName}"]`).forEach(cell => {
                        cell.classList.add('active-day');
                    });
                }
            }
        } else {
            routineWrapper.style.display = 'none';
            mobileView.style.display = 'block';
            renderMobileRoutine(currentSec, dayName);
        }
    }
}

// Events
sectionSelect.addEventListener('change', () => {
    headerTitle.textContent = `CSE 2nd Semester (Sec-${sectionSelect.value})`;
    renderDesktopTable(sectionSelect.value);
    checkRoutine();
});

if(teacherBtn) {
    teacherBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-teachers');
        teacherBtn.textContent = document.body.classList.contains('show-teachers') ? "Hide Teacher Names" : "Show Teacher Names";
    });
}

dateInput.addEventListener('change', checkRoutine);
window.addEventListener('resize', checkRoutine);

if(themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        const mode = themeCheckbox.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeCheckbox.checked = true;
    }
}

// Initial Load
window.onload = () => {
    const today = new Date();
    // Local Timezone Fix
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    dateInput.value = `${year}-${month}-${day}`;

    renderDesktopTable("A");
    checkRoutine();
};