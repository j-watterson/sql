function verifyCert() {
    let certId = document.getElementById("certId").innerText;
    // Simulate verification (In real scenario, you might call an API)
    setTimeout(() => {
        document.getElementById("verificationResult").style.display = 'block';
        document.getElementById("result").innerText = `Certification ID ${certId} is valid and verified.`;
    }, 2000);
}
