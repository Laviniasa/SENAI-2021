package visao;

import java.util.Scanner;

public class TelaViagens {
	public static int menu = 0;
	public static Scanner leia = new Scanner(System.in);

	public static void main(String[] args) {
		String[] itens = { "1.cadastro", "2.listar", "3.sair" };
		while (menu != 3) {
			menu = menu(itens);
			switch (menu) {
			case 1:
				System.out.println("j� j� eu cadastro");
				break;
			case 2:
				System.out.println("j� j� vou listar");
				break;
			case 3:
				System.out.println("adeus!");
				break;
			default:
				System.out.println(" op��o invalida :(");
				break;
			}
		}
	}

	public static int menu(String[] itens) {
		for (String i : itens) {
			System.out.println(i);
		}
		return leia.nextInt();
	}
}