package Skola.java;

import java.util.Scanner;
public class kth_javap_ord {
    public static void main(String[] args){
        String output = "";
        Scanner in;
        Integer n;
        
        in = new Scanner(System.in);
        n = in.nextInt();
        
        for(int i = 0; i < n; i++){
            output += in.next();
        }
        
        System.out.print(output);

        in.close();
    }
}
