var login = 'kripto'
var pass = 'litsoy'

var loginInput = prompt('Введите свой логин')
var passInput = prompt('Введите свой пароль')
 
if (loginInput == login) {
	if (passInput == pass) {
		alert('АНТИХАЙП')
	} else {
		alert('ТЫ ЛОХ')
	}
} else {
	alert('ТЫ ЛОХ ЦВЕТОЧНЫЙ')
}