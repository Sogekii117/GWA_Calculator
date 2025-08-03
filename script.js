let subjectCount = 0;

  function addSubject(units = '', grade = '') {
    subjectCount++;
    const subjectsDiv = document.getElementById("subjects");

    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject";
    subjectDiv.innerHTML = `
      <label>Subject ${subjectCount}</label>
      <input type="number" min="1" placeholder="Units" value="${units}" class="unit">
      <input type="number" step="0.01" min="0" placeholder="Grade" value="${grade}" class="grade">
      <button onclick="removeSubject(this)">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    `;
    subjectsDiv.appendChild(subjectDiv);
  }

  function removeSubject(btn) {
    btn.parentElement.remove();
    updateLabels();
  }

  function updateLabels() {
    const subjects = document.querySelectorAll(".subject label");
    subjectCount = 0;
    subjects.forEach((label, index) => {
      subjectCount++;
      label.textContent = `Subject ${index + 1}`;
    });
  }

  function calculateGWA() {
    const units = document.querySelectorAll(".unit");
    const grades = document.querySelectorAll(".grade");
    let totalUnits = 0;
    let totalPoints = 0;
    let hasValidInput = false;
  
    for (let i = 0; i < units.length; i++) {
      const unit = parseFloat(units[i].value);
      const grade = parseFloat(grades[i].value);
      if (!isNaN(unit) && !isNaN(grade)) {
        totalUnits += unit;
        totalPoints += unit * grade;
        hasValidInput = true;
      }
    }
  
    if (!hasValidInput) {
      alert("Please enter at least one subject with valid unit and grade.");
      return;
    }
  
    const gwa = totalPoints / totalUnits;
    document.getElementById("gwaResult").textContent = `Your GWA: ${gwa.toFixed(3)}`;
  }
  
