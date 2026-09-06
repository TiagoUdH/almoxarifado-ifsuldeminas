export function getStatusEstoque(quantidade, minimo, short = false) {
  if (quantidade <= minimo) return { cor: '#ff4444', texto: short ? 'Baixo' : 'Estoque Baixo' };
  if (quantidade <= minimo * 2) return { cor: '#ffaa00', texto: 'Atenção' };
  return { cor: '#00C851', texto: 'Normal' };
}
