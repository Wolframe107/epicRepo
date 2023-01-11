package Skola.java;

import java.util.Scanner;

public class kth_javap_ngramcounter {
    public static int checkForUnique(int n, String input){
        String[] duplicates_exist;
        // Ha två arrays, en för unika delmängder?
        
        // Gå igenom ordet baklänges, chunck för chunck kolla om unikt
        // 

        for(int i = 0; i < input.length(); i++){
            for(int j = 0; j < input.length(); j++){
                if(input.regionMatches(false, i, input, j, n)){
                    System.out.print("Wow!");
                }
            }
            
        }

        return -1;
    }
    
    public static void main(){
        Scanner in;
        int n;
        String input;
        
        in = new Scanner(System.in);

        n = in.nextInt();
        input = in.next();
    
        System.out.print(checkForUnique(n, input));

        in.close();
    }
}
