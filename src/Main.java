import java.util.*;
public class Main {
    public static void main(String args[]){
        int[] a = new int[8];
        int n = 8;
        Scanner sc = new Scanner(System.in);
        for (int i=0;i<n;i++){
            a[i] = sc.nextInt();
        }
        int max = a[n-1];
        List<Integer> listnew = new ArrayList<>();
        for (int i=n-2;i>=0;i--){
            if (a[i] > max){
                max = a[i];
                listnew.add(max);
            }
        }
        for (int i = listnew.size() - 1; i>=0;i--){
            System.out.print(listnew.get(i));
        }
        sc.close();
        
    }
}
