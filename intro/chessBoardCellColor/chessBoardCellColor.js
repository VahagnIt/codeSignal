function chessBoardCellColor(cell1, cell2) {
    let obj = {
        A: 1, B: 2, C:3, D:4, E:5, F:6, G:7, H:8,
    }
    let c1_isBlack = (!!(obj[cell1[0]] % 2) && !!(cell1[1] % 2)) || (!(obj[cell1[0]] % 2) && !(cell1[1] % 2));
    let c2_isBlack = (!!(obj[cell2[0]] % 2) && !!(cell2[1] % 2)) || (!(obj[cell2[0]] % 2) && !(cell2[1] % 2));
        return !!c1_isBlack == !!c2_isBlack
}
