import * as R from 'ramda'

export const sortHeaders = (e, data) => {
    console.log(e.target.innerText)
    // console.log(data)
    const key = e.target.innerText;
    return key === "Ciudad" || key === "Tipologia"
        ? R.sort(R.ascend(R.prop(key)), data)
        : R.sort(R.descend(R.prop(key.replace(" ", "_"))), data)

    // return data.sort((a, b) => {
    //     if (a[key] < b[key]) {
    //         return -1;
    //     }
    //     if (a[key] > b[key]) {
    //         return 1;
    //     }
    //     return 0;
    // })

};