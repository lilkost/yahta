export const accordion = () => {
    const buttons = document.querySelectorAll(".product__btn"),
        lists = document.querySelectorAll(".product__list");

    if (buttons && lists) {
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const attr = btn.getAttribute("data-btn");
                lists.forEach(list => {
                    const attrList = list.getAttribute("data-body");
                    if (attrList === attr) {
                        list.classList.add("is-open")
                    } else {
                        list.classList.remove("is-open")
                    }
                    buttons.forEach(b => {
                        if (b === btn) {
                            b.classList.add("is-open")
                        } else {
                            b.classList.remove("is-open");
                        }
                    })
                })
                // data-body
                // data-btn
            });
        })
    }
}