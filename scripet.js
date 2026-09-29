
let total = Number(prompt("قديش مشترياتك (بالشيكل)؟"));

let discount = 0;

if (isNaN(total) || total <= 0) {
    alert("الرجاء إدخال رقم صحيح.");
} else {
    if (total > 200) {

        discount = total * 0.15;

        if (discount > 100) {
            discount = total * 0.08;
        }

        if (discount > 100) {
            discount = 100;
        }
    }

    let finalPrice = total - discount;

    alert("المشتريات: " + total + " شيكل");
    alert("الخصم: " + discount + " شيكل");
    alert("المبلغ المطلوب: " + finalPrice + " شيكل");
}
