package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONObject;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cliente")
public class Cliente extends HttpServlet {

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		JSONObject cli1 = new JSONObject("{'id':1, 'nome':'fulano da silva'}");
		JSONObject cli2 = new JSONObject("{'id':2, 'nome':'beltrano da rocha'}");
		
		
		JSONArray arr = new JSONArray();
		
		arr.put(cli1);
		arr.put(cli2);

		PrintWriter pw = resp.getWriter();
		
		pw.write (arr.toString());		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String data= req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		System.out.println(req.getReader().lines().collect(Collectors.joining(System.lineSeparator())));
		
		JSONObject cli = new JSONObject(data);
		
		cli.put("id", 3);
		
		PrintWriter pw = resp.getWriter();
		
		pw.write(cli.toString());
	}
}



