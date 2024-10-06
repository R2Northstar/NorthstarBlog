// Source: https://github.com/autinerd/simple-mastodon-share-button/blob/main/mastodonShare.js
function mastodonShareButtonClick(e) {
	const btn = e.target;
	let href = document.URL;
	let title = document.title;
	if ('data-title' in btn.attributes && 'data-href' in btn.attributes) {
		href = btn.attributes['data-href'].value;
		title = btn.attributes['data-title'].value;
	}
	const mastodonInstance = prompt(`Sharing "${href}"\nPlease enter your Mastodon instance (e.g. mastodon.social) for sharing`);
	if (mastodonInstance == null) {
		return;
	}
	if (mastodonInstance.indexOf('/') === -1) {
		window.open('https://' + mastodonInstance + '/share?text=' + encodeURIComponent(title) + ' ' + encodeURIComponent(href), "_blank");
	} else {
		alert("Please enter your instance without https:// or other paths!");
	}
}

addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('a.btn--mastodon');
	buttons.forEach((btn) => {
		btn.addEventListener('click', mastodonShareButtonClick);
	})
});
