function validTime(time) {
    return !!time.match(/^([01]\d|2[0-3])\:([0-5]\d)$/)
}