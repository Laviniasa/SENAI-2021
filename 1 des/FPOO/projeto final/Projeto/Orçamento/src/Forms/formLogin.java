package Forms;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

import Class.Data;

import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class formLogin extends JFrame {

	private JPanel contentPane;
	private JTextField txtUser;
	private JTextField txtPword;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					formLogin frame = new formLogin();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public formLogin() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 392, 308);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel Usertxt = new JLabel("Usuario:");
		Usertxt.setBounds(51, 67, 48, 14);
		contentPane.add(Usertxt);
		
		txtUser = new JTextField();
		txtUser.setBounds(105, 64, 177, 20);
		contentPane.add(txtUser);
		txtUser.setColumns(10);
		
		JLabel Pwordtxt = new JLabel("Senha:");
		Pwordtxt.setBounds(51, 122, 48, 14);
		contentPane.add(Pwordtxt);
		
		txtPword = new JTextField();
		txtPword.setBounds(105, 119, 177, 20);
		contentPane.add(txtPword);
		txtPword.setColumns(10);
		
		JButton Logbtn = new JButton("Login");
		Logbtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Data cldata = new Data();
				if (! cldata.validarUsuarios(Usertxt.getText(), new String(txtPword.getText()))) {
					JOptionPane.showMessageDialog(rootPane,"Usuario e senha incorretos" );
					Usertxt.setText("");
					Pwordtxt.setText("");
					Usertxt.requestFocusInWindow();
					return;
				}
				frmMenu frmenu = new frmMenu();
				frmenu.setVisible(true);
			}
		});
		Logbtn.setBounds(105, 187, 81, 23);
		contentPane.add(Logbtn);
		
		JButton Cancelbtn = new JButton("Sair");
		Cancelbtn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				dispose();
			}
		});
		Cancelbtn.setBounds(203, 187, 81, 23);
		contentPane.add(Cancelbtn);
		
		JLabel lblNewLabel = new JLabel("Bem Vindo!!!");
		lblNewLabel.setFont(new Font("Yu Gothic UI Semibold", Font.PLAIN, 14));
		lblNewLabel.setBounds(150, 11, 81, 29);
		contentPane.add(lblNewLabel);
	}
}
