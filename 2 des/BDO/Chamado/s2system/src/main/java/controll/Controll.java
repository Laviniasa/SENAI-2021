package controll;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import model.ChamadoModel;

public class Controll {
	
	public String cadastrar(ChamadoModel cm) {
		
			BufferedWriter bw;
			try {
				bw = new BufferedWriter(new FileWriter("d:/base.csv", true));
				
				bw.write(cm.toCsv());
				
				bw.close();
				
				return cm.toCsv();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		return "";
	}

	public String listar() {
		try {
			BufferedReader br = new BufferedReader( new FileReader("d:/base.csv"));
			String linha = "";
			String retorno = "";
			
			while( (linha = br.readLine()) != null ) {
				retorno += linha +"\r\n";
			}
			
			boolean excluir(String id) {
				try {
					BufferedReader br = new BufferedReader(new FileReader("d:/base.csv"));
					BufferedWriter bw = new BufferedWriter(new FileWriter("d:/base.csv", false));
					String linha = "";
					while((linha = br.readLine()))
						String[] colunas = linha.split(";");
					if(colunas[0]!= id) {
						bw.write(linha);
					}
					br.close();
					bw.close();
					return true;
				}
			}catch ()
				return false;
			}
			
			 return retorno;
		}catch (Exception e ) {
			e.printStackTrace();
		}
		return "";
	}
	
}
