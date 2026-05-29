// script.js
const checkVoter = () => {
    let user_age = document.getElementById('input_val').value;
    let out = document.getElementById('screen');
    
    let msg = (user_age >= 18) ? "ACCESO CONCEDIDO A VOTACIÓN" : "EDAD INSUFICIENTE";
    out.innerText = `STATUS: ${msg}`;
}

const processSalary = () => {
    let t_hrs = parseFloat(document.getElementById('hrs').value);
    let r_pay = parseFloat(document.getElementById('rate').value);
    let net_total = 0;

    if(t_hrs > 40) {
        let diff = t_hrs - 40;
        net_total = (40 * r_pay) + (diff * (r_pay * 2));
    } else {
        net_total = t_hrs * r_pay;
    }
    document.getElementById('view').innerText = `TOTAL SEMANA: $${net_total}`;
}

const giftFinder = () => {
    let budget = parseFloat(document.getElementById('wallet').value);
    let choice = "";

    if(budget <= 10) choice = "Tarjeta";
    else if(budget <= 100) choice = "Chocolates";
    else if(budget <= 250) choice = "Flores";
    else choice = "Anillo";

    document.getElementById('msg').innerText = `REGALO RECOMENDADO: ${choice}`;
}

const parkingFee = () => {
    let qty_h = Math.ceil(document.getElementById('time_in').value);
    let cost = 0;

    if (qty_h <= 2) cost = qty_h * 5;
    else if (qty_h <= 5) cost = 10 + (qty_h - 2) * 4;
    else if (qty_h <= 10) cost = 10 + 12 + (qty_h - 5) * 3;
    else cost = 10 + 12 + 15 + (qty_h - 10) * 2;

    document.getElementById('ticket').innerText = `TOTAL A PAGAR: $${cost}`;
}

const findYoungest = () => {
    let p1 = { n: document.getElementById('nom1').value, e: parseInt(document.getElementById('ed1').value) };
    let p2 = { n: document.getElementById('nom2').value, e: parseInt(document.getElementById('ed2').value) };
    let p3 = { n: document.getElementById('nom3').value, e: parseInt(document.getElementById('ed3').value) };

    let tiny = p1;
    if(p2.e < tiny.e) tiny = p2;
    if(p3.e < tiny.e) tiny = p3;

    document.getElementById('result').innerText = `MENOR: ${tiny.n} (${tiny.e} años)`;
}

const applyPromo = () => {
    let raw_price = parseFloat(document.getElementById('price').value);
    let dsc = 0;

    if(raw_price >= 200) dsc = 0.15;
    else if(raw_price > 100) dsc = 0.12;
    else dsc = 0.10;

    let final_val = raw_price * (1 - dsc);
    document.getElementById('info').innerText = `FINAL: $${final_val.toFixed(2)} (Ahorro: ${(dsc*100)}%)`;
}

const scholarshipLogic = () => {
    let a = parseInt(document.getElementById('age').value);
    let g = parseFloat(document.getElementById('grade').value);
    let grant = 0;

    if(a > 18) {
        grant = (g >= 9) ? 2000 : (g >= 7.5) ? 1000 : (g >= 6) ? 500 : 0;
    } else {
        grant = (g >= 9) ? 3000 : (g >= 8) ? 2000 : (g >= 6) ? 100 : 0;
    }
    
    document.getElementById('out').innerText = grant > 0 ? `Beca: $${grant}` : "Carta enviada.";
}

const companyBonus = () => {
    let sal = parseFloat(document.getElementById('s').value);
    let yrs = parseFloat(document.getElementById('y').value);

    let b_yrs = (yrs > 2 && yrs < 5) ? sal * 0.2 : (yrs >= 5) ? sal * 0.3 : 0;
    let b_sal = (sal < 1000) ? sal * 0.25 : (sal <= 3500) ? sal * 0.15 : sal * 0.1;

    let winner = Math.max(b_yrs, b_sal);
    document.getElementById('res').innerText = `Bono Asignado: $${winner}`;
}

const insuranceQuote = () => {
    let base = (document.getElementById('type').value === 'A') ? 1200 : 950;
    let extra = 0;

    if(document.getElementById('drink').checked) extra += 0.1;
    if(document.getElementById('glass').checked) extra += 0.05;
    if(document.getElementById('sick').checked) extra += 0.05;
    
    extra += (parseInt(document.getElementById('age').value) > 40) ? 0.2 : 0.1;

    document.getElementById('total').innerText = `COTIZACIÓN: $${base * (1 + extra)}`;
}

const travelPlan = () => {
    let km_rate = parseFloat(document.getElementById('km').value);
    let cash = parseFloat(document.getElementById('money').value);
    
    const dest = [
        { name: "Cancún", d: 1800 }, { name: "Acapulco", d: 1200 }, 
        { name: "PV", d: 800 }, { name: "México", d: 750 }
    ];

    let place = "Casa";
    for(let i of dest) {
        if(cash >= (i.d * km_rate * 2)) {
            place = i.name;
            break; 
        }
    }
    document.getElementById('dest').innerText = `LUGAR: ${place}`;
}

const storeBounty = () => {
    let seniority = parseInt(document.getElementById('years').value);
    let amt = 0;

    if(seniority > 5) amt = 1000;
    else if(seniority > 0) amt = seniority * 100;

    document.getElementById('pay').innerText = `RECOMPENSA: $${amt}`;
}

const triplePayCalc = () => {
    let h = parseFloat(document.getElementById('h').value);
    let p = parseFloat(document.getElementById('p').value);
    let total = 0;

    if(h > 50) return alert("No permitido");

    if(h <= 40) total = h * p;
    else if(h <= 45) total = (40 * p) + (h - 40) * p * 2;
    else total = (40 * p) + (5 * p * 2) + (h - 45) * p * 3;

    document.getElementById('v').innerText = `PAGO: $${total}`;
}

const schoolTrip = () => {
    let n = parseInt(document.getElementById('kids').value);
    let fee = (n > 100) ? 20 : (n >= 50) ? 35 : (n >= 20) ? 40 : 70;

    document.getElementById('info').innerText = `PAGO POR ALUMNO: $${fee}`;
}