  
public static void main(string[] args){
  Scanner input = new Scanner(System.in);
  
  System.out.println("Please enter the number of runs: ");
  int limit = input.nextLine();
  
  for (int i = 0; i < limit; i++){
    System.out.println("Run " + i + " times");
  }
  
  System.out.println("Finished");
  
}
