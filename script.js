
function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");
  if (!birthdate) {
    result.textContent = "براہ کرم اپنی تاریخ پیدائش درج کریں";
    return;
  }
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  result.textContent = `آپ کی عمر ${age} سال ہے۔`;
}
