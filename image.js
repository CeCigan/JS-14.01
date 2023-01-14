
        var image = new Image();
        image.onload = function(){
            setInterval(move,100);
        };
        image.src = 'smile.png';
        var x5 = 10;
        function move(){
            if (x5<200) x5 +=5;
            else x5=10;
            ctx5.clearRect(0,0,canvas5.width, canvas5.height);
            ctx5.drawImage(image,x5,10,80,80);
        }