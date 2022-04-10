    function randomsoal()
    {
    //ambil data level
    const level = document.getElementById("level").value;
    //cek data level
        if (level == 'Easy') {
            max = '10';
            min = '1';
            time = '5';
        } else if (level == 'Medium') {
            max = '100';
            min = '10';
            time = '10';
        } else if (level == 'Hard') {
            max = '1000';
            min = '100';
            time = '15'
        }
        //buat ramdom soal
        const soalY = Math.floor((Math.random() * (max-min)) + 1);
        const soalX = Math.floor((Math.random() * (max-min)) + 1);
        //tampilkan soal
        document.getElementById("soal1").innerHTML = soalX;
        document.getElementById("soal2").innerHTML = soalY;
    }
            //function countdown
        function countDown() {
        if(time > 0) {
            document.getElementById("time").innerHTML = time;
        } else if(time <= 0) {
            alert("Game Over!" + " Score Kamu : " + document.getElementById("score").innerHTML);
            window.location='../index.html';
            return;
        }
        time -= 1;
        setTimeout("countDown()",1000);
        return;
        }

    $('#form-name').submit(function()
    {

        $("#cardName").attr("hidden","1");
        $("#soal").removeAttr('hidden');
        //ambil data nama
        const nama = document.getElementById('namakamu').value;
        document.getElementById("tampilnama").innerHTML = nama;
        //ambil data level
        const level = document.getElementById('level').value;
        document.getElementById("tampillevel").innerHTML = level;
        //ambil operasi
        const op = document.getElementById('operation').value;
        document.getElementById("op").innerHTML = op;
        //generate soal
        countDown();
        randomsoal();


        //point
        let score = 0;
        document.getElementById("score").innerHTML = score;

        $('#submitAnswer').submit(function(){
            const soal1 = document.getElementById('soal1').innerHTML;
            const soal2 = document.getElementById('soal2').innerHTML;
            const jawab = document.getElementById('jawabanmu').value;
            // console.log(jawab);
            // console.log(soal1);
            // console.log(soal2);
            // console.log(op);

            //cek operator hitung
            if(op == '+'){
                result = Number(soal1) + Number(soal2);
                // console.log(result);
            }else if(op == '-'){
                 result = Number(soal1) - Number(soal2);
                // console.log(result);
            } else if(op == '*'){
                 result = Number(soal1) * Number(soal2);
                // console.log(result);
            } else if(op == '/'){
                 result = Number(soal1) / Number(soal2);
                // console.log(result);
            }

            if(result == jawab){
                score = score+1;
                //historyset
                status = 'Benar';
                c = 'success'
                alert('Jawaban anda benar');
            } else {
                score = score-1;
                //historyset
                status = 'Salah';
                c = 'danger'
                if(document.getElementById("score").innerHTML == 0){
                    alert("Game Over!");
                    window.location='../index.html';
                } else {
                    alert('Oppss... Jawaban anda salah !');
                }
            }
              $(".your-history").append('<li>'+soal1+' '+op+' '+soal2+' = '+jawab+' | <b class="text-'+c+' mr-3">'+status+'</b> hasil : <b>'+result+'</b></li>');
            document.getElementById("score").innerHTML = score;
            //generate soal baru lagi
            randomsoal();
            //kosongkan value dan autofocus ke form input
            document.getElementById('jawabanmu').value = '';
            document.getElementById('jawabanmu').focus();
            });
        //autofocus
        document.getElementById('jawabanmu').focus();
    });