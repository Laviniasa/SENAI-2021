package Controller;

public class FuncionarioProcess {

	package controller;

	import java.sql.Connection;
	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import java.sql.SQLException;

	import org.json.JSONArray;
	import org.json.JSONException;
	import org.json.JSONObject;

	import Model.Funcionario;

	public class FuncionarioProcess {

		private Connection con;
		private ResultSet rs;
		
		public funcionarioProcess() {
			this.con = new ConnectionDB().getConnection();
		}
		
		public JSONArray readAll() {
			JSONArray arr = new JSONArray();
			
			String query = "SELECT * FROM funcionario";
			
			try {
				PreparedStatement ps = con.prepareStatement(query);
				
				rs = ps.executeQuery();
				
				while(rs.next()) {
					JSONObject obj = new JSONObject();
					obj.put("id", rs.getInt(1));
					obj.put("nome_completo", rs.getString(2));
					obj.put("matricula", rs.getFloat(3));
					obj.put("data_desligamento", rs.getFloat(4));
					obj.put("ultimo_salario", rs.getInt(5));
					
					arr.put(obj);
				}
				
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return arr;		
		}
		
		public boolean create(funcionario funcionario) {
			String query = "INSERT INTO funcionario VALUES (DEFAULT,?,?,?,?)";
			
			try {
				
				PreparedStatement ps = con.prepareStatement(query);
				
				ps.setString(1, Funcionario.getNome_completo());
				ps.setFloat(2, Funcionario.getmatricula());
				ps.setFloat(3, Funcionario.getdata_desligamento());
				ps.setInt(4, Funcionario.getultimo_salario());
				
				if (ps.executeUpdate() > 0) {
					rs = ps.getGeneratedKeys();
					rs.next();
					int novoId = rs.getInt(1);
					funcionario.setId(novoId);
					con.close();
					return true;
				} else {
					con.close();
				}
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return false;
			
		}
		
		public String update(Funcionario funcionario) {
			
			String query = "UPDATE funcionario SET nome_completo = ?, matricula = ?, data_desligamento = ?, ultimo_salario = ? WHERE id = ?";
			
			try {
				PreparedStatement ps = con.prepareStatement(query);
				
				ps.setString(1, funcionario.getNome_completo());
				ps.setFloat(2, funcionario.getmatricula());
				ps.setFloat(3, funcionario.getdata_desligamento());
				ps.setInt(4, funcionario.getultimo_salario());
				ps.setInt(5, funcionario.getId());
				
				if(ps.executeUpdate() > 0) {
					con.close();
					return "sucesso";
				}

				con.close();
			} catch (SQLException e) {
				return e.toString();
				//e.printStackTrace();
			}
			
			return "falha ao atualizar cadastro";		
		}
		
		public boolean delete(int id) {
			
			String query = "DELETE FROM s WHERE id = ?";
			
			try {
				PreparedStatement ps = con.prepareStatement(query);
				
				ps.setInt(1, id);
				
				if(ps.executeUpdate() > 0) {
					con.close();
					return true;
				}

				con.close();	
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return false;
			
		}
		
	}
