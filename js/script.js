window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Timer
    let deadline = '2019-12-31';

    //Get the amount of time (total, days, hours, minutes, seconds) to the deadline
    function getTimeRemaining(endtime) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor(t/1000/60/60/24);
        
        return {
            'total' : t,
            'hours' : hours,
            'days' : days,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    //Function for timer setting.
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            clockSepar = timer.querySelector('.clock-sep'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);

            if(t.days > 0) {
                if(String(t.days).length == 1) {
                    days.textContent = '0' + t.days;
                } else {
                    days.textContent = t.days;
                }
                clockSepar.classList.remove('hidden');
                clockSepar.classList.add('showed');
            } else {
                clockSepar.classList.remove('showed');
                clockSepar.classList.add('hidden');
            }
            

            if(String(t.hours).length == 1) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if(String(t.minutes).length == 1) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if(String(t.seconds).length == 1) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            //Clear and stop timer if deadline is over
            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    //Initialize the timer. 
    //Two parameters: element's ID and deadline date
    setClock('timer', deadline);

});