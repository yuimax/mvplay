// 全角文字→半角文字
function z2h(ch) {
	const n = ch.charCodeAt(0);
	return (n >= 0xFEE0 && n <= 0xFFEF) ? String.fromCharCode(n - 0xFEE0) : ch;
}
// 文字列の正規化
function normalize(str) {
	return str
		.split('').map(z2h).join('')	// 全角→半角
		.replace(/&/g, '>') // [&]→'>'
		.replace(/[\|]/g, '<') // [|]→'<'
		.replace(/[\s]+/g, '') // 空白類を削除
		.replace(/[!><]+$/, '') // 末尾の演算子を削除
		.toUpperCase();
}
