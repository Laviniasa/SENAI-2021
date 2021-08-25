package Class;

public class Orca {
	private int id, qtde, frete;
	private String dia, frn, prod;
	private double preco;

	public Orca(int id, int qtde, String dia, String frn, String prod, double preco) {
		super();
		this.id = id;
		this.qtde = qtde;
		this.dia = dia;
		this.frn = frn;
		this.prod = prod;
		this.preco = preco;
	}

	public int getFrete() {
		return frete;
	}

	public void setFrete(int frete) {
		this.frete = frete;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQtde() {
		return qtde;
	}

	public void setQtde(int qtde) {
		this.qtde = qtde;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public String getFrn() {
		return frn;
	}

	public void setFrn(String frn) {
		this.frn = frn;
	}

	public String getProd() {
		return prod;
	}

	public void setProd(String prod) {
		this.prod = prod;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dia == null) ? 0 : dia.hashCode());
		result = prime * result + ((frn == null) ? 0 : frn.hashCode());
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(preco);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((prod == null) ? 0 : prod.hashCode());
		result = prime * result + qtde;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Orca other = (Orca) obj;
		if (dia == null) {
			if (other.dia != null)
				return false;
		} else if (!dia.equals(other.dia))
			return false;
		if (frn == null) {
			if (other.frn != null)
				return false;
		} else if (!frn.equals(other.frn))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(preco) != Double.doubleToLongBits(other.preco))
			return false;
		if (prod == null) {
			if (other.prod != null)
				return false;
		} else if (!prod.equals(other.prod))
			return false;
		if (qtde != other.qtde)
			return false;
		return true;
	}

	double getSubTotal() {

		return (double) preco * qtde;

		/*
		 * String acumulador = ""; acumulador += "Id\tQtde\tDia\tFrn\tProd\tPreço"; int
		 * indice = 0; for (Orca o : ProcessaOrcamentos.orcamentos) { acumulador +=
		 * indice + "\t" +o.toString(); indice++; } acumulador += "Total de DENERO: " +
		 * ProcessaOrcamentos.tempoTotal();
		 * 
		 * return acumulador; return id;
		 */
	}

	@Override
	public String toString() {
		return "ID " + id + " Produto " + prod + " Estoque " + qtde + " Frete " + frete + " Dia " + dia + " Fornecedor "
				+ frn + " Preço " + preco + "  " + String.format("%.1f", getSubTotal()) + "\n";
	}

}
