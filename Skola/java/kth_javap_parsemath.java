package Skola.java;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class kth_javap_parsemath {

    public static long parseExpression(String input) {
        List<Long> values = new ArrayList<>();
        List<Character> operators = new ArrayList<>();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
//
//            if (c == ' ') {
//                continue;
//            }

            if (Character.isDigit(c)) {
                String tempString = "";

                while (i < input.length() && Character.isDigit(input.charAt(i))) {
                    tempString += input.charAt(i);
                    i++;
                }
                values.add(Long.parseLong(tempString.toString()));
                
            } else if (c == '(') {
                operators.add(c);
                
            } else if (c == ')') {
                
                values.add(applyOperation(operators.remove(operators.size() - 1), values.remove(values.size() - 1), values.remove(values.size() - 1)));
               
                operators.remove(operators.size() - 1); // Remove ( from operators
                
            } else if (c == '+' || c == '-' || c == '*') {
                if (!operators.isEmpty() && operators.get(operators.size() - 1) != '(') {
                    values.add(applyOperation(operators.remove(operators.size() - 1), values.remove(values.size() - 1), values.remove(values.size() - 1)));
                }

                operators.add(c);
            }
        }

        // Add last two "uttryck"
        values.add(applyOperation(operators.remove(operators.size() - 1), values.remove(values.size() - 1), values.remove(values.size() - 1)));
        
        return values.get(0);
    }

    private static long applyOperation(char op, long b, long a) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner in;
        in = new Scanner(System.in);
        String inputString = in.nextLine();
        System.out.print(parseExpression(inputString));
        in.close();
    }
}
