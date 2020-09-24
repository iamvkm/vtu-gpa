function calculate_cgpa() {
  one = parseInt(document.cgpa_form.one.value);
  two = parseInt(document.cgpa_form.two.value);
  three = parseInt(document.cgpa_form.three.value);
  four = parseInt(document.cgpa_form.four.value);
  five = parseInt(document.cgpa_form.five.value);
  six = parseInt(document.cgpa_form.six.value);
  seven = parseInt(document.cgpa_form.seven.value);
  eight = parseInt(document.cgpa_form.eight.value);
  nine = parseInt(document.cgpa_form.nine.value);
  ten = parseInt(document.cgpa_form.ten.value);

  if (five == 0) {
    no_of_sem = 4;
  } else if (seven == 0) {
    no_of_sem = 6;
  } else if (nine == 0) {
    no_of_sem = 8;
  } else {
    no_of_sem = 10;
  }

  marks_sum =
    one + two + three + four + five + six + seven + eight + nine + ten;

  cgpa = marks_sum / no_of_sem;
  final_cgpa = Math.round((cgpa + Number.EPSILON) * 100) / 100;
  document.getElementById("cgpa-result").innerHTML =
    "CGPA scored by you: <span id='res-color'>" + final_cgpa + "</span>";
}
