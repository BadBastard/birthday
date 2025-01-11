const messages = [
    "Can sıkıcı biriysem özür dilerim, çünkü ben buyum.",
    "Allah'ın size ve ailenize her zaman yeterli rızık sağlaması için dua ediyorum.",
    "sorry if im annoying hehehe....",
    "Sen harika bir kadınsın, bunu biliyor musun?",
    "ve umarım ilişkimiz evli bir çift olana kadar sürer."
];

function showNextMessage(step) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '';

    if (step <= messages.length) {
        const messageElement = document.createElement('p');
        messageElement.textContent = messages[step - 1];
        messageContainer.appendChild(messageElement);

        if (step < messages.length) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'devam etmek için basın';
            nextButton.onclick = () => showNextMessage(step + 1);
            messageContainer.appendChild(nextButton);
        } else {
            const endMessage = document.createElement('p');
            endMessage.textContent = 'have a good birthday yavrum, i love you so much! 🎉';
            messageContainer.appendChild(endMessage);
        }
    }
}
