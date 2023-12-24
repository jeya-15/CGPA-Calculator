const valuesObject = {};
    let inputCounter = 2;
	let gpa=0.00;
const valuesArray=[];
let lastDiv;
    function addsub() {
      const inputContainer = document.getElementById('inputContainer');
      const newDiv = document.createElement('div');
	  newDiv.className="box"
      newDiv.innerHTML = `
	 <div class="input"> 
	 <label for="grade${inputCounter}">Enter the Grade:</label>
	  <select name="grade${inputCounter}" id="grade${inputCounter}">
		   <option value="5">C</option>
		  <option value="6">B</option>
		  <option value="7">B+</option>
		  <option value="8">A</option>
		  <option value="9">A+</option>
		  <option value="10">O</option>
	  </select>
	  </div>
	  <div class="input1">
	  <label for ="credit${inputCounter}">Enter the Credit of the course</label>
	  <select name="credit${inputCounter}" id="credit${inputCounter}">
	  <option value="4">4</option>
	  <option value="3">3</option>
	  <option value="3">2</option>
	  <option value="3">1</option>
	  </select>
	  </div>
	  `;
      inputContainer.appendChild(newDiv);
      inputCounter++;
	  lastDiv=newDiv;
    }

function calculate() {
  let totalSum = 0;
  let totCred = 0;

  for (let i = 1; i < inputCounter; i++) {
    const grade = document.getElementById(`grade${i}`);
    const credit = document.getElementById(`credit${i}`);

    if (grade && credit) {
      const valueObject = {
        [`grade${i}`]: parseInt(grade.value),
        [`credit${i}`]: parseInt(credit.value)
      };
	  totCred=totCred+valueObject[`credit${i}`];

      const multiplicationResult = valueObject[`grade${i}`] * valueObject[`credit${i}`];
      totalSum += multiplicationResult;

      console.log(multiplicationResult);

      valuesArray.push(valueObject);
    }
  }
  console.log(totalSum);
  console.log(gpa);
  console.log(totCred);
  console.log(totalSum/totCred);
  gpa=(totalSum/totCred);
  document.getElementById('result').textContent=`Your GPA is ${gpa.toFixed(3)}`;
}
