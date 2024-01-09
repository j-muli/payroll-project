function calculateSum() {

    // Get input values
    let basic_salary = (document.getElementById("basic_salary").value) || 0;
    let benefits = (document.getElementById("benefits").value) || 0;


    // Calculate the gross salary
    let gross = basic_salary + benefits;
    document.getElementById("gross").innerText = gross;

    // Calculate nhdf
    let nhdf = (gross * 0.015)
    document.getElementById("nhdf").innerText = nhdf;

    // Calculate nssf
    let nssf = 0;
    if (gross < 18000) {
        nssf = 720
    }
    else if (gross >= 18000) {
        nssf_tier2 = 1440
    }
    document.getElementById("nssf_tier1").innerText = nssf_tier1;
    document.getElementById("nssf_tier2").innerText = nssf_tier2;


    // Calculate nhif
    let nhif = 0;
    if (gross >= 0 && gross <= 5999) {
        nhif = 150
    } else if (gross >= 6000 && gross <= 7999) {
        nhif = 300
    } else if (gross >= 8000 && gross <= 11999) {
        nhif = 400
    } else if (gross >= 12000 && gross <= 14999) {
        nhif = 500
    } else if (gross >= 20000 && gross <= 24999) {
        nhif = 750
    } else if (gross >= 25000 && gross <= 29999) {
        nhif = 850
    } else if (gross >= 30000 && gross <= 34999) {
        nhif = 900
    } else if (gross >= 35000 && gross <= 39999) {
        nhif = 950
    } else if (gross >= 40000 && gross <= 44999) {
        nhif = 1000
    } else if (gross >= 45000 && gross <= 49999) {
        nhif = 1100
    } else if (gross >= 50000 && gross <= 59999) {
        nhif = 100
    } else if (gross >= 60000 && gross <= 69999) {
        nhif = 1300
    } else if (gross >= 70000 && gross <= 79999) {
        nhif = 1400
    } else if (gross >= 80000 && gross <= 89999) {
        nhif = 1500
    } else if (gross >= 90000 && gross <= 99999) {
        nhif = 1600
    } else if (gross >= 100000) {
        nhif = 1700
    }
    document.getElementById("nhif").innerText = nhif;
}

