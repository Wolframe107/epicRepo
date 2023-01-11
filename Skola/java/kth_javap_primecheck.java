package Skola.java;

import java.util.Scanner;

public class kth_javap_primecheck {

    public static void main(String[] args) {
        long sum = 0;
        int n;
        boolean isPrime = false;

        Scanner in;
        in = new Scanner(System.in);
        n = in.nextInt();

        for (int i = 0; i < n; i++) {
            sum += in.nextLong();
        }

        for (int i = 2; i <= Math.sqrt(sum); i++) {
            if (sum % i == 0) {
                System.out.print(i);
                isPrime = true;
                break;
            }
        }

        if (!isPrime) {
            System.out.print(sum);
        }
    }
}
