function rank(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  const niveis = [
    { limite: 10, nome: "Ferro" },
    { limite: 20, nome: "Bronze" },
    { limite: 50, nome: "Prata" },
    { limite: 80, nome: "Ouro" },
    { limite: 90, nome: "Diamante" },
    { limite: 100, nome: "Lendário" },
    { limite: Infinity, nome: "Imortal" },
  ];

  const nivel = niveis.find((n) => vitorias <= n.limite).nome;

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
