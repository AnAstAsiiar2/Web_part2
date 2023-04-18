var days, seconds, weeks;
function difference_of_data(year){
    //теперішня дата
    let now = new Date();
    //теперішній рік
    if (typeof year === 'undefined') { year = now.getFullYear(); }

    // 1 січня n року, 00:00:00
    let date = new Date(year, 0, 1, 0, 0, 0, 0);
    let milliseconds_passed = now.getTime() - date.getTime();

    // Переводимо мілісекунди в дні
     days =Math.floor(milliseconds_passed / 1000 / 60 / 60 / 24);
    //переводимо дні в тижні
     
    if(days>6){ weeks = Math.floor(days/7);}
    seconds = Math.floor(milliseconds_passed/1000);
}

difference_of_data(2020);console.log(`Від початку 2020 року минуло ${days} днів, або ${weeks} тижнів, або ${seconds} секунд`);
difference_of_data(1995);console.log(`Від початку 1995 року минуло ${days} днів, або ${weeks} тижнів, або ${seconds} секунд`);
difference_of_data();console.log(`Від початку цього року минуло ${days} днів, або ${weeks} тижнів, або ${seconds} секунд`);
