
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const submit = document.querySelector("#submit")

const checkInput = () => {
	if (name.value !== "" && email.value !== "") {
		submit.disabled = ""
	} else {
		submit.disabled = "disabled";
	}
}

name.addEventListener ("change", checkInput)
email.addEventListener ("change", checkInput)
