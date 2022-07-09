$(document).ready(function () {
    $(".signs button").click(function () {
        $(".select").slideUp()
        $(".board").fadeIn()
        $(".playHard").fadeOut()

        if (this.id == 'o') {
            $(".players").addClass("active")
        }
    })

    let someoneWin = 0
    let waitTime = Math.floor(Math.random() * (1000-500)+500)

    // Human playing 
    $(".board span").click(function (){
        if ($(".players").hasClass("active")) {
            if ($(this).text() == '') {
                $(this).text("\u25EF")
                $(this).attr("id", "O")
                
                checkWinner('O')
                if (someoneWin == 0) {
                    $(".players").removeClass("active")
                    $(".playBox span").css("pointerEvents", "none")
                    setTimeout(() => {
                        bot('O')
                    }, waitTime);
                }
            } 
        } else {
            if ($(this).text() == '') {
                $(this).text("\u2715")
                $(this).attr("id", "X")

                checkWinner('X')
                if (someoneWin == 0) {
                    $(".players").addClass("active")
                    $(".playBox span").css("pointerEvents", "none")
                    setTimeout(() => {
                        bot('X')
                    }, waitTime);
                }
            }
        }
    })

    // bot playing
    function bot(n) {
        let arr = []
        $(".playBox span").filter(function (i,obj) {
            if ($(this).text() == '') {
                arr.push($(this))
            }
        })

        let rand = Math.floor(Math.random() * arr.length)
        if (arr.length != 0) {
            if (n == 'X') {
                arr[rand].text("\u25EF").attr("id", "O")
                checkWinner('O')
                if (someoneWin == 0) {
                    $(".playBox span").css("pointerEvents", "auto")
                    $(".players").removeClass("active")
                }
            } else {
                arr[rand].text("\u2715").attr("id", "X")
                checkWinner('X')
                if (someoneWin == 0) {
                    $(".playBox span").css("pointerEvents", "auto")
                    $(".players").addClass("active")
                }
            }
        }       
    }

    // check winner 
    function checkWinner(n) {
        let el = $(".playBox span")
        if (gCondition(el,0) == n && gCondition(el,1) == n && gCondition(el,2) == n) {
            someoneWin = 1
            $(".playBox span").css("pointerEvents","none")
            setTimeout(() => {
                $(".board").hide()
                $(".winner").fadeIn()
                $(".winner h3").text(`Player ${n} Won`)
            }, 800);
        } else {
            if (gCondition(el,3) == n && gCondition(el,4) == n && gCondition(el,5) == n) {
                someoneWin = 1
                $(".playBox span").css("pointerEvents","none")
                setTimeout(() => {
                    $(".board").hide()
                    $(".winner").fadeIn()
                    $(".winner h3").text(`Player ${n} Won`)
                }, 800);
            } else {
                if (gCondition(el,6) == n && gCondition(el,7) == n && gCondition(el,8) == n) {
                    someoneWin = 1
                    $(".playBox span").css("pointerEvents","none")
                        setTimeout(() => {
                        $(".board").hide()
                        $(".winner").fadeIn()
                        $(".winner h3").text(`Player ${n} Won`)
                    }, 800);
                } else {
                    if (gCondition(el,0) == n && gCondition(el,3) == n && gCondition(el,6) == n) {
                        someoneWin = 1
                        $(".playBox span").css("pointerEvents","none")
                        setTimeout(() => {
                            $(".board").hide()
                            $(".winner").fadeIn()
                            $(".winner h3").text(`Player ${n} Won`)
                        }, 800);
                    }  else {
                        if (gCondition(el,1) == n && gCondition(el,4) == n && gCondition(el,7) == n) {
                            someoneWin = 1
                            $(".playBox span").css("pointerEvents","none")
                            setTimeout(() => {
                                $(".board").hide()
                                $(".winner").fadeIn()
                                $(".winner h3").text(`Player ${n} Won`)
                            }, 800);
                        } else {
                            if (gCondition(el,2) == n && gCondition(el,5) == n && gCondition(el,8) == n) {
                                someoneWin = 1
                                $(".playBox span").css("pointerEvents","none")
                                setTimeout(() => {
                                    $(".board").hide()
                                    $(".winner").fadeIn()
                                    $(".winner h3").text(`Player ${n} Won`)
                                }, 800);
                            } else {
                                if (gCondition(el,0) == n && gCondition(el,4) == n && gCondition(el,8) == n) {
                                    someoneWin = 1
                                    $(".playBox span").css("pointerEvents","none")
                                    setTimeout(() => {
                                        $(".board").hide()
                                        $(".winner").fadeIn()
                                        $(".winner h3").text(`Player ${n} Won`)
                                    }, 800);
                                } else {
                                    if (gCondition(el,2) == n && gCondition(el,4) == n && gCondition(el,6) == n) {
                                        someoneWin = 1
                                        $(".playBox span").css("pointerEvents","none")
                                        setTimeout(() => {
                                            $(".board").hide()
                                            $(".winner").fadeIn()
                                            $(".winner h3").text(`Player ${n} Won`)
                                        }, 800);
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

    // function to be used in if statement to avoid repetition  
    function gCondition(ele, num) {
        return  ele.eq(num).attr("id")
    }

    // start game again 
    $(".winner button").click(function() {
        location.href = "index.html"
    })

    // play hard level 
    $(".playHard button").click(function() {
        location.href = "hardLevel/index.html"
    })
})

// Copyright 2022 21base 






