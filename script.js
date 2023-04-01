const dayInput = document.getElementById("input-day")
const monthInput = document.getElementById("input-month")
const yearInput = document.getElementById("input-year")

const dayResult = document.getElementById("result-day")
const monthResult = document.getElementById("result-month")
const yearResult = document.getElementById("result-year")

const ageButton = document.getElementById("age-button")

const errorTexts = document.querySelectorAll(".error")

const dateTypes = document.querySelectorAll(".date-type");

let ageDays, ageMonths, ageYears

ageButton.addEventListener("click", function(){
    const birthDate = new Date(`${yearInput.value}-${monthInput.value.toString().padStart(2, '0')}-${dayInput.value.toString().padStart(2, '0')}`)
    const today = new Date()

    if (birthDate > today) {
        errorTexts.forEach(errorText => {
            errorText.classList.remove("error")
            errorText.innerHTML = "Insert a valid date"
        })

        dateTypes.forEach(dateType => {
            dateType.style.color = "hsl(0, 100%, 67%)"
        })
        return
    }

    switch(monthInput.value){
        case "4":
        case "6":
        case "9":
        case "11":
            if(dayInput.value > 30){
                errorTexts.forEach(errorText => {
                    errorText.classList.remove("error")
                    errorText.innerHTML = "Insert a valid date"
                })

                dateTypes.forEach(dateType => {
                    dateType.style.color = "hsl(0, 100%, 67%)"
                })
                return
            }
            break
    
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            if(dayInput.value > 31){
                errorTexts.forEach(errorText => {
                    errorText.classList.remove("error")
                    errorText.innerHTML = "Insert a valid date"
                })

                dateTypes.forEach(dateType => {
                    dateType.style.color = "hsl(0, 100%, 67%)"
                })
                return
            }
            break
    
        case "2":
            if(dayInput.value > 28){
                errorTexts.forEach(errorText => {
                    errorText.classList.remove("error")
                    errorText.innerHTML = "Insert a valid date"
                })

                dateTypes.forEach(dateType => {
                    dateType.style.color = "hsl(0, 100%, 67%)"
                })
                return
            }
            break
        
        default:
            break
    }

    errorTexts.forEach(errorText => {
        errorText.classList.add("error")
        errorText.innerHTML = "Insert a valid date"
    })

    dateTypes.forEach(dateType => {
        dateType.style.color = "hsl(0, 1%, 44%)"
    })
    
    calculateAge(yearInput, monthInput, dayInput)
    dayResult.innerHTML = ageDays
    monthResult.innerHTML = ageMonths
    yearResult.innerHTML = ageYears
})

function calculateAge(yearInput, monthInput, dayInput) {
    const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`)
    const today = new Date()
  
    ageYears = today.getFullYear() - birthDate.getFullYear()
    ageMonths = today.getMonth() - birthDate.getMonth()
    ageDays = today.getDate() - birthDate.getDate()

    if (ageDays < 0) {
      const monthDays = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate()
      ageDays += monthDays
      ageMonths--
    }

    if (ageMonths < 0) {
      ageMonths += 12
      ageYears--
    }
  
    return [ageYears, ageMonths, ageDays]
}