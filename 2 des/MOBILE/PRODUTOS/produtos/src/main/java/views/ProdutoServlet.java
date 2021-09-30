package views;

import java.io.IOException;

import controllers.ProdutoProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.Produto;

@WebServlet("/produtorest")
public class ProdutoServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ProdutoProcess.iniciar();
		for(int i = 0; i < 5; i++) {
		for(Produto p: ProdutoProcess.produtos) {
			resp.getWriter().print(ProdutoProcess.produtos.get(i).toString());
		}
	}
}


