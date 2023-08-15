const n = 15;
let n1 = 0, n2 = 1, proximoNumero;

for (let i = 1; i <= n; i++) {
    console.log(n1);
    proximoNumero = n1 + n2;
    n1 = n2;
    n2 = proximoNumero;
}