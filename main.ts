function kana () {
    katakana.showString("ﾃｽﾄ")
    katakana.setScrollTime(500)
}
basic.forever(function () {
    kana()
})
