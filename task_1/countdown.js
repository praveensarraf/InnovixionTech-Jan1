document.addEventListener('DOMContentLoaded', function () {
            
    const targetDate = new Date('August 15, 2024 00:00:00').getTime();

    const countdownInterval = setInterval(function () {
        
        const currentDate = new Date().getTime();

        const remainingTime = targetDate - currentDate;

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (remainingTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'EXPIRED';
        }

    }, 1000);
});