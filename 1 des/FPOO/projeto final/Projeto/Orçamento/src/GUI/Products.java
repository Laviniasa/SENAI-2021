package GUI;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import javax.swing.table.DefaultTableModel;

import com.toedter.calendar.JDateChooser;

//import com.toedter.calendar.JDateChooser;

import java.awt.Color;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.UIManager;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JTable;
import java.awt.event.ActionListener;
import java.util.Vector;
import java.awt.event.ActionEvent;
import java.awt.List;
import javax.swing.JTextPane;
import javax.swing.JTextArea;
import javax.swing.DropMode;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.AbstractListModel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import javax.swing.JColorChooser;


public class Products extends JFrame {

	private static final long serialVersionUID = 1L;

	private static JDateChooser date_chooser;

	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;
	private JTextField textField_2;
	private JTextField Idtxt;
	private JTextField textField_4;
	private JTextField textField_5;
	private JTable table;
	DefaultTableModel model;
	private JTextField IDtxt;
	private JTextField Prodtxt;
	private JTextField Forntxt;
	private JTextField Qtde;
	private JTextField Preço;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Products frame = new Products();
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
	public Products() {
		


		JTable table = new JTable();
		Object[] columns = { "id", "Produto", "Fornecedor", "Quantidade", "Preço", "Dia" };
		DefaultTableModel model = new DefaultTableModel();

		JFrame frame = new JFrame("WINDOW");
		frame.getContentPane().setBackground(Color.LIGHT_GRAY);
		frame.getContentPane().setForeground(Color.WHITE);
		frame.setBounds(100, 100, 746, 474);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(null);
		frame.setLocationRelativeTo(null);

		model.setColumnIdentifiers(columns);

		table.setBackground(Color.GREEN);
		table.setForeground(Color.black);
		table.setSelectionBackground(Color.red);
		table.setGridColor(Color.red);
		table.setSelectionForeground(Color.white);
		table.setFont(new Font("Tahoma", Font.PLAIN, 17));
		table.setRowHeight(30);
		table.setAutoCreateRowSorter(true);

		JScrollPane pane = new JScrollPane(table);
		pane.setForeground(Color.RED);
		pane.setBackground(Color.PINK);
		pane.setBounds(-3, 65, 733, 153);
		frame.getContentPane().add(pane);

		frame.setVisible(true);

		JPanel panel_2_1 = new JPanel();
		panel_2_1.setLayout(null);
		panel_2_1.setBackground(new Color(255, 69, 0));
		panel_2_1.setBounds(-3, 401, 733, 34);
		frame.getContentPane().add(panel_2_1);

		JLabel lblNewLabel_1_1 = new JLabel("");
		lblNewLabel_1_1.setBounds(286, 0, 136, 72);
		panel_2_1.add(lblNewLabel_1_1);

		JLabel ID = new JLabel("ID");
		ID.setFont(new Font("Tahoma", Font.PLAIN, 16));
		ID.setBounds(36, 244, 17, 14);
		frame.getContentPane().add(ID);

		IDtxt = new JTextField();
		IDtxt.setBounds(133, 243, 96, 20);
		frame.getContentPane().add(IDtxt);
		IDtxt.setColumns(10);

		JLabel lblNewLabel_2 = new JLabel("Produto");
		lblNewLabel_2.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_2.setBounds(36, 293, 86, 14);
		frame.getContentPane().add(lblNewLabel_2);

		Prodtxt = new JTextField();
		Prodtxt.setBounds(133, 292, 96, 20);
		frame.getContentPane().add(Prodtxt);
		Prodtxt.setColumns(10);

		JLabel lblNewLabel_3 = new JLabel("Data");
		lblNewLabel_3.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_3.setBounds(36, 347, 56, 14);
		frame.getContentPane().add(lblNewLabel_3);

		JLabel lblNewLabel_4 = new JLabel("Fornecedor");
		lblNewLabel_4.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_4.setBounds(263, 244, 110, 20);
		frame.getContentPane().add(lblNewLabel_4);

		Forntxt = new JTextField();
		Forntxt.setBounds(358, 244, 96, 19);
		frame.getContentPane().add(Forntxt);
		Forntxt.setColumns(10);

		JLabel lblNewLabel_5 = new JLabel("Quantidade");
		lblNewLabel_5.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_5.setBounds(262, 293, 86, 14);
		frame.getContentPane().add(lblNewLabel_5);

		Qtde = new JTextField();
		Qtde.setBounds(358, 292, 96, 20);
		frame.getContentPane().add(Qtde);
		Qtde.setColumns(10);

		JLabel lblNewLabel_6 = new JLabel("Pre\u00E7o");
		lblNewLabel_6.setFont(new Font("Tahoma", Font.PLAIN, 16));
		lblNewLabel_6.setBounds(263, 347, 56, 14);
		frame.getContentPane().add(lblNewLabel_6);
		
		date_chooser = new JDateChooser();
		date_chooser.getCalendarButton().setBounds(75, 0, 21, 23);
		date_chooser.setFont(new Font("Tahoma", Font.PLAIN, 12));
		date_chooser.setBounds(133, 343, 96, 23);
		date_chooser.setDateFormatString("dd/MM/yyyy");
		frame.getContentPane().add(date_chooser);
		date_chooser.setLayout(null);

		Preço = new JTextField();
		Preço.setBounds(358, 346, 96, 20);
		frame.getContentPane().add(Preço);
		Preço.setColumns(10);

		table.setModel(model);
		Object[] row = new Object[6];

		JButton btnNewButton = new JButton("Adicionar");
		//DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
       // String data = df.format(date_chooser.getDate());
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				row[0] = IDtxt.getText();
				row[1] = Prodtxt.getText();
				row[2] = new SimpleDateFormat("dd/MM/yyyy").format(date_chooser.getDate());
				row[3] = Forntxt.getText();
				row[4] = Qtde.getText();
				row[5] = Preço.getText();

				model.addRow(row);

				IDtxt.setText("");
				Prodtxt.setText("");

				Forntxt.setText("");
				Qtde.setText("");
				Preço.setText("");

			}
		});
		btnNewButton.setBounds(492, 291, 89, 23);
		frame.getContentPane().add(btnNewButton);

		JButton btnNewButton_1 = new JButton("Editar");
		btnNewButton_1.setBounds(601, 291, 89, 23);
		frame.getContentPane().add(btnNewButton_1);

		JButton btnNewButton_2 = new JButton("Excluir");
		btnNewButton_2.setBounds(492, 345, 89, 23);
		frame.getContentPane().add(btnNewButton_2);

		JButton btnNewButton_3 = new JButton("Salvar\r\n");
		btnNewButton_3.setBounds(601, 345, 89, 23);
		frame.getContentPane().add(btnNewButton_3);



		JPanel panel_2 = new JPanel();
		panel_2.setBounds(0, 0, 1, 44);
		date_chooser.add(panel_2);
		panel_2.setLayout(null);
		panel_2.setBackground(new Color(255, 69, 0));

		JLabel lblNewLabel = new JLabel("Produtos");
		lblNewLabel.setFont(new Font("Tahoma", Font.PLAIN, 20));
		lblNewLabel.setBounds(314, 23, 93, 14);
		panel_2.add(lblNewLabel);
		
		JPanel panel = new JPanel();
		panel.setLayout(null);
		panel.setBackground(new Color(255, 69, 0));
		panel.setBounds(-3, 0, 733, 67);
		frame.getContentPane().add(panel);
		
		JLabel lblNewLabel_7 = new JLabel("Produtos");
		lblNewLabel_7.setFont(new Font("Tahoma", Font.BOLD, 16));
		lblNewLabel_7.setBounds(318, 27, 84, 14);
		panel.add(lblNewLabel_7);

	}
}
