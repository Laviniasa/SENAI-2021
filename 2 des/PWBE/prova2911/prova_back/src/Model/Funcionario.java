package Model;

public class Funcionario {

	private int id;
	private String nome_completo;
	private float matricula;
	private float data_desligamento;
	private int ultimo_salario;
	
	public String getName() {
		return this.nome_completo;
	}

	public void setNome(String nome) {
		this.nome_completo = nome_completo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_completo() {
		return nome_completo;
	}

	public void setNome_completo(String nome) {
		this.nome_completo = nome_completo;
	}

	public float getmatricula() {
		return matricula;
	}

	public void setmatricula(float matricula) {
		this.matricula = matricula;
	}

	public float getAltura() {
		return data_desligamento;
	}

	public void setAltura(float altura) {
		this.data_desligamento = data_desligamento;
	}

	public int getNascimento() {
		return ultimo_salario;
	}

	public void setNascimento(int nascimento) {
		this.ultimo_salario = ultimo_salario;
	}

	public float calcularImc() {
		float imc = this.matricula / (this.data_desligamento * this.data_desligamento);
		return imc;
	}
}
