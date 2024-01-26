/////////////////////////////////////////////   GREETING SECTION BEGINS /////////////////////////////////////////////////
function getGreeting(hour) {
    if (hour >= 0 && hour < 12) {
      return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  }

  function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
  }

  var currentHour = new Date().getHours();
  var greeting = getGreeting(currentHour);

  document.getElementById("greetingText").innerText = greeting;
  document.getElementById("currentTime").innerText = "Current time: " + getCurrentTime();

  function showModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  window.onload = function() {
    showModal();
  };

/////////////////////////////////////////////   GREETING SECTION ENDS ///////////////////////////////////////////////////////



///////////////////////////////////////////////  CALCULATOR SECTION BEGINS //////////////////////////////////////////////////

let calculation = '';

  function appendToResult(value) {
    calculation += value;
    document.getElementById('result').value = calculation;
  }

  function clearResult() {
    calculation = '';
    document.getElementById('result').value = '';
  }

  function calculateResult() {
    try {
      const result = eval(calculation);
      document.getElementById('result').value = result;
      calculation = result.toString();
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }

////////////////////////////////////////////////  CALCULATOR SECTION ENDS //////////////////////////////////////////////////