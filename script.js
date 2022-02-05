
function getString(word) {
	if (typeof word !== 'string') {
		console.log('Введена не строка');
		return;
	} 

	word = word.trim();

	return word.length > 30 ? word.slice(0, 30) + '...' : word;
}
console.log(getString('                                   aaaaaaabcdefghijklmnopqrstuvwxyz'));
