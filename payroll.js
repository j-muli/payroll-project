let myform = document.getElementById("payroll");
myform.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    let basic_salary = parseFloat(document.getElementById("basic_salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    if (basic_salary.length == 0 || benefits.length == 0) {
        document.getElementById("error").innerText = "insert values"

    } else {
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
            nssf = 1440
        }
        document.getElementById("nssf").innerText = nssf;

        // NHIF Calculation
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


        let taxable_income = gross - (nhif + nhdf + nssf);

        let final_payee = 0;

        if (taxable_income <= 24000) {
            final_payee = 0;
        } else if (taxable_income <= 32333) {
            final_payee = (taxable_income - 24000) * 0.25;
        } else if (taxable_income <= 500000) {
            final_payee = (taxable_income - 32333) * 0.3;
        } else if (taxable_income <= 800000) {
            final_payee = (taxable_income - 500000) * 0.325;
        } else {
            final_payee = (taxable_income - 800000) * 0.35;
        }
        document.getElementById("final_payee").innerText = final_payee;

        let net_pay = gross - (nhif + nhdf + nssf + final_payee);

        document.getElementById("net_pay").innerText = net_pay;


    }


})





