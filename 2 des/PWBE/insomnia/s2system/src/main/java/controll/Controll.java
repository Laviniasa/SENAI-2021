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
			
			br.close();
			
			 return retorno;
		}catch (Exception e ) {
			e.printStackTrace();
		}
		return "";
	}
	
}
