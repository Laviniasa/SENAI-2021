package view;

import java.io.IOException;
import java.util.stream.Collectors;

import org.json.JSONException;
import org.json.JSONObject;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Aluno;

@WebServlet("/aluno")
public class AlunoHttp extends HttpServlet {
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		Aluno a = new Aluno();
		a.setNome(obj.getString("nome"));
		try {
			JSONObject obj = new JSONObject(body);
			
			String nome = obj.getString("nome");
			float peso = (float) obj.getDouble("peso");
			float altura = (float) obj.getDouble("altura");
			int nascimento = obj.getint("nascimento");

			Aluno a = new Aluno();
			a.setNome(nome);
			a.setPeso(peso);
			a.setAltura(altura);
			a.setNascimento(nascimento);
			a.setNome(obj.getString("nome"));
			 
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
}
