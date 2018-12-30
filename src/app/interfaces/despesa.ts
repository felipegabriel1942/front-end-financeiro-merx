export interface Despesa {
    id: number;
    fkUsuario: number;
    fkTipoDespesa: number;
    descricao: string;
    valor: number;
    anoMes: string;
}
