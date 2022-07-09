$(document).ready(function () {
    let botSign = "\u2715"
    let humanSign = "\u25EF"
    let botFirstMove = [4,2,0,8,6]
    let randBotFMove = Math.floor(Math.random() * botFirstMove.length)
    let randWaitTime = Math.floor(Math.random() * (1500-700)+700).toFixed()

    // disable board so bot play first 
    $(".playBox span").css("pointerEvents", "none")
    setTimeout(() => {
        $(".playBox span").eq(botFirstMove[randBotFMove]).text("\u2715").attr("id", "\u2715")
        // $(".playBox span").eq(8).text("\u2715").attr("id", "\u2715")
        addClassActive()
        enablePointerEvent()
    }, 1500);

    // Human playing 
    $(".playBox span").click(function () {
        if ($(this).text() == '') {
            $(this).text("\u25EF").attr("id","\u25EF")
            removeClassActive()
            disablePointerEvent()
            checkWinner("\u25EF")
            setTimeout(() => {
                bot()
            }, randWaitTime);
        }
    })

    // randomize move if player plays center 
    let centerArr = [5,8]
    let centerRand = Math.floor(Math.random() * centerArr.length)
    let cArr = [6,3]
    let cRand = Math.floor(Math.random() * cArr.length)
    let cArr2 = [2,5]
    let cRand2 = Math.floor(Math.random() * cArr2.length)
    let cArr3 = [0,3]
    let cRand3 = Math.floor(Math.random() * cArr3.length)

    // Bot playing 
    function bot() {
        // Winning moves 
        if (getSpanText(0) == botSign && getSpanText(2) == botSign && getSpanText(1) == '') {
            wonMoves(1)
        }
        else if (getSpanText(0) == botSign && getSpanText(1) == botSign && getSpanText(2) == '') {
            wonMoves(2)
        }
        else if (getSpanText(0) == '' && getSpanText(1) == botSign && getSpanText(2) == botSign) {
            wonMoves(0) 
        }
        else if (getSpanText(0) == botSign && getSpanText(3) == botSign && getSpanText(6) == '') {
            wonMoves(6)
        }
        else if (getSpanText(0) == botSign && getSpanText(6) == botSign && getSpanText(3) == '') {
            wonMoves(3)
        }
        else if (getSpanText(0) == '' && getSpanText(6) == botSign && getSpanText(3) == botSign) {
            wonMoves(0) 
        }
        else if (getSpanText(0) == botSign && getSpanText(8) == botSign && getSpanText(4) == '') {
            wonMoves(4)
        }
        else if (getSpanText(0) == botSign && getSpanText(4) == botSign && getSpanText(8) == '') {
            wonMoves(8)
        }
        else if (getSpanText(0) == '' && getSpanText(4) == botSign && getSpanText(8) == botSign) {
            wonMoves(0) 
        }
        else if (getSpanText(1) == botSign && getSpanText(4) == botSign && getSpanText(7) == '') {
            wonMoves(7)
        }
        else if (getSpanText(1) == botSign && getSpanText(4) == '' && getSpanText(7) == botSign) {
            wonMoves(4)
        }
        else if (getSpanText(1) == '' && getSpanText(4) == botSign && getSpanText(7) == botSign) {
            wonMoves(1)
        }
        else if (getSpanText(2) == botSign && getSpanText(5) == botSign && getSpanText(8) == '') {
            wonMoves(8)
        }
        else if (getSpanText(2) == botSign && getSpanText(5) == '' && getSpanText(8) == botSign) {
            wonMoves(5)
        }
        else if (getSpanText(2) == '' && getSpanText(5) == botSign && getSpanText(8) == botSign) {
            wonMoves(2)
        }
        else if (getSpanText(2) == botSign && getSpanText(4) == botSign && getSpanText(6) == '') {
            wonMoves(6)
        }
        else if (getSpanText(2) == botSign && getSpanText(4) == '' && getSpanText(6) == botSign) {
            wonMoves(4)
        }
        else if (getSpanText(2) == '' && getSpanText(4) == botSign && getSpanText(6) == botSign) {
            wonMoves(2)
        }
        else if (getSpanText(3) == '' && getSpanText(4) == botSign && getSpanText(5) == botSign) {
            wonMoves(3)
        }
        else if (getSpanText(3) == botSign && getSpanText(4) == '' && getSpanText(5) == botSign) {
            wonMoves(4)
        }
        else if (getSpanText(3) == botSign && getSpanText(4) == botSign && getSpanText(5) == '') {
            wonMoves(5)
        }
        else if (getSpanText(6) == botSign && getSpanText(7) == botSign && getSpanText(8) == '') {
            wonMoves(8)
        }
        else if (getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(8) == botSign) {
            wonMoves(7)
        }
        else if (getSpanText(6) == '' && getSpanText(7) == botSign && getSpanText(8) == botSign) {
            wonMoves(6)
        }

        // blocking moves 
        else if (getSpanText(0) == humanSign && getSpanText(2) == humanSign && getSpanText(1) == '') {
            allInOne(1)
        }
        else if (getSpanText(0) == humanSign && getSpanText(1) == humanSign && getSpanText(2) == '') {
            allInOne(2)
        }
        else if (getSpanText(0) == '' && getSpanText(1) == humanSign && getSpanText(2) == humanSign) {
            allInOne(0) 
        }
        else if (getSpanText(0) == humanSign && getSpanText(3) == humanSign && getSpanText(6) == '') {
            allInOne(6)
        }
        else if (getSpanText(0) == humanSign && getSpanText(6) == humanSign && getSpanText(3) == '') {
            allInOne(3)
        }
        else if (getSpanText(0) == '' && getSpanText(6) == humanSign && getSpanText(3) == humanSign) {
            allInOne(0) 
        }
        else if (getSpanText(0) == humanSign && getSpanText(8) == humanSign && getSpanText(4) == '') {
            allInOne(4)
        }
        else if (getSpanText(0) == humanSign && getSpanText(4) == humanSign && getSpanText(8) == '') {
            allInOne(8)
        }
        else if (getSpanText(0) == '' && getSpanText(4) == humanSign && getSpanText(8) == humanSign) {
            allInOne(0) 
        }
        else if (getSpanText(1) == humanSign && getSpanText(4) == humanSign && getSpanText(7) == '') {
            allInOne(7)
        }
        else if (getSpanText(1) == humanSign && getSpanText(4) == '' && getSpanText(7) == humanSign) {
            allInOne(4)
        }
        else if (getSpanText(1) == '' && getSpanText(4) == humanSign && getSpanText(7) == humanSign) {
            allInOne(1)
        }
        else if (getSpanText(2) == humanSign && getSpanText(5) == humanSign && getSpanText(8) == '') {
            allInOne(8)
        }
        else if (getSpanText(2) == humanSign && getSpanText(5) == '' && getSpanText(8) == humanSign) {
            allInOne(5)
        }
        else if (getSpanText(2) == '' && getSpanText(5) == humanSign && getSpanText(8) == humanSign) {
            allInOne(2)
        }
        else if (getSpanText(2) == humanSign && getSpanText(4) == humanSign && getSpanText(6) == '') {
            allInOne(6)
        }
        else if (getSpanText(2) == humanSign && getSpanText(4) == '' && getSpanText(6) == humanSign) {
            allInOne(4)
        }
        else if (getSpanText(2) == '' && getSpanText(4) == humanSign && getSpanText(6) == humanSign) {
            allInOne(2)
        }
        else if (getSpanText(3) == '' && getSpanText(4) == humanSign && getSpanText(5) == humanSign) {
            allInOne(3)
        }
        else if (getSpanText(3) == humanSign && getSpanText(4) == '' && getSpanText(5) == humanSign) {
            allInOne(4)
        }
        else if (getSpanText(3) == humanSign && getSpanText(4) == humanSign && getSpanText(5) == '') {
            allInOne(5)
        }
        else if (getSpanText(6) == humanSign && getSpanText(7) == humanSign && getSpanText(8) == '') {
            allInOne(8)
        }
        else if (getSpanText(6) == humanSign && getSpanText(7) == '' && getSpanText(8) == humanSign) {
            allInOne(7)
        }
        else if (getSpanText(6) == '' && getSpanText(7) == humanSign && getSpanText(8) == humanSign) {
            allInOne(6)
        }


        // fill last space moves 
        else if (getSpanText(0) == '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(0)
        }
        else if (getSpanText(0) != '' && getSpanText(1) == '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(1)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) == '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(2)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) == '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(3)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) == '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(4)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) == '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(5)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) == '' && getSpanText(7) != '' && getSpanText(8) != '') {
            allInOne(6)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) == '' && getSpanText(8) != '') {
            allInOne(7)
        }
        else if (getSpanText(0) != '' && getSpanText(1) != '' && getSpanText(2) != '' && getSpanText(3) != '' && getSpanText(4) != '' && getSpanText(5) != '' && getSpanText(6) != '' && getSpanText(7) != '' && getSpanText(8) == '') {
            allInOne(8)
        }


        else if (getSpanIds(0) == botSign) {   
            // play bottom right if center  
            if (getSpanText(4) == humanSign && getSpanText(centerArr[centerRand]) == '' && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(1) == '' && getSpanText(6) == '') {
                allInOne(centerArr[centerRand])
            }
            // play side if center 
            else if  (getSpanText(5) == botSign && getSpanText(7) == '' && getSpanText(8) == '' && getSpanText(2) == '' && getSpanText(1) == '') {
                allInOne(2)
            }
            else if  (getSpanText(5) == botSign && getSpanText(7) == botSign && getSpanText(8) == '' && getSpanText(2) == '' && getSpanText(6) == '') {
                allInOne(8)
            }
            else if  (getSpanText(5) == botSign && getSpanText(7) == botSign && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(6) == '') {
                allInOne(3)
            }
            else if  (getSpanText(5) == botSign && getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(8)
            }
            else if  (getSpanText(5) == botSign && getSpanText(4) == humanSign && getSpanText(8) == humanSign && getSpanText(1) == '' && getSpanText(2) == '') {
                allInOne(2)
            }
            // player plays left edge 
            else if  (getSpanText(3) == humanSign && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(6) == '' && getSpanText(8) == '') {
                allInOne(2)
            }
            else if  (getSpanText(3) == humanSign && getSpanText(4) == ''&& getSpanText(6) == '' && getSpanText(8) == '' && getSpanText(1) == humanSign) {
                allInOne(4)
            }
            //player plays bottom corner 
            else if (getSpanText(6) == humanSign && getSpanText(2) == '' && getSpanText(8) == '' && getSpanText(5) == '' && getSpanText(1) == '') {
                allInOne(8)
            }
            // player plays column 2 row 2 
            else if (getSpanText(1) == humanSign && getSpanText(6) == '' && getSpanText(3) == '' && getSpanText(8) == '' && getSpanText(7) == '') {
                allInOne(6)
            }
            else if (getSpanText(1) == humanSign && getSpanText(4) == '' && getSpanText(3) == humanSign && getSpanText(8) == '' && getSpanText(7) == '') {
                allInOne(8)
            }
            // player plays column 2 row 3 
            else if (getSpanText(7) == humanSign && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(8) == '' && getSpanText(6) == '') {
                allInOne(2)
            }
            // player plays top right corner 
            else if (getSpanText(2) == humanSign && getSpanText(4) == '' && getSpanText(3) == '' && getSpanText(8) == '' && getSpanText(6) == '') {
                allInOne(8)
            }
            // player plays right edge 
            else if (getSpanText(5) == humanSign && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(2)
            }
            // player play bottom right corner 
            else if (getSpanText(8) == humanSign && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(1) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            else if (getSpanText(8) == humanSign && getSpanText(3) == humanSign && getSpanText(4) == '' && getSpanText(1) == '' && getSpanText(2) == '') {
                allInOne(2)
            }
            // this line is for 4 == botSign 
            else if (getSpanText(8) == humanSign && getSpanText(4) == botSign && getSpanText(3) == humanSign && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(0) == botSign) {
                allInOne(2)
            }
            else if (getSpanText(8) == humanSign && getSpanText(4) == botSign && getSpanText(6) == humanSign && getSpanText(3) == '' && getSpanText(1) == humanSign && getSpanText(5) == '') {
                allInOne(5)
            }
            else if (getSpanText(8) == humanSign && getSpanText(4) == botSign && getSpanText(1) == humanSign && getSpanText(2) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            else if (getSpanText(8) == humanSign && getSpanText(4) == botSign && getSpanText(2) == humanSign && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(3) == humanSign) {
                allInOne(7)
            }
            // this line is for 6 == botSign 
            else if (getSpanText(7) == humanSign && getSpanText(6) == botSign && getSpanText(3) == humanSign && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(0) == botSign) {
                allInOne(2)
            }
            else if (getSpanText(2) == humanSign && getSpanText(6) == botSign && getSpanText(3) == humanSign && getSpanText(4) == '' && getSpanText(7) == '' && getSpanText(8) == '' && getSpanText(0) == botSign) {
                allInOne(8)
            }
        }

        //  bot plays on column 3 row 1
        else if (getSpanIds(2) == botSign) {
            // play bottom left if center  
            if (getSpanText(4) == humanSign && getSpanText(cArr[cRand]) == '' && getSpanText(0) == '' && getSpanText(5) == '' && getSpanText(7) == '' && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(cArr[cRand])
            }
            // play edge if center 
            else if (getSpanText(3) == botSign && getSpanText(4) == humanSign && getSpanText(0) == humanSign && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            else if (getSpanText(3) == botSign && getSpanText(4) == humanSign && getSpanText(6) == humanSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(0)
            }
            else if (getSpanText(3) == botSign && getSpanText(7) == botSign && getSpanText(2) == botSign && getSpanText(5) == '' && getSpanText(8) == '' && getSpanText(0) == '') {
                allInOne(8)
            }
            else if (getSpanText(3) == botSign && getSpanText(2) == botSign && getSpanText(1) == '' && getSpanText(0) == '' && getSpanText(8) == '') {
                allInOne(0)
            }
            // player plays first corner 
            else if (getSpanText(0) == humanSign && getSpanText(2) == botSign && getSpanText(4) == '' && getSpanText(6) == '' && getSpanText(8) == '') {
                allInOne(6)
            }
            // player plays left edge 
            else if (getSpanText(3) == humanSign && getSpanText(2) == botSign && getSpanText(4) == '' && getSpanText(0) == '' && getSpanText(1) == '') {
                allInOne(4)
            }
            // player plays bottom left corner 
            else if (getSpanText(6) == humanSign && getSpanText(2) == botSign && getSpanText(5) == '' && getSpanText(0) == '' && getSpanText(8) == '') {
                allInOne(8)
            }
            else if (getSpanText(6) == humanSign && getSpanText(2) == botSign && getSpanText(5) == humanSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(4) == '') {
                allInOne(0)
            }
            // player plays column 2 row 2 
            else if (getSpanText(1) == humanSign && getSpanText(2) == botSign && getSpanText(5) == '' && getSpanText(8) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(8)
            }
            else if (getSpanText(1) == humanSign && getSpanText(2) == botSign && getSpanText(5) == humanSign && getSpanText(7) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            // player plays column 2 row 3 
            else if (getSpanText(7) == humanSign && getSpanText(2) == botSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(0)
            }
            // player plays right edge 
            else if (getSpanText(5) == humanSign && getSpanText(2) == botSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(0)
            }
            // player plays bottom right corner 
            else if (getSpanText(8) == humanSign && getSpanText(2) == botSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(4) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            // this line for botSign == 4 
            else if (getSpanText(6) == humanSign && getSpanText(4) == botSign && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(8) == '' && getSpanText(0) == humanSign && getSpanText(2) == botSign) {
                allInOne(7)
            }
            else if (getSpanText(6) == humanSign && getSpanText(4) == botSign && getSpanText(2) == botSign && getSpanText(5) == humanSign
             && getSpanText(8) == '' && getSpanText(0) == '') {
                allInOne(0)
            }
            else if (getSpanText(6) == humanSign && getSpanText(4) == botSign && getSpanText(2) == botSign && getSpanText(0) == ''
             && getSpanText(3) == '' && getSpanText(5) == '') {
                allInOne(3)
            }
            // this line is for 8 == botSign 
            else if (getSpanText(3) == botSign && getSpanText(8) == botSign && getSpanText(4) == humanSign && getSpanText(1) == '' && getSpanText(0) == '' && getSpanText(2) == botSign) {
                allInOne(0)
            }
            else if (getSpanText(0) == humanSign && getSpanText(5) == humanSign && getSpanText(8) == botSign && getSpanText(2) == botSign && getSpanText(4) == '' && getSpanText(6) == '' && getSpanText(7) == '') {
                allInOne(6)
            }
        }
        
        else if (getSpanText(4) == botSign) {
            // player play first corner 
            if (getSpanText(0) == humanSign && getSpanText(1) == '' && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(4) == botSign && getSpanText(5) == '' && getSpanText(6) == '' && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(8)
            }
            else if (getSpanText(0) == humanSign && getSpanText(4) == botSign && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(6) == humanSign && getSpanText(8) == botSign) {
                allInOne(1)
            }
            else if (getSpanText(0) == humanSign && getSpanText(4) == botSign && getSpanText(7) == humanSign && getSpanText(2) == '' && getSpanText(5) == '' && getSpanText(8) == botSign) {
                allInOne(2)
            }
            else if (getSpanText(0) == humanSign && getSpanText(4) == botSign && getSpanText(7) == humanSign && getSpanText(2) == humanSign && getSpanText(3) == '' && getSpanText(8) == botSign) {
                allInOne(3)
            }
            else if (getSpanText(0) == humanSign && getSpanText(4) == botSign && getSpanText(2) == '' && getSpanText(6) == '' && getSpanText(5) == humanSign && getSpanText(8) == botSign) {
                allInOne(6)
            }
            // player play left edge
            else if (getSpanText(3) == humanSign && getSpanText(1) == '' && getSpanText(2) == '' && getSpanText(0) == '' && getSpanText(4) == botSign && getSpanText(5) == '' && getSpanText(6) == '' && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(6)
            }
            else if (getSpanText(3) == humanSign && getSpanText(4) == botSign && getSpanText(8) == '' && getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(0) == '') {
                allInOne(8)
            }
            // player play bottom left corner
            else if (getSpanText(6) == humanSign && getSpanText(4) == botSign && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(8) == '' && getSpanText(0) == '') {
                allInOne(2)
            }
            // player play column 2 row 
            else if (getSpanText(1) == humanSign && getSpanText(4) == botSign && getSpanText(2) == '' && getSpanText(7) == '' && getSpanText(8) == '' && getSpanText(5) == '') {
                allInOne(2)
            }
            // player plays column 2 row 3 
            else if (getSpanText(7) == humanSign && getSpanText(4) == botSign && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(0) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            else if (getSpanText(7) == humanSign && getSpanText(4) == botSign && getSpanText(2) == humanSign && getSpanText(8) == '' && getSpanText(0) == '' && getSpanText(3) == '') {
                allInOne(0)
            }
            // player plays top right corner 
            else if (getSpanText(2) == humanSign && getSpanText(4) == botSign && getSpanText(6) == '' && getSpanText(8) == '' && getSpanText(0) == '' && getSpanText(7) == '') {
                allInOne(6)
            }
            else if (getSpanText(2) == humanSign && getSpanText(4) == botSign && getSpanText(7) == humanSign && getSpanText(5) == '' && getSpanText(0) == humanSign && getSpanText(8) == '') {
                allInOne(5)
            }
            else if (getSpanText(2) == humanSign && getSpanText(4) == botSign && getSpanText(8) == humanSign && getSpanText(3) == humanSign && getSpanText(1) == '' && getSpanText(7) == '') {
                allInOne(1)
            }
            // player plays bottom right edge
            else if (getSpanText(5) == humanSign && getSpanText(4) == botSign && getSpanText(6) == '' && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(0) == '') {
                allInOne(2)
            }
            // player plays bottom right corner 
            else if (getSpanText(8) == humanSign && getSpanText(4) == botSign && getSpanText(6) == '' && getSpanText(2) == '' && getSpanText(1) == '' && getSpanText(0) == '') {
                allInOne(0)
            }
        }

        else if (getSpanIds(6) == botSign) {
            if (getSpanText(4) == humanSign && getSpanText(cArr2[cRand2]) == '' && getSpanText(0) == '' && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(cArr2[cRand2])
            }
            else if (getSpanText(4) == humanSign && getSpanText(5) == botSign && getSpanText(3) == humanSign && getSpanText(8) == '' && getSpanText(1) == '' && getSpanText(7) == '') {
                allInOne(8)
            }
            else if (getSpanText(4) == humanSign && getSpanText(5) == botSign && getSpanText(3) == humanSign && getSpanText(8) == '' && getSpanText(1) == '' && getSpanText(7) == '') {
                allInOne(8)
            }
            else if (getSpanText(4) == humanSign && getSpanText(5) == botSign && getSpanText(7) == humanSign && getSpanText(8) == '' && getSpanText(2) == '' && getSpanText(0) == '') {
                allInOne(2)
            }
            else if (getSpanText(4) == humanSign && getSpanText(5) == botSign && getSpanText(2) == humanSign && getSpanText(8) == '' && getSpanText(1) == '' && getSpanText(0) == '') {
                allInOne(8)
            }
            else if (getSpanText(4) == humanSign && getSpanText(5) == botSign && getSpanText(2) == humanSign && getSpanText(7) == humanSign && getSpanText(3) == '' && getSpanText(0) == '') {
                allInOne(0)
            }
            // player plays first corner 
            else if (getSpanText(0) == humanSign && getSpanText(1) == '' && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(2)
            }
            // player plays left edge
            else if (getSpanText(3) == humanSign && getSpanText(1) == '' && getSpanText(2) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(8)
            }
            else if (getSpanText(3) == humanSign && getSpanText(6) == botSign && getSpanText(7) == humanSign && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(0) == '') {
                allInOne(4)
            }
            // player plays column 2 row 1
            else if (getSpanText(1) == humanSign && getSpanText(3) == '' && getSpanText(2) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == botSign && getSpanText(7) == '' && getSpanText(8) == '') {
                allInOne(8)
            }
            // player plays column 2 row 3
            else if (getSpanText(7) == humanSign && getSpanText(3) == '' && getSpanText(2) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == botSign && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(0)
            }
            // player plays top right corner 
            else if (getSpanText(2) == humanSign && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == botSign && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(0)
            }
            // player plays right edge
            else if (getSpanText(5) == humanSign && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(6) == botSign && getSpanText(1) == '' && getSpanText(8) == '') {
                allInOne(8)
            } 
            else if (getSpanText(5) == humanSign && getSpanText(6) == botSign && getSpanText(7) == humanSign && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(0) == '') {
                allInOne(4)
            }
            // player plays bottom right corner 
            else if (getSpanText(8) == humanSign && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(0) == '' && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(6) == botSign && getSpanText(1) == '' && getSpanText(5) == '') {
                allInOne(2)
            } 
        }
        
        else if (getSpanText(8) == botSign) {
            if (getSpanText(4) == humanSign && getSpanText(cArr3[cRand3]) == '' && getSpanText(2) == '' && getSpanText(5) == '' && getSpanText(7) == '' && getSpanText(1) == '' && getSpanText(6) == '') {
                allInOne(cArr3[cRand3])
            }
            else if (getSpanText(0) == humanSign && getSpanText(3) == botSign && getSpanText(8) == botSign && getSpanText(2) == '' && getSpanText(5) == '') {
                allInOne(2)
            }
            else if (getSpanText(4) == humanSign && getSpanText(3) == botSign && getSpanText(8) == botSign && getSpanText(2) == '' && getSpanText(0) == '' && getSpanText(6) == '') {
                allInOne(6)
            }
            // player plays top left corner
            else if (getSpanText(0) == humanSign && getSpanText(3) == '' && getSpanText(7) == '' && getSpanText(2) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == '' && getSpanText(1) == '' && getSpanText(8) == botSign) {
                allInOne(2)
            }
            // player plays left edge
            else if (getSpanText(3) == humanSign && getSpanText(0) == '' && getSpanText(7) == '' && getSpanText(2) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(6) == '' && getSpanText(1) == '' && getSpanText(8) == botSign) {
                allInOne(6)
            }
            // player plays bottom left corner
            else if (getSpanText(6) == humanSign && getSpanText(0) == '' && getSpanText(7) == '' && getSpanText(2) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(3) == '' && getSpanText(1) == '' && getSpanText(8) == botSign) {
                allInOne(2)
            }
            // player plays column 2 row 1   
            else if (getSpanText(1) == humanSign && getSpanText(0) == '' && getSpanText(7) == '' && getSpanText(2) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(3) == '' && getSpanText(6) == '' && getSpanText(8) == botSign) {
                allInOne(6)
            }
            // player plays column 2 row 3
            else if (getSpanText(7) == humanSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(2) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(3) == '' && getSpanText(6) == '' && getSpanText(8) == botSign) {
                allInOne(2)
            }  
            // player plays top right corner
            else if (getSpanText(2) == humanSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(4) == '' && getSpanText(5) == '' && getSpanText(3) == '' && getSpanText(6) == '' && getSpanText(8) == botSign) {
                allInOne(0)
            }       
            // player plays right edge          
            else if (getSpanText(5) == humanSign && getSpanText(0) == '' && getSpanText(1) == '' && getSpanText(7) == '' && getSpanText(4) == '' && getSpanText(2) == '' && getSpanText(3) == '' && getSpanText(6) == '' && getSpanText(8) == botSign) {
                allInOne(6)
            }   
        }
    }

    // get span id 
    function getSpanIds(n) {
        return $(".playBox span").eq(n).attr("id")
    }

    // get span text
    function getSpanText(x) {
        return $(".playBox span").eq(x).text()
    }

    // set span text
    function setSpanText(n, x, d) {
        return $(".playBox span").eq(x).text(n).attr("id",n)
    }

    // disable pointerEvent 
    function disablePointerEvent() {
        return $(".playBox span").css("pointerEvents", "none")
    }

    // enable pointerEvent
    function enablePointerEvent() {
        return $(".playBox span").css("pointerEvents", "auto")
    }

    // add class active 
    function addClassActive() {
        return $(".players").addClass("active")
    }

    // remove class active 
    function removeClassActive() {
        return $(".players").removeClass("active")
    }

    // Switch slide
    function switchSides(sideSwitch) {
        if (sideSwitch == '\u25EF') {
            return removeClassActive()
        } else {
            return addClassActive()
        }
    }

    // combine repetition function 
    function allInOne(boxNum) {
        return (
            setSpanText(botSign, boxNum),
            checkWinner(botSign),
            switchSides(botSign),
            enablePointerEvent()
        )
    }

    // winning moves to stop sliding 
    function wonMoves(boxNum) {
        return (
            setSpanText(botSign, boxNum),
            checkWinner(botSign)
        )
    }

    // check winner 
    function checkWinner(n) {
        let el = $(".playBox span")
        if (gCondition(el,0) == n && gCondition(el,1) == n && gCondition(el,2) == n) {
           winnerTest(n)
        } else {
            if (gCondition(el,3) == n && gCondition(el,4) == n && gCondition(el,5) == n) {
                winnerTest(n)
            } else {
                if (gCondition(el,6) == n && gCondition(el,7) == n && gCondition(el,8) == n) {
                    winnerTest(n)
                } else {
                    if (gCondition(el,0) == n && gCondition(el,3) == n && gCondition(el,6) == n) {
                        winnerTest(n)
                    }  else {
                        if (gCondition(el,1) == n && gCondition(el,4) == n && gCondition(el,7) == n) {
                            winnerTest(n)
                        } else {
                            if (gCondition(el,2) == n && gCondition(el,5) == n && gCondition(el,8) == n) {
                                winnerTest(n)
                            } else {
                                if (gCondition(el,0) == n && gCondition(el,4) == n && gCondition(el,8) == n) {
                                    winnerTest(n)
                                } else {
                                    if (gCondition(el,2) == n && gCondition(el,4) == n && gCondition(el,6) == n) {
                                        winnerTest(n)
                                    } else {
                                        if (el.eq(0).text() != '' && el.eq(1).text() != '' && el.eq(2).text() != ''
                                        && el.eq(3).text() != '' && el.eq(4).text() != '' && el.eq(5).text() != ''
                                        && el.eq(6).text() != '' && el.eq(7).text() != '' && el.eq(8).text() != ''){
                                            setTimeout(() => {
                                                $(".board").hide()
                                                $(".winner").fadeIn()
                                                $(".winner h3").text("Game Draw")
                                            }, 800);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function gCondition(ele, num) {
        return  ele.eq(num).attr("id")
    }

    function winnerTest(n) {
        return (
            $(".playBox span").css("pointerEvents","none"),
            setTimeout(() => {
                $(".board").hide()
                $(".winner").fadeIn()
                $(".winner h3").text(`Player ${n} Won`)
            }, 800)
        )
    }

    // start game again 
    $(".winner button").click(function() {
        location.href = "index.html"
    })

    // play easy level 
    $(".playEasy button").click(function() {
        location.href = "../index.html"
    })
})

// Copyright 2022 21base 