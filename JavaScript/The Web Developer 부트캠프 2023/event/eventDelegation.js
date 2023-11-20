/**
 * 동적으로 생성된 요소들에 대해 이벤트를 바인딩하고 싶을때
 * 이벤트를 위임하여 해결한다.
 */

const tweetForm = document.querySelector('#tweetForm');
const tweetFormContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetFormContainer.append(newTweet);
}

tweetFormContainer.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove();
});